export function ACTION_chooseGamemode(mode, newInstructions, randomNum){
    return{
        type: 'CHOOSE_GAMEMODE',
        mode,
        newInstructions,
        randomNum
    };
}

export function ACTION_getInput(input){
    return{
        type: 'GET_INPUT',
        input
    };
}

export function ACTION_runComparison(win, attempts){
    return{
        type: 'RUN_COMPARISON',
        win, 
        attempts
        
    };
}

export function ACTION_reset(){
    return{
        type: 'RESET'
        
    };
}