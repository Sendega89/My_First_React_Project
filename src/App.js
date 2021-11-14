import React from "react";
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Settings from "./Components/Sidebar/Item/Settings/Settings";
import Photo from "./Components/Sidebar/Item/Photo/Photo";
import News from "./Components/Sidebar/Item/News/News";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Sidebar/Item/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Sidebar/Item/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Profile/Login/Login";





function App() {

    return (

        <div className="grid">
            <HeaderContainer />
            <Sidebar/>
            <div className="content">
                <Route path="/Profile/:userId?"
                       render={() => <ProfileContainer />}/>
                <Route path="/Dialogs"
                       render={() => <DialogsContainer/>}/>
                <Route path="/Users"
                       render={() => <UsersContainer/>}/>
                <Route path="/Photo" component={Photo}/>
                <Route path="/News" component={News}/>
                <Route path="/Settings" component={Settings}/>
                <Route path="/Login" component={Login}/>

            </div>

        </div>

    )
}

export default App;
