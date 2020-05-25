import React from "react";
import ProfileStatus from "./ProfileStatus";


class ProfileStatusContainer extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
        tempStatus: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
                tempStatus: this.props.status
            })
        }
    }

    activateEditMode = () => {
        if (this.props.userId == this.props.authUserId)
            this.setState({
                editMode: !this.state.editMode
            })
    }

    deactivateEditMode = () => {
        this.props.updateStatusThunkCreate(this.state.tempStatus);
        this.setState({
            editMode:false
        })

    }

    changeStatus = (newsStatus) => {
        this.setState({
            tempStatus: newsStatus
        })
    }

    render() {
        return (
            <ProfileStatus state={this.state}
                           activateEditMode={this.activateEditMode}
                           deactivateEditMode={this.deactivateEditMode}
                           changeStatus={this.changeStatus}/>
        );
    }
}

export default ProfileStatusContainer;