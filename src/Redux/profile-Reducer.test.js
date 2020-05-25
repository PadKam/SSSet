import profileReducer, {addPostActionCreator, deletePost} from "./profile-Reducer";
import React from 'react';


test('length of posts should be incremented', () => {

    let state = {
        postsDate: [
            {id: 1, post: "Hi, how are you?", lic: 15},
            {id: 2, post: "It's my first post", lic: 20},
            {id: 3, post: "Post from data", lic: 0},
            {id: 4, post: "Forwarding posts ", lic: 25}
        ],
        newPostText: "Testing Add Post",
    };

    let action = addPostActionCreator()
    let newState = profileReducer(state, action)

    expect(newState.postsDate.length).toBe(5);
});

test('message of new post should be correct', () => {

    let state = {
        postsDate: [
            {id: 1, post: "Hi, how are you?", lic: 15},
            {id: 2, post: "It's my first post", lic: 20},
            {id: 3, post: "Post from data", lic: 0},
            {id: 4, post: "Forwarding posts ", lic: 25}
        ],
        newPostText: "Testing Add Post",
    };

    let action = addPostActionCreator()
    let newState = profileReducer(state, action)

    expect(newState.postsDate[4].post).toBe("Testing Add Post");
});

test('after deleting length of message should be decrement', () => {

    let state = {
        postsDate: [
            {id: 1, post: "Hi, how are you?", lic: 15},
            {id: 2, post: "It's my first post", lic: 20},
            {id: 3, post: "Post from data", lic: 0},
            {id: 4, post: "Forwarding posts ", lic: 25}
        ],
        newPostText: "Testing Add Post",
    };

    let action = deletePost(1)
    let newState = profileReducer(state, action)

    expect(newState.postsDate.length).toBe(3);
});

test('test destructurisation', () => {

    let state = {
        postsDate: [
            {id: 1, post: "Hi, how are you?", lic: 15},
            {id: 2, post: "It's my first post", lic: 20},
            {id: 3, post: "Post from data", lic: 0},
            {id: 4, post: "Forwarding posts ", lic: 25}
        ],
        newPostText: "Testing Add Post",
    };

    let copyState = {...state}
    copyState.postsDate = [...state.postsDate]
    let rr = {postsDate:[]}
    rr.postsDate = copyState.postsDate.filter(p=>p.id!=1)

    expect(rr.postsDate.length).toBe(3);
});