import { GET_COUNT_LIST, GET_COUNT_LIST_SAGA } from "../../constants/CountListConstants/CountListConstants";

export const getCountListAPI = () => ({
  type: GET_COUNT_LIST_SAGA
})

export const getCountList = (CountListItem) => ({
  type: GET_COUNT_LIST,
  CountListItem
})
