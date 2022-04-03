import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import ReactDOM from "react-dom";
import React from "react";
import './index.scss';
import App from "./App";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

{/*basename={process.env.PUBLIC_URL}*/}
ReactDOM.render(
    <React.StrictMode>
        <HashRouter >
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
