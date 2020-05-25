const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

export const addMessageActionCreator = (newText) => ({type: ADD_MESSAGE, newText: newText});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

let inicialState = {
    dialogsDate: [
        {id: 1, name: 'Dimych', imgAvatarUrl: 'https://pbs.twimg.com/media/D8r-PBWWsAEXTfK.jpg'},
        {
            id: 2,
            name: 'Andrey',
            imgAvatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5wIY7WEUfpetlAi8eMU8WC9VG5vN-r37bPLZzmZGcKnmAFBw6&usqp=CAU'
        },
        {
            id: 3,
            name: 'Valera',
            imgAvatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0pH-OkScdA7iN4hslGOZxEauX-eAbO93KZb-XnCO8ap2QXB8p&usqp=CAU'
        },
        {
            id: 4,
            name: 'Sveta',
            imgAvatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLCjboNlmxxOgPfaQHjJHwWfIby_vpkydGZKikbZKDN4HpoAE2&usqp=CAU'
        }
    ],
    messagesDate: [
        {
            id: 1,
            idUser: 2,
            message: 'Hi',
            imgAvatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5wIY7WEUfpetlAi8eMU8WC9VG5vN-r37bPLZzmZGcKnmAFBw6&usqp=CAU'
        },
        {
            id: 2,
            idUser: 3,
            message: 'How is your it-kamasutra?',
            imgAvatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0pH-OkScdA7iN4hslGOZxEauX-eAbO93KZb-XnCO8ap2QXB8p&usqp=CAU'
        },
        {id: 3, idUser: 1, message: 'Super', imgAvatarUrl: 'https://pbs.twimg.com/media/D8r-PBWWsAEXTfK.jpg'}
    ],
    newMessageText: ""
};


const messagesReducer = (state = inicialState, action) => {
       switch (action.type) {
        case ADD_MESSAGE: {
            return addMessage(state,action.newText);
            break;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return updateNewMessageText(state,action.newText);
            break;
        }
    }
    return state;
}

let addMessage = (state,newText) =>{
    let stateCopy = {...state};
    stateCopy.messagesDate = [...state.messagesDate];

    stateCopy.messagesDate.push({
        id: stateCopy.messagesDate.length + 1,
        idUser: 2,
        message: newText,
        imgAvatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5wIY7WEUfpetlAi8eMU8WC9VG5vN-r37bPLZzmZGcKnmAFBw6&usqp=CAU'
    });
    stateCopy.newMessageText = "";

    return stateCopy;
};


let updateNewMessageText=(state,text) =>{
    let stateCopy = {...state};

    if (text != undefined) {
        stateCopy.newMessageText = text;
    } else
        console.log("text = undefined");

    return stateCopy;
};

export default messagesReducer;