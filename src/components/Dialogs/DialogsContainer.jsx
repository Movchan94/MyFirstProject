import React from "react";
import {addMessageCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";


let mapStateToProps = (state)=>{
    return {
        dialogsPage:state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch)=>{

    return {
        addMessage:(newMessageBody)=>{dispatch(addMessageCreator(newMessageBody))}
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);