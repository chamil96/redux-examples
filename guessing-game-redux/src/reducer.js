import _ from "lodash";
import { initialState } from './index';

export default (state = {}, action) => {

    let copyState;
    
    switch(action.type){
        case 'CHOOSE_GAMEMODE':
        //makes a copy of state
        copyState = _.merge({}, state);

        //sets new values in state by listing path to current value in state
        //and replacing it with new value
        _.set(copyState, "difficulty", action.mode);
        _.set(copyState, "instructions", action.newInstructions);
        _.set(copyState, "correctNumber", action.randomNum);

            return copyState;
        
        case 'GET_INPUT':
        copyState = _.merge({}, state);
        _.set(copyState, "userGuess", action.input);

            return copyState;
        
        case 'RUN_COMPARISON':
        copyState = _.merge({}, state);
        _.set(copyState, "win", action.win);
        _.set(copyState, "userAttempts", action.attempts);

            return copyState;
        
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}