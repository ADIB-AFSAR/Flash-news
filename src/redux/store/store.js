import { configureStore } from "@reduxjs/toolkit";
import { newsReducer } from "../reducer/news.reducer";
import createSagaMiddleware from "redux-saga";
import news from "../sagas/saga";
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: newsReducer,
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(sagaMiddleware),
  devTools: true
})
sagaMiddleware.run(news)