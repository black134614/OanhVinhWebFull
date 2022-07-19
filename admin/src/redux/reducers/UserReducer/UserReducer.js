import { GET_USER_INFO } from "../../constants/UserConstants/UserConstants"

const initialState = {
  UserInfo: {
    userName: "admin",
    password: "123456",
    fullName: "Oanh Vinh",
    phoneNumber: "xxx",
    isDelete: false,
    createTime: "2022-05-04T22:00:45.093",
    userDetail: "detail",
    avatar: "",
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO: {
      return { ...state, UserInfo: action.UserInfo }
    }
    default:
      return state
  }
}
