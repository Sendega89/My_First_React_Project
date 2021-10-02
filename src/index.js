
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './Redux/state';
import ReactDOM from "react-dom";
import React from "react";
import './index.css';
import App from "./App";
import {addMessage, addPost, updateMessageText, updateNewPostText} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = ()=> {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                     addMessage={addMessage}
                     updateMessageText={updateMessageText}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

reportWebVitals();
