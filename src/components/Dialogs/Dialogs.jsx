import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {
    addMessageCreator,
    updateNewMessageTextCreator
} from "../../redux/STATE";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avaUser={d.avaUser}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>);
    let newMessageText = state.newMessageText;

    let addMessage = () => {
        props.store.dispatch(addMessageCreator())
    }
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageTextCreator(body))
    }
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
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>


    )

}
/**/
export default Dialogs;