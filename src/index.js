
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import ReactDOM from "react-dom";
import React from "react";
import './index.css';
import App from "./App";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = ()=> {
   
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>

                <App store={store} />

            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
});

reportWebVitals();
