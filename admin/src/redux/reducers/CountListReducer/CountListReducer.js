import { GET_COUNT_LIST } from "../../constants/CountListConstants/CountListConstants"

const initialState = {
    CountListItem: {
        CountPostCategory: 0,
        CountPosts: 0,
        CountProductCategory: 0,
        CountProducts: 0
    }

}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_COUNT_LIST:{
            return {...state, CountListItem: action.CountListItem}
        }

        default:
            return state
    }
}
