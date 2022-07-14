import NoImg from '../../../assets/images/no-img.jpg';
import { RESET_AVATAR_PARAM, SET_AVATAR_PARAM, SET_INPUT_IMAGE_VALUE } from '../../constants/FormImageConstants/FormImageConstants';

const initialState = {
    avatarParam :NoImg,
    inputImgValue : "",

}

export default (state = initialState, action) => {
  switch (action.type) {

  case SET_AVATAR_PARAM: {
    return {...state, avatarParam: action.avatarParam}
  }

  case RESET_AVATAR_PARAM: {
    return {...state, avatarParam: NoImg, inputImgValue: ""}
  }

  case SET_INPUT_IMAGE_VALUE:{
    return {...state, inputImgValue: action.inputImgValue}
  }

  default:
    return state
  }
}
