import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';
import {auth, UISlice, DataSlice } from '../reducers';

import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { routerMiddleware,connectRouter } from "connected-react-router";


const history = createBrowserHistory()

// We get the token from the store to initialise the store.
// So we know if the user is still signed in.
function getAuthState() {
  try {
    const token = localStorage.getItem('token') || null;
    const expire = localStorage.getItem('expire') || null;
    const username = localStorage.getItem('username') || null;
    const role = localStorage.getItem('role') || null;
    // const installed = localStorage.getItem('installed') || null;
    const difference = (new Date(expire as any) as any) - (new Date() as any);
    const state = {
      auth: {
        token,
        expire,
        username,
        role,
        loggedIn: difference >= 0,
        // loggedIn: difference <= 0,
        loginError: false,
        installed: true, //! !installed,
        error: '',
      },
    };
    return state;
  } catch (err) {
    return undefined;
  }
}
const store = createStore(
  (history:any,...rest) =>
   combineReducers({
    auth,
    router: connectRouter(history),
    UIState: UISlice.reducer,
    videos: DataSlice.reducer,
    }),
  { ...getAuthState() },
  composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
);
export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;