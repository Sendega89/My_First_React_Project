import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Sidebar/Item/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import Photo from "./Components/Sidebar/Item/Photo/Photo";
import News from "./Components/Sidebar/Item/News/News";
import Dialogs from "./Components/Sidebar/Item/Dialogs/Dialogs";



function App(props) {

    return (
        <BrowserRouter>
            <div className="grid">
                <Header/>
                <Sidebar/>
                <div className="content">
                    <Route path="/Profile" render= { () =><Profile postData={props.postData}/>}/>
                    <Route path="/Dialogs" render={ () => <Dialogs dialogsData={props.dialogsData} messageData={props.messageData} />}/>
                    <Route path="/Photo"   component={Photo}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Settings" component={Settings}/>

                </div>


            </div>
        </BrowserRouter>
    )
}

export default App;
