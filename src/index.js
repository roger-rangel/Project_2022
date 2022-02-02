/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

// Reducers
import authReducer from './Controllers/Redux/authSlice';
import bugReducer from './Controllers/Redux/bugSlice';
import userReducer from './Controllers/Redux/userSlice';



//Redux Configure
const reducer = combineReducers({
  auth: authReducer,
  bugs: bugReducer,
  user: userReducer
})

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  serializableCheck: false
}),
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

