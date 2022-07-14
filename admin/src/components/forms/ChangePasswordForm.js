import { Alert } from 'antd';
import { withFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { updateUserAPI } from '../../redux/actions/UserActions/UserActions';
import { SET_SUBMIT_CHANGE_PASSWORD_FORM } from '../../redux/constants/DrawerContants/DrawerContants';

function Form(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: SET_SUBMIT_CHANGE_PASSWORD_FORM, submitFunction: handleSubmit })
    }, [])
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setValues,
        setFieldValue,
        setText
    } = props;
    return (
        <form className="container-fuild" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-6 mb-3">
                    <div className="form-group">
                        <p className="font-weight-bold">Mật Khẩu Mới</p>
                        <input value={values.newPassword} className="form-control" name="newPassword" onChange={handleChange} />
                        {errors.newPassword && touched.newPassword && <Alert id="feedback" message={errors.newPassword} type="error" showIcon />}
                    </div>
                </div>
                <div className="col-6 mb-3">
                    <div className="form-group">
                        <p className="font-weight-bold">Nhập Lại Mật Khẩu Mới</p>
                        <input value={values.reNewPassword} className="form-control" name="reNewPassword" onChange={handleChange} />
                        {errors.reNewPassword && touched.reNewPassword && <Alert id="feedback" message={errors.reNewPassword} type="error" showIcon />}
                    </div>
                </div>
            </div>
        </form >
    )
}

const ChangePasswordForm = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({newPassword: '', reNewPassword: ''})
    ,
    // Custom sync validation
    validationSchema: Yup.object().shape({

        newPassword: Yup.string()
            .required('Bạn cần nhập mật khẩu mới!')
            .min(5, 'Mật khẩu có ít nhất 5 kí tự!')
            .max(50, 'Mật khẩu có độ dài tối đa 100 kí tự!'),
        reNewPassword: Yup.string()
        .required('Bạn cần nhập lại mật khẩu mới!')
            .oneOf([Yup.ref('newPassword'), null], 'Mật khẩu nhập lại không khớp')
    }),
    handleSubmit: (values, { props, setSubmitting ,resetForm}) => {
        let user = {
            userName: props.UserInfo.userName,
            fullName : props.UserInfo.fullName,
            password: values.newPassword,
            phoneNumber: props.UserInfo.phoneNumber,
            userDetail: props.UserInfo.userDetail,
            avatar: props.UserInfo.avatar,
            avatarParam: props.UserInfo.avatar
        }
        props.dispatch(updateUserAPI(user));
        resetForm();
    },
    displayName: 'Đổi mật khẩu',
})(Form);

const mapStateToProps = (state) => ({
UserInfo : state.UserReducer.UserInfo
})



export default connect(mapStateToProps)(ChangePasswordForm);