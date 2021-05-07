import { types } from './../types/types.js';
const authReducer = ( state = {}, action ) => {
    
    switch( action.type ){
        case types.login:
            return {
                ...action.paiload,
                logged: true,
            }
        case types.logout:
            return {
                ...action.paiload,
                logged: false,
            }
        default:
            return state;
    }
}


export default authReducer;