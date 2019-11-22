import React from "react";
import {
    createField,
    Input, Textarea
} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({profile}) => {
    return (
    <form>
        <div><button onClick={()=>{}}>save</button></div>
        <div>
            <b>Full Name</b>: {createField("Full name:", "fullName", Input, null, null, null)}
        </div>
        <div>
            <b>Looking for a job</b>:{createField("",'lookingForAJob',Input, null, 'checkbox',null )}
        </div>
        <div>
            <b>My skills</b>:
            {createField("My skills",'lookingForAJobDescription',Textarea, null,null  )}
        </div>
        <div>
            <b>About me</b>:
            {createField("About me",'aboutMe',Textarea,[], null,null  )}
        </div>
       {/* <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key]}/>
        })}
        </div>*/}
    </form>
    )
}
const ProfileDataFormReduxForm =  reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm