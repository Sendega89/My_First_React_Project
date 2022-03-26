import React from "react";
import './App.scss';
import style from "./common/CSS Modules/ThemeStyle.module.scss"
import Sidebar from "./Components/Sidebar/Sidebar";
import Settings from "./Components/Sidebar/Item/Settings/Settings";
import Photo from "./Components/Sidebar/Item/Photo/Photo";
import News from "./Components/Sidebar/Item/News/News";
import {Redirect, Route,withRouter} from "react-router-dom";
import DialogsContainer from "./Components/Sidebar/Item/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Sidebar/Item/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Profile/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app_Reducer";
import Preloader from "./common/Preloader/Preloader";
import Footer from "./Components/Footer/Footer";
import MusicContainer from "./Components/Sidebar/Item/Music/MusicContainer";
import ToDoListContainer from "./Components/Sidebar/Item/ToDoList/ToDoListContainer";




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
                <div className={style.content}>

                    <Route exact path="/"
                           render={() => <Redirect to={'/Profile'}/>}/>
                    <Route path="/Profile/:userId?"
                           render={() => <ProfileContainer/>}/>
                    <Route path="/Dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/Users"
                           render={() => <UsersContainer/>}/>
                    <Route path="/Music"
                           render={() => <MusicContainer />}/>
                    <Route path="/ToDoList"
                           render={() => <ToDoListContainer />}/>

                    <Route path="/Photo" component={Photo}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Settings" component={Settings}/>
                    <Route path="/Login" component={LoginPage}/>

                </div>
                <Footer />
            </div>

        )
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose (withRouter,
    connect (mapStateToProps, {initializeApp})) (App);
