import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React from "react";

const maxLength10 =  maxLengthCreator(10)

const PostAddForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <Field
                placeholder='Enter your post'
                name ='NewPostBody'
                component = {Textarea}
                validate ={[required, maxLength10]}
            />
            <div>
                <button>Add post</button>
            </div>
        </form>
    )}

export default reduxForm({form: 'profileAddPostForm'})(PostAddForm)
