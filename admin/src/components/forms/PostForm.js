import { Editor } from '@tinymce/tinymce-react'
import { Alert } from 'antd';
import { withFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { USER_LOGIN } from '../../util/constants/settingSystem';
import NoImg from '../../assets/images/no-img.jpg'
import { SET_SUBMIT_POST_FORM } from '../../redux/constants/DrawerContants/DrawerContants';
import { getAllPostCategoryAPIAction } from '../../redux/actions/PostCategoryActions/PostCategoryActions';
import { addPostAPIAction, updatePostAPIAction } from '../../redux/actions/PostActions/PostActions';


const createBy = JSON.parse(localStorage.getItem(USER_LOGIN)).userName;
let avatarParam = '';
function Form(props) {
    const [avatarImg, setAvatarImg] = useState(avatarParam);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: SET_SUBMIT_POST_FORM, submitFunction: handleSubmit });
        dispatch(getAllPostCategoryAPIAction());
    }, [])
    const { PostCategoryList } = props;
    const renderImage = () => {
        if (avatarImg === '') {
            return <img src={props.Post ? props.Post.postImages : NoImg} style={{ height: 100, width: 100, objectFit: 'cover' }} />
        }
        else {
            return <img src={avatarImg} style={{ height: 100, width: 100, objectFit: 'cover' }} />
        }
    }
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setValues,
        setFieldValue
    } = props;
    const onSelectFile = (event) => {
        let reader = new FileReader(); // HTML5 FileReader API
        if (event.target.files && event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]);

            //When file uploads set it to file formcontrol
            reader.onload = (e) => {
                // called once readAsDataURL is completed
                setAvatarImg(e.target.result.toString());
                avatarParam = e.target.result.toString();
            };
        }
    }


    return (
        <form className="container-fuild" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-6 mb-3">
                    <div className="form-group">
                        <p className="font-weight-bold">Tên bài viết</p>
                        <input value={values.postName} className="form-control" name="postName" onChange={handleChange} />
                        {errors.postName && touched.postName && <Alert id="feedback" message={errors.postName} type="error" showIcon />}
                    </div>
                </div>
                <div className="col-6 mb-3">
                    <div className="form-group">
                        <p className="font-weight-bold">Mô Tả bài viết</p>
                        <input value={values.postDescription} className="form-control" name="postDescription" onChange={handleChange} />
                        {errors.postDescription && touched.postDescription && <Alert id="feedback" message={errors.postDescription} type="error" showIcon />}
                    </div>
                </div>
                <div className="col-6 mb-3">
                    <div className="form-group">
                        <p className="font-weight-bold">ALT SEO bài viết</p>
                        <input value={values.postALTSEO} className="form-control" name="postALTSEO" onChange={handleChange} />
                        {errors.postALTSEO && touched.postALTSEO && <Alert id="feedback" message={errors.postALTSEO} type="error" showIcon />}
                    </div>
                </div>
                <div className="col-6 mb-3">
                    <div className="form-group">
                        <p>Danh Mục bài viết</p>
                        <select name="postCategoryID" defaultValue={values.postCategoryID} className="form-control" onChange={(e) => {

                            // //dispatch giá trị làm thay đổi arrUser
                            // let { value } = e.target;
                            // dispatch({
                            //     type: GET_USER_BY_PROJECT_ID_SAGA,
                            //     idProject: value
                            // })
                            //Cập nhật giá trị cho project Id
                            setFieldValue('postCategoryID', e.target.value);


                        }}>
                            {PostCategoryList.map((item, index) => {
                                return <option key={index} value={item.postCategoryID}>{item.tittle}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="col-6 mb-3">
                    <p className="font-weight-bold">Avatar</p>
                    <input className="form-control" type="file" onChange={(e) => { onSelectFile(e) }} />
                </div>
                <div className="col-6 mb-3">
                    {renderImage()}
                </div>
                <div className="col-6 mb-3">
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="status">
                            Hiển thị
                        </label>
                        <input className="form-check-input" type="checkbox" defaultChecked={values.status} onChange={handleChange} name='status' id="status" />
                    </div>
                </div>
                <div className="col-12 mb-3">
                    <div className="form-group">
                        <p className="font-weight-bold">Chi Tiết bài viết</p>
                        <Editor
                            name="postDetail"
                            initialValue={values.postDetail}
                            init={{
                                selector: 'textarea#myTextArea',
                                height: 500,

                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar:
                                    'undo redo | formatselect | bold italic backcolor | \
        alignleft aligncenter alignright alignjustify | \
        bullist numlist outdent indent | removeformat | help'
                            }}
                            onEditorChange={(content, editor) => {
                                setFieldValue('postDetail', content);
                            }}
                        />
                        {errors.postDetail && touched.postDetail && <Alert id="feedback" message={errors.postDetail} type="error" showIcon />}
                    </div>
                </div>
            </div>
        </form >
    )
}

const PostForm = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        const { Post } = props;
        if (!Post) {
            return {
                postName: '',
                postDescription: '',
                postALTSeo: '',
                postCategoryID: props.PostCategoryList[0].postCategoryID,
                status: true,
                postDetail: ''
            }
        }
        else {
            return {
                postName: props.Post.postName,
                postDescription: props.Post.postDescription,
                postALTSeo: props.Post.postALTSeo,
                postCategoryID: props.Post.postCategoryID,
                status: props.Post.status,
                postDetail: props.Post.postDetail
            }
        }
    },
    // Custom sync validation
    validationSchema: Yup.object().shape({
        postName: Yup.string()
            .required('Bạn cần nhập tên bài viết!')
            .max(100, 'Tên bài viết nhập dưới 100 kí tự!'),
        postDescription: Yup.string()
            .max(1000, 'Mô tả bài viết dưới 1000 kí tự!'),
        postALTSeo: Yup.string()
            .max(1000, 'Từ khóa SEO dưới 1000 kí tự!')
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        let Post = {
            postTitle: values.postName,
            postDetail: values.postDetail,
            postDescription: values.postDescription,
            postCategoryID: values.postCategoryID,
            postImages: avatarParam,
            postALTSEO: values.postALTSEO,
            status: values.status,
            createBy: createBy
        }
        if (props.Post) {
            Post = { ...Post, PostID: props.Post.postID };
            console.log('update',Post);
            props.dispatch(updatePostAPIAction(Post));
        }
        else {
            props.dispatch(addPostAPIAction(Post));
        }
    },
    displayName: 'Sửa thông tin',
})(Form);

const mapStateToProps = (state) => ({

    PostCategoryList: state.PostCategoryReducer.PostCategoryList

})



export default connect(mapStateToProps)(PostForm);