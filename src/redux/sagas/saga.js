import { CategoriesnNewsError, CategoriesnNewsSuccess, newsError, newsSuccess } from "../action/action";
import {
   GET_CATEGORIES_NEWS_START,
   GET_NEWS_START } from "../constant/constant"
import { getNewsByAPI } from "./service"
import {takeLatest,put} from 'redux-saga/effects'

   function* getNews(){
  try {
     let data = yield getNewsByAPI();
    yield put(newsSuccess(data))
  } catch (error) {
    yield put(newsError(error.message))
  }
}

function* getCategoryNews({payload}){
    try {
       let data = yield getNewsByAPI(payload);
      yield put(CategoriesnNewsSuccess(data))
      yield getNews()
    } catch (error) {
      yield put(CategoriesnNewsError(error.message))
    }
  }

export default function*  news(){
    yield takeLatest(GET_NEWS_START,getNews)
    yield takeLatest(GET_CATEGORIES_NEWS_START,getCategoryNews)
}