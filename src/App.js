import React from "react";
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Settings from "./Components/Sidebar/Item/Settings/Settings";
import Photo from "./Components/Sidebar/Item/Photo/Photo";
import News from "./Components/Sidebar/Item/News/News";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./Components/Sidebar/Item/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Sidebar/Item/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Profile/Login/Login";
import {connect} from "react-redux";

import {compose} from "redux";
import {initializeApp} from "./redux/app_Reducer";
import Preloader from "./common/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {

        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
        return  <Preloader />
    }

        return (
            <div className="grid">
                <HeaderContainer/>
                <Sidebar/>
                <div className="content">
                    <Route path="/Profile/:userId?"
                           render={() => <ProfileContainer/>}/>
                    <Route path="/Dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/Users"
                           render={() => <UsersContainer/>}/>
                    <Route path="/Photo" component={Photo}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Settings" component={Settings}/>
                    <Route path="/Login" component={LoginPage}/>
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})



export default compose (withRouter,
    connect (mapStateToProps, {initializeApp})) (App);
