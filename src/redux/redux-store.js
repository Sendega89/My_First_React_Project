import {combineReducers, createStore} from "redux";
import profile_Reducer from "./profile_Reducer";
import dialogs_Reducer from "./dialogs_Reducer";
import sidebar_Reducer from "./sidebar_Reducer";

let reducers = combineReducers({
        profilePage: profile_Reducer,
        dialogsPage: dialogs_Reducer,
        sidebar: sidebar_Reducer
    }
);

let store = createStore(reducers);


export default store;