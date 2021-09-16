import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Sidebar/Item/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import Photo from "./Components/Sidebar/Item/Photo/Photo";
import News from "./Components/Sidebar/Item/News/News";
import Message from "./Components/Sidebar/Item/Message/Message";



function App() {
    return (
        <BrowserRouter>
            <div className="grid">
                <Header/>
                <Sidebar/>
                <div className="content">
                    <Route path="/Profile" component={Profile}/>
                    <Route path="/Message" component={Message}/>
                    <Route path="/Photo"   component={Photo}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Settings" component={Settings}/>

                </div>


            </div>
        </BrowserRouter>
    )
}

export default App;
