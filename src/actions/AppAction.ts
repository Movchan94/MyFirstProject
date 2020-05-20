import {getAuthUserData} from "../redux/AuthReducer";
import {INITIALIZED_SUCCESS} from "../constans/constans";

export type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess =(): initializedSuccessActionType =>({type: INITIALIZED_SUCCESS});

export const initializeApp =()=>(dispatch: any)=> {

    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        });
}
