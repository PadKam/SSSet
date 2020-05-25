import React from "react";
import Nav from "./Nav";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        friendsDate: state.sidebar.friendsDate
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
    }
}

const NavContainer = connect(mapStateToProps,mapDispatchToProps)(Nav);

export default NavContainer;




