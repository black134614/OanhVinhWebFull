import { Editor } from '@tinymce/tinymce-react'
import { Alert } from 'antd';
import { withFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { addProductAPI, updateProductAPI } from '../../redux/actions/ProductAction/ProductAction';
import { getAllProductCategorySagaAction } from '../../redux/actions/ProductCategoryActions/ProductCategoryActions';
import { SET_SUBMIT_PRODUCT_FORM } from '../../redux/constants/DrawerContants/DrawerContants';
import { USER_LOGIN } from '../../util/constants/settingSystem';
import NoImg from '../../assets/images/no-img.jpg'
import { resetAvatarParam, setAvatarParam, setInputImgValue } from '../../redux/actions/FormImageActions/FormImageActions';


const createBy = JSON.parse(localStorage.getItem(USER_LOGIN))?.userName;
let avatarParam = '';
function Form(props) {
    const avatarImg = useSelector(state => state.FormImageReducer.avatarParam);
    const inputImgValue = useSelector(state => state.FormImageReducer.inputImgValue);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: SET_SUBMIT_PRODUCT_FORM, submitFunction: handleSubmit });
        dispatch(getAllProductCategorySagaAction());
    }, [])
    const { ProductCategoryList } = props;
    const renderImage = () => {
            return <img src={avatarImg} style={{ height: 100, width: 100, objectFit: 'cover' }} />
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
                avatarParam = e.target.result.toString();
                dispatch(setAvatarParam(avatarParam));
            };
        }
    }


    return (
        <form className="container-fuild" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-6 mb-3">
                    <div className="form-group">
                        <p className="font-weight-bold">T??n S???n Ph???m</p>
                        <input value={values.productName} className="form-control" name="productName" onChange={handleChange} />
                        {errors.productName && touched.productName && <Alert id="feedback" message={errors.productName} type="error" showIcon />}
                    </div>
                </div>
                <div className="col-6 mb-3">
                    <div className="form-group">
                        <p className="font-weight-bold">M?? T??? S???n Ph???m</p>
                        <input value={values.productDescription} className="form-control" name="productDescription" onChange={handleChange} />
                        {errors.productDescription && touched.productDescription && <Alert id="feedback" message={errors.productDescription} type="error" showIcon />}
                    </div>
                </div>
                <div className="col-6 mb-3">
                    <div className="form-group">
                        <p className="font-weight-bold">ALT SEO S???n Ph???m</p>
                        <input value={values.productALTSeo} className="form-control" name="productALTSeo" onChange={handleChange} />
                        {errors.productALTSeo && touched.productALTSeo && <Alert id="feedback" message={errors.productALTSeo} type="error" showIcon />}
                    </div>
                </div>
                <div className="col-6 mb-3">
                    <div className="form-group">
                        <p>Danh M???c S???n Ph???m</p>
                        <select name="productCategoryID" value={values.productCategoryID} className="form-control" onChange={(e) => {

                            // //dispatch gi?? tr??? l??m thay ?????i arrUser
                            // let { value } = e.target;
                            // dispatch({
                            //     type: GET_USER_BY_PROJECT_ID_SAGA,
                            //     idProject: value
                            // })
                            //C???p nh???t gi?? tr??? cho project Id
                            setFieldValue('productCategoryID', e.target.value);


                        }}>
                            {ProductCategoryList.map((item, index) => {
                                return <option key={index} value={item.productCategoryID}>{item.tittle}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="col-6 mb-3">
                    <p className="font-weight-bold">Avatar</p>
                    <input className="form-control" value={inputImgValue} type="file" onChange={(e) => { onSelectFile(e); dispatch(setInputImgValue(e.target.value)) }} />
                </div>
                <div className="col-6 mb-3">
                    {renderImage()}
                </div>
                <div className="col-6 mb-3">
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="status">
                            Hi???n th???
                        </label>
                        <input className="form-check-input" type="checkbox" defaultChecked={values.status} onChange={handleChange} name='status' id="status" />
                    </div>
                </div>
                <div className="col-12 mb-3">
                    <div className="form-group">
                        <p className="font-weight-bold">Chi Ti???t S???n Ph???m</p>
                        <Editor
                            name="productDetail"
                            value={values.productDetail}
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
                                setFieldValue('productDetail', content);
                            }}
                        />
                        {errors.productDetail && touched.productDetail && <Alert id="feedback" message={errors.productDetail} type="error" showIcon />}
                    </div>
                </div>
            </div>
        </form >
    )
}

const ProductForm = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        const { Product } = props;
        if (!Product) {
            return {
                productName: '',
                productDescription: '',
                productALTSeo: '',
                productCategoryID: props.ProductCategoryList[0].productCategoryID,
                status: true,
                productDetail: ''
            }
        }
        else {
            return {
                productName: Product.productName,
                productDescription: Product.productDescription,
                productALTSeo: Product.productALTSeo,
                productCategoryID: Product.productCategoryID,
                status: Product.status,
                productDetail: Product.productDetail
            }
        }
    },
    // Custom sync validation
    validationSchema: Yup.object().shape({
        productName: Yup.string()
            .required('B???n c???n nh???p t??n s???n ph???m!')
            .max(100, 'T??n s???n ph???m nh???p d?????i 100 k?? t???!'),
        productDescription: Yup.string()
            .max(1000, 'M?? t??? s???n ph???m d?????i 1000 k?? t???!'),
        productALTSeo: Yup.string()
            .max(1000, 'T??? kh??a SEO d?????i 1000 k?? t???!')
    }),
    handleSubmit: (values, { props, setSubmitting, resetForm  }) => {
        let product = {
            productName: values.productName,
            productDetail: values.productDetail,
            productDescription: values.productDescription,
            productCategoryID: values.productCategoryID,
            productImages: avatarParam,
            productALTSeo: values.productALTSeo,
            status: values.status,
            createBy: createBy
        }
        if (props.Product) {
            product = { ...product, productID: props.Product.productID };
            props.dispatch(updateProductAPI(product));
        }
        else {
            props.dispatch(addProductAPI(product));
        }
        resetForm();
        props.dispatch(resetAvatarParam());
    },
    displayName: 'S???a th??ng tin',
})(Form);

const mapStateToProps = (state) => ({

    ProductCategoryList: state.ProductCategoryReducer.ProductCategoryList

})



export default connect(mapStateToProps)(ProductForm);