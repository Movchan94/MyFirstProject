import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50)

const MessageForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <Field
                placeholder='Enter your message'
                name ='newMessageBody'
                component = {Textarea}
                validate = {[required, maxLength50 ]}
            />
            <div>
                <button>Send</button>
            </div>
        </form>
    )}
    export default reduxForm({form: 'dialogAddMessageForm'})(MessageForm)
