import {INITIALIZED_SUCCESS} from "../constans/constans";

let initialState: initialStateType = {
    initialized: false,
}
export type initialStateType = {
    initialized: boolean,
}
const AppReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}
export default AppReducer;
