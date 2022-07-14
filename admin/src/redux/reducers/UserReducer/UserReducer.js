import { GET_USER_INFO } from "../../constants/UserConstants/UserConstants"

const initialState = {
  UserInfo: {
    userName: "admin",
    password: ":( lộ thế",
    fullName: "tét thay ",
    phoneNumber: "string",
    isDelete: true,
    createTime: "2022-05-04T22:00:45.093",
    userDetail: "asdasdaddasd",
    avatar: "Users/tét thay .png",
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
