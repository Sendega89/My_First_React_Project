import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profile_Reducer from "./profile_Reducer";
import dialogs_Reducer from "./dialogs_Reducer";
import sidebar_Reducer from "./sidebar_Reducer";
import users_Reducer from "./users_Reducer";
import authReducer from "./auth_Reducer";
import thunkMeddleWare from "redux-thunk";
import appReducer from "./app_Reducer";
import music_Reducer from "./music_Reducer";

let reducers = combineReducers({
        profilePage: profile_Reducer,
        dialogsPage: dialogs_Reducer,
        musicPage:music_Reducer,
        sidebar: sidebar_Reducer,
        usersPage: users_Reducer,
        auth:authReducer,
        app:appReducer,
    }
);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMeddleWare)
));


/*const store = createStore(reducers, applyMiddleware(thunkMeddleWare));*/


export default store;