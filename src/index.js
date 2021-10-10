
import reportWebVitals from './reportWebVitals';
import store from './Redux/state';
import ReactDOM from "react-dom";
import React from "react";
import './index.css';
import App from "./App";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state)=> {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={store.addPost.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}
                     addMessage={store.addMessage.bind(store)}
                     updateMessageText={store.updateMessageText.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();
