import profileReducer from "./profile-Reducer";
import messagesReducer from "./messages-Reducer";
import sidebarReducer from "./sidebar-Reducer";

let store = {
    _state: {
        messagesPage: {
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
        },
        profilePage: {
            postsDate: [
                {id: 1, post: "Hi, how are you?", lic: 15},
                {id: 2, post: "It's my first post", lic: 20},
                {id: 3, post: "Post from data", lic: 0},
                {id: 4, post: "Forwarding posts ", lic: 25}
            ],
            newPostText: ""
        },
        sidebar: {
            friendsDate: [
                {
                    id: 1,
                    name: 'Andrey',
                    imgAvatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5wIY7WEUfpetlAi8eMU8WC9VG5vN-r37bPLZzmZGcKnmAFBw6&usqp=CAU'
                },
                {
                    id: 2,
                    name: 'Valera',
                    imgAvatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0pH-OkScdA7iN4hslGOZxEauX-eAbO93KZb-XnCO8ap2QXB8p&usqp=CAU'
                },
                {
                    id: 3,
                    name: 'Sveta',
                    imgAvatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLCjboNlmxxOgPfaQHjJHwWfIby_vpkydGZKikbZKDN4HpoAE2&usqp=CAU'
                }
            ]
        }
    },
    _rerenderEntireTree() {
        console.log('State change');
    },
    subscrible(observer) {
        this._rerenderEntireTree = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);

        this._rerenderEntireTree();
    }
};

export default store;
window.store = store;
