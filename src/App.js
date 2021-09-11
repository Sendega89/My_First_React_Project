import React from "react";
import './App.css';
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Profile from "./Components/Profile";

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
