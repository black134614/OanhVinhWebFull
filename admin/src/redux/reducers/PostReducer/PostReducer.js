import { GET_ALL_POST } from "../../constants/PostConstants/PostConstants"

const initialState = {
    PostCategorySearch: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_POST:
            state.PostList = action.PostList.map((item, index) => {
                return {
                    key: index + '',
                    postID: item.postID,
                    postName: item.postTitle,
                    postDescription: item.postDescription,
                    postDetail: item.postDetail,
                    postImages: item.postImages,
                    postALTSEO: item.postALTSEO,
                    status: item.status,
                    postCategoryID: item.postCategoryID + '',
                    postCategoryName: item.postCategoryName,
                    createBy: item.createBy
                }
            });
            let firstValue = 0;
            state.PostCategorySearch = [];
            action.PostList.map((item, index) => {
                if (item.postCategoryID === firstValue)
                    return;
                else {
                    firstValue = item.postCategoryID;
                    let newItem = {
                        text: item.postCategoryName,
                        value: item.postCategoryID + ''
                    }
                    return state.PostCategorySearch.push(newItem);
                }
            });
            return { ...state }

        default:
            return state
    }
}
