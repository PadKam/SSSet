import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator} from "../../Redux/messages-Reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps= (state) =>{
    return{
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addMessageActionCreator: (text) => {dispatch(addMessageActionCreator(text))}
    }
}

//let AuthRedirectComponent = withAuthRedirect(Dialogs);
//const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(withAuthRedirect(Dialogs));

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)