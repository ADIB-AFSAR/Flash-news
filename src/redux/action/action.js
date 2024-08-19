import { 
  GET_CATEGORIES_NEWS_ERROR,
   GET_CATEGORIES_NEWS_START,
    GET_CATEGORIES_NEWS_SUCCESS,
   GET_NEWS_ERROR, GET_NEWS_START, GET_NEWS_SUCCESS } from "../constant/constant"

 export const newsStart = ()=>({
   type : GET_NEWS_START
 })
 export const newsSuccess = (news)=>({
    type :  GET_NEWS_SUCCESS,
    payload : news
  })
  export const newsError = (error)=>({
    type : GET_NEWS_ERROR,
    payload : error
  })


  export const CategoriesnNewsStart = (slug)=>({
    type : GET_CATEGORIES_NEWS_START,
    payload : slug
  })
  export const CategoriesnNewsSuccess = (news)=>({
     type :  GET_CATEGORIES_NEWS_SUCCESS,
     payload : news
   })
   export const CategoriesnNewsError = (error)=>({
     type : GET_CATEGORIES_NEWS_ERROR,
     payload : error
   })