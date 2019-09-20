import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/STATE";



const Dialogs = (props) => {


    let dialogsElements  = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avaUser = {d.avaUser}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));

    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                 {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={onMessageChange} ref = {newMessageElement}
                          value= {props.newMessageText}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>


        </div>


    )

}
/**/
export default Dialogs;