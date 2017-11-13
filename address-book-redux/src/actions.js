export function ACTION_checkName(name){
    return{
        type: 'CHECK_NAME',
        name
    };
}

export function ACTION_checkAddy(addy){
    return{
        type: 'CHECK_ADDY',
        addy
    };
}

export function ACTION_checkPhone(phone){
    return{
        type: 'CHECK_PHONE',
        phone
    };
}

export function ACTION_addToBook(entryAdded){
    return{
        type: 'ADD_TO_BOOK',
        entryAdded
    };
}