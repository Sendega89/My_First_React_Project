import {Redirect} from "react-router-dom";
import React from "react";


export const  withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component{
        render() {
            if (!this.props.isAuth) return <Redirect to={"/Login"}/>
            return <Component {...this.props}/>
        }
        
    }
    return RedirectComponent;
}