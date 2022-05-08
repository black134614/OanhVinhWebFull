import { Editor } from '@tinymce/tinymce-react'
import { withFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { updateUserAPI } from '../../redux/actions/UserActions/UserActions';
import { SET_SUBMIT_EDIT_USER_FORM } from '../../redux/constants/AuthConstants/AuthConstants';

let avatarParam = '';
let userDetail = '';
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
  const log = () => {
    if (editorRef.current) {
      userDetail = editorRef.current.getContent();
    }
  };
  const handleEditorChange = (content, editor) => {
    setFieldValue('description', content)
  }
  return (
    <form className="container-fuild" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6 mb-3">
          <div className="form-group">
            <p className="font-weight-bold">Tên</p>
            <input value={values.fullName} className="form-control" name="fullName" onChange={handleChange} />
          </div>
        </div>
        <div className="col-6 mb-3">
          <div className="form-group">
            <p className="font-weight-bold">Số điện thoại</p>
            <input value={values.phoneNumber} className="form-control" name="phoneNumber" onChange={handleChange} />
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
              initialValue={values.userDetail}
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
              onInit={(evt, editor) => editorRef.current = editor}
              onChange={() => { log() }}
            />
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
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    const createTime = new Date().toISOString();
    const user = {
      userName: props.UserInfo.userName,
      fullName: values.fullName,
      phoneNumber: values.phoneNumber,
      userDetail: userDetail,
      avatarParam: avatarParam,
      createTime: createTime
    }
    props.dispatch(updateUserAPI(user));
  },
  displayName: 'Sửa thông tin',
})(Form);

const mapStateToProps = (state) => ({

  UserInfo: state.UserReducer.UserInfo

})



export default connect(mapStateToProps)(FormUserEdit);