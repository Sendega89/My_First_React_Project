import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Sidebar/Item/Settings/Settings";
import Photo from "./Components/Sidebar/Item/Photo/Photo";
import News from "./Components/Sidebar/Item/News/News";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Sidebar/Item/Dialogs/DialogsContainer";


function App(props) {
    debugger
    return (

        <div className="grid">
            <Header/>
            <Sidebar/>
            <div className="content">
                <Route path="/Profile"
                       render={() => <Profile store={props.store}
                       />}/>
                <Route path="/Dialogs"
                       render={() => <DialogsContainer store={props.store}
                       />}/>
                <Route path="/Photo" component={Photo}/>
                <Route path="/News" component={News}/>
                <Route path="/Settings" component={Settings}/>

            </div>

        </div>

    )
}

export default App;
