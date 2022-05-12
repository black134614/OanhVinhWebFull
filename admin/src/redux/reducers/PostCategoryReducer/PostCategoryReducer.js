import { GET_ALL_POST_CATEGORY } from "../../constants/PostCategoryConstants/PostCategoryConstants"

const initialState = {
    PostCategoryList: [
        {
            key: "0",
            postCategoryID: 0,
            tittle: "string",
            description: "string",
            positon: 0,
            status: true,
            isDelete: null,
            createBy: "admin",
            createTime: "2022-05-05T19:03:34.623"
        }
    ],
    EditPostCategory: {

    }
}

export default (state = initialState, action) => {
  switch (action.type) {

  case GET_ALL_POST_CATEGORY:{
    state.PostCategoryList = action.PostCategoryList.map((item, index) => {
        return {
            key: index + '',
            postCategoryID: item.postCategoryID,
            tittle: item.tittle,
            description: item.description,
            positon: item.positon,
            status: item.status,
            isDelete: item.isDelete,
            createBy: item.createBy,
            createTime: item.createTime
        };
    })
    console.log( state.PostCategoryList)
    return { ...state }
  }

  default:
    return state
  }
}
