import React from 'react';
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import connect from "react-redux/es/connect/connect";


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


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
/**/
export default DialogsContainer;