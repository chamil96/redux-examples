import _ from "lodash";
import { initialState } from './index';

export default (state = {}, action) => {
    let copyState;
    
    switch(action.type){
        case 'CHECK_NAME':
        //makes a copy of state
        copyState = _.merge({}, state);

        //sets new values in state by listing path to current value in state
        //and replacing it with new value
        _.set(copyState, `personInfo.name`, action.name);

            return copyState;

        case 'CHECK_ADDY':
        
        copyState = _.merge({}, state);

        _.set(copyState, `personInfo.address`, action.addy);

            return copyState;
        
        case 'CHECK_PHONE':
        
        copyState = _.merge({}, state);

        _.set(copyState, `personInfo.phone`, action.phone);

            return copyState;
            
        case 'ADD_TO_BOOK':
        
        copyState = _.merge({}, state);

        _.set(copyState, `addressBook`, action.entryAdded);

            return copyState;    
        
        default:
            return state;
    }
}