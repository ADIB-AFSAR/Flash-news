import { GET_NEWS_SUCCESS,GET_NEWS_ERROR,
     GET_CATEGORIES_NEWS_SUCCESS,
      GET_CATEGORIES_NEWS_ERROR
     } from "../constant/constant";

const initialState = {
    news:[],
    categories:['war','politics','education','health','music','economy','business','entertainment','sport','technology'],
    categoryNews:[],
    err : {}
}
export const newsReducer = (state=initialState,action)=>{
  switch (action.type) {
        case GET_NEWS_SUCCESS:
        return{
            ...state,
            news:[...action.payload],
            err : {}
        }
        case GET_NEWS_ERROR:
        return{
            ...state,
            err : action.payload
        }
        case GET_CATEGORIES_NEWS_SUCCESS:
        return{
            ...state,
            categoryNews:[...action.payload],
            err : {}
        }
        case GET_CATEGORIES_NEWS_ERROR:
        return{
            ...state,
            error: action.payload
        }
    default:
        return state;
  }
}