import React from "react";
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import reportWebVitals from "./reportWebVitals";
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import App from "./App"
import rootReducer from './reducers';
import RequireAuth from './containers/RequireAuth';
import RequireGuest from './containers/RequireGuest';
import Login from "./pages/Login/Login";
import {Cameras, Connections, Dashboard, LatestEvents, LiveStream, Media } from "./pages";
import Layout from "./components/Layout/Layout";
import {applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import "./global.scss";

const history = createBrowserHistory();

// We get the token from the store to initialise the store.
// So we know if the user is still signed in.
interface AuthState {
    auth: any
}

function getAuthState():AuthState {
    let state:AuthState = {
        auth: {}
    };
    try {
        const token = localStorage.getItem('token') || null;
        const expire = localStorage.getItem('expire') || "";
        const username = localStorage.getItem('username') || null;
        const role = localStorage.getItem('role') || null;
        const difference: number = new Date(expire).valueOf() - new Date().valueOf();
        state.auth = {
            token,
            expire,
            username,
            role,
            loggedIn: difference >= 0,
            loginError: false,
            installed: true, //! !installed,
            error: '',
        };
    } catch (err) {}

    return state;
}

const authState = getAuthState();
const store = createStore(
    rootReducer(history),
    { ...authState },
    composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
);

ReactDOM.render(
      <Provider store={store}>
          <ConnectedRouter history={history}>
            <React.StrictMode>
                <Switch>
                    <Route path="/login" component={RequireGuest(Login)} />
                    <App>
                        <Route exact path="/dashboard" component={RequireGuest(Dashboard)} />
                        <Route path="/events" component={RequireAuth(LatestEvents)} />
                        <Route path="/livestream" component={RequireAuth(LiveStream)} />
                        <Route path="/media" component={RequireAuth(Media)} />
                        <Route path="/cameras" component={RequireAuth(Cameras)} />
                        <Route path="/connections" component={RequireAuth(Connections)} />
                    </App>
                </Switch>
            </React.StrictMode>
          </ConnectedRouter>
      </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();