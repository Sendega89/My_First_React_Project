import {combineReducers, createStore} from "redux";
import profile_Reducer from "./profile_Reducer";
import dialogs_Reducer from "./dialogs_Reducer";
import sidebar_Reducer from "./sidebar_Reducer";
import users_Reducer from "./users_Reducer";
import authReducer from "./auth_Reducer";

let reducers = combineReducers({
        profilePage: profile_Reducer,
        dialogsPage: dialogs_Reducer,
        sidebar: sidebar_Reducer,
        usersPage: users_Reducer,
        auth:authReducer
    }
);

let store = createStore(reducers);
window.store = store

export default store;