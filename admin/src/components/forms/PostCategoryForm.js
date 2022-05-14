import { Alert } from 'antd';
import { withFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { addPostCategoryAPIAction, updatePostCategoryAPIAction } from '../../redux/actions/PostCategoryActions/PostCategoryActions';
import { SET_SUBMIT_POST_CATEGORY_FORM } from '../../redux/constants/DrawerContants/DrawerContants';
import { ADD_PRODUCT_CATEGORY_SAGA, SET_SUBMIT_CREATE_PRODUCT_CATEGORY } from '../../redux/constants/ProductCategoryConstants/ProductCategoryConstants';
import { USER_LOGIN } from '../../util/constants/settingSystem';

let userName = "";
try {
    userName = JSON.parse(localStorage.getItem(USER_LOGIN))?.userName;
} catch (error) {
    console.log(error)
}

function Form(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: SET_SUBMIT_POST_CATEGORY_FORM, submitFunction: handleSubmit })
    }, [])
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
    return (
        <form className="container-fuild" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-12 col-md-6 mb-3">
                    <div className="form-group">
                        <p className="font-weight-bold">Tiêu Đề</p>
                        <input type="text" className="form-control" value={values.tittle} name="tittle" onChange={handleChange} />
                        {errors.tittle && touched.tittle && <Alert id="feedback" message={errors.tittle} type="error" showIcon />}
                        
                        </div>
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                        <div className="form-group">
                        <p className="font-weight-bold">Mô Tả</p>
                        <input type="text" className="form-control" value={values.description} name="description" onChange={handleChange} />
                        {errors.description && touched.description && <Alert id="feedback" message={errors.description} type="error" showIcon />}
                    </div>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked={values.status} onChange={handleChange} name='status' id="status" />
                        <label className="form-check-label" htmlFor="status">
                            Hiển thị
                        </label>
                    </div>
                </div>
            </div>
        </form >
    )
}

const PostCategoryForm = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        const { PostCategory } = props;
        if (PostCategory) {
            return {
                tittle: PostCategory.tittle,
                description: PostCategory.description,
                status: PostCategory.status,
            }
        }
        else {
            return {
                tittle: '',
                description: '',
                status: true,
            }
        }
    },
    // Custom sync validation
    validationSchema: Yup.object().shape({
        tittle: Yup.string()
            .min(5, 'Tiêu đề quá ngắn!')
            .max(100, 'Tiêu đề quá dài!')
            .required('Cần nhập tiêu đề!'),
        description: Yup.string()
            .max(1000, 'Mô tả quá dài!')
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        let PostCategoryBuild = {
            tittle: values.tittle,
            description: values.description,
            status: values.status,
            createBy: userName
        }
        if (!props.PostCategory) {
            props.dispatch(addPostCategoryAPIAction(PostCategoryBuild))
        } else {
            props.dispatch(updatePostCategoryAPIAction({ ...PostCategoryBuild, PostCategoryID: props.PostCategory.postCategoryID }))
        }
    },

    displayName: 'Thêm Danh Mục Sản Phẩm Mới',
})(Form);

const mapStateToProps = (state) => ({

    // arrProjectCategory: state.ProjectCategoryReducer.arrProjectCategory

})


export default connect(mapStateToProps)(PostCategoryForm);