import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} avaUser={d.avaUser}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>);
    let newMessageText = state.newMessageText;

    let onAddMessage = () => {
        props.addMessage();
    }
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageText(body);
    }
    if (!props.isAuth) return <Redirect to ={"/login"}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                <textarea placeholder='Enter your message'
                          onChange={onMessageChange}
                          value={newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={onAddMessage}>Send message</button>
                </div>
            </div>
        </div>


    )

}
/**/
export default Dialogs;