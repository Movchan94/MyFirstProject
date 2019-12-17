import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import MessageForm from "./addMessageForm";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements   = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} avaUser={d.avaUser}/>);
    let messagesElements  = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>);
    let newMessageBody    = state.newMessageBody;


    let addNewMessage  = (values) => {
        props.addMessage(values.newMessageBody)
    }
    if (!props.isAuth) return <Redirect to ={"/login"}/>
    return (
        <div className={s.dialogs}>
            <div className ={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <MessageForm onSubmit = {addNewMessage}/>
            </div>
        </div>
    )
}
export default Dialogs;