import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Profile from "./Components/Profile/Profile";
import MyPosts from "./Components/Profile/MyPosts/MyPosts";

function App() {
    return (
        <div className="grid">
            <Header/>
            <Sidebar/>
            <Profile/>


        </div>
    )
}

export default App;
