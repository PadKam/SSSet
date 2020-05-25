let inicialState = {
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
};


const sidebarReducer = (state = inicialState,action) =>{
    return state;
}

export default sidebarReducer;