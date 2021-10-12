import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Sidebar/Item/Settings/Settings";
import Photo from "./Components/Sidebar/Item/Photo/Photo";
import News from "./Components/Sidebar/Item/News/News";
import Dialogs from "./Components/Sidebar/Item/Dialogs/Dialogs";
import {Route} from "react-router-dom";


function App(props) {

    return (

        <div className="grid">
            <Header/>
            <Sidebar/>
            <div className="content">
                <Route path="/Profile"
                       render={() => <Profile postData={props.state.profilePage.postData}
                                              dispatch = {props.dispatch}
                                              newPostText={props.state.profilePage.newPostText}
                                              />}/>
                <Route path="/Dialogs"
                       render={() => <Dialogs dialogsData={props.state.dialogsPage.dialogsData}
                                              messageData={props.state.dialogsPage.messageData}/>}/>

                <Route path="/Photo" component={Photo}/>
                <Route path="/News" component={News}/>
                <Route path="/Settings" component={Settings}/>

            </div>

        </div>

    )
}

export default App;
