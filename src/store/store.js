import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import questionReducer from "./slices/questions/QuestionSlices"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        question: questionReducer
    }
})

// const makeStore = () =>
//   configureStore({
//     reducer: {
//       [authSlice.name]: authSlice.reducer,
//     },
//     devTools: true,
//   });

// export const wrapper = createWrapper(makeStore);

// import QuestionReducer from "./QuestionReducer";
// import {createStore,applyMiddleware } from 'redux';

// import { createWrapper } from 'next-redux-wrapper';
// import reducers from './reducers'; // import your root reducer

// const makeStore = (context) => createStore(QuestionReducer);

// export const wrapper = createWrapper(makeStore, { debug: true });


// export default wrapper;




// import { configureStore } from '@reduxjs/toolkit'

// export const makeStore = () => {
//   return configureStore({
//     reducer: {}
//   })
// }