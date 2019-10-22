import React from 'react';
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import connect from "react-redux/es/connect/connect";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


let mapStateToProps = (state)=>{
    return {
        dialogsPage:state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        addMessage:()=>{dispatch(addMessageCreator())},
        updateNewMessageText:(body)=>{dispatch(updateNewMessageTextCreator(body))}
    }
}
let AuthRedirectComponent = withAuthRedirect(Dialogs)



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
/**/
export default DialogsContainer;