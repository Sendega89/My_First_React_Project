import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile_Reducer";
import {withRouter} from "react-router-dom";
import {getProfile} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 20558
        }
        getProfile(userId).then(data=> {
                this.props.setUserProfile(data);
            });
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WidthUrlDataContainerComponent =  withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile})(WidthUrlDataContainerComponent);