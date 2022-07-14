import { Editor } from '@tinymce/tinymce-react'
import { Alert } from 'antd';
import { withFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { updateUserAPI } from '../../redux/actions/UserActions/UserActions';
import { SET_SUBMIT_EDIT_USER_FORM } from '../../redux/constants/AuthConstants/AuthConstants';

let avatarParam = '';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
function Form(props) {
  const [avatarImg, setAvatarImg] = useState("https://picsum.photos/200/300");
  const dispatch = useDispatch();
  const editorRef = useRef(null);
  useEffect(() => {
    dispatch({ type: SET_SUBMIT_EDIT_USER_FORM, submitFunction: handleSubmit })
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
            <p className="font-weight-bold">Tên</p>
            <input value={values.fullName} className="form-control" name="fullName" onChange={handleChange} />
            {errors.fullName && touched.fullName && <Alert id="feedback" message={errors.fullName} type="error" showIcon />}
          </div>
        </div>
        <div className="col-6 mb-3">
          <div className="form-group">
            <p className="font-weight-bold">Số điện thoại</p>
            <input value={values.phoneNumber} className="form-control" name="phoneNumber" onChange={handleChange} />
            {errors.phoneNumber && touched.phoneNumber && <Alert id="feedback" message={errors.phoneNumber} type="error" showIcon />}
          </div>
        </div>
        <div className="col-6 mb-3">
          <p className="font-weight-bold">Avatar</p>
          <input className="form-control" type="file" onChange={(e) => { onSelectFile(e) }} />
        </div>
        <div className="col-6 mb-3">
          <img src={avatarImg} style={{ height: 100, width: 100, objectFit: 'cover' }} />
        </div>
        <div className="col-12 mb-3">
          <div className="form-group">
            <p className="font-weight-bold">Giới thiệu</p>
            <Editor
              name="userDetail"
              value={values.userDetail}
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
                setFieldValue('userDetail', content);
              }}
            />
            {errors.userDetail && touched.userDetail && <Alert id="feedback" message={errors.userDetail} type="error" showIcon />}
          </div>
        </div>
      </div>
    </form >
  )
}

const FormUserEdit = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const { UserInfo } = props;
    return {
      fullName: UserInfo.fullName,
      phoneNumber: UserInfo.phoneNumber,
      userDetail: UserInfo.userDetail,
    }
  },
  // Custom sync validation
  validationSchema: Yup.object().shape({

    phoneNumber: Yup.string()
      .required('Bạn cần nhập số điện thoại!')
      .matches(phoneRegExp, 'Chỉ nhập số!')
      .length(10, 'Số điện thoại có 10 chữ số!'),
    fullName: Yup.string().
    required('Bạn cần nhập tên!')
    .max(100, 'Tên có tối đa 100 kí tự!'),
    userDetail: Yup.string().max(1000, 'Giới thiệu quá dài!')
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    const createTime = new Date().toISOString();
    let user = {
      userName: props.UserInfo.userName,
      password: props.UserInfo.password,  
      fullName: values.fullName,
      phoneNumber: values.phoneNumber,
      userDetail: values.userDetail,
      avatar: props.UserInfo.avatar,
      createTime: createTime
    }
    if (avatarParam) {
      user = { ...user, avatarParam: avatarParam, avatar: "" }
    }
    props.dispatch(updateUserAPI(user));
    resetForm();
  },
  displayName: 'Sửa thông tin',
})(Form);

const mapStateToProps = (state) => ({

  UserInfo: state.UserReducer.UserInfo

})



export default connect(mapStateToProps)(FormUserEdit);