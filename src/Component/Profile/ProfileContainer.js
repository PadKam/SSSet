import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreate, getStatusThunkCreate, updateStatusThunkCreate} from "../../Redux/profile-Reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = 2;
        if (this.props.match.params.userId)
            userId = this.props.match.params.userId;
        else if (this.props.isAuth)
            userId = this.props.authUserId;

        this.props.getProfileThunkCreate(userId);
        this.props.getStatusThunkCreate(userId);
    }

    render() {
        return (
            <Profile {...this.props}
                     status={this.props.status}
                     profile={this.props.profile}
                     updateStatusThunkCreate={this.props.updateStatusThunkCreate}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}
/*let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

const FindUserProfile = connect(mapStateToProps, {
    getProfileThunkCreate
})(withUrlDataContainerComponent);*/

/*обертка в connect дляпередачи и отрисовки
обертка в withRouter для возврата math в котором содержится параметры URL
обертка в withAuthRedirect для перенаправления на страницу Авторизации если не авторизован
 */
/*const FindUserProfile = connect(mapStateToProps, {
    getProfileThunkCreate
})(withRouter(withAuthRedirect(ProfileContainer)));*/

export default compose(
    connect(mapStateToProps, {getProfileThunkCreate, getStatusThunkCreate, updateStatusThunkCreate}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

