import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile_Reducer";
import { withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 20558
        }
        this.props.getUserProfile(userId)
    }
    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}
let AuthRedirectComponent =  withAuthRedirect(ProfileContainer);



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WidthUrlDataContainerComponent =  withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {getUserProfile})(WidthUrlDataContainerComponent);