import * as axios from "axios";

const baseUrl = "https://social-network.samuraijs.com/api/1.0/"

const instance = axios.create({
    withCredentials: true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{'API-KEY':'1994bf92-79d3-43e4-be27-5e5bdd71c71e'}
})

export const userAPI = {
    getUsers(page = 1, size = 10){
        return instance.get(`users?page=${page}&count=${size}`).then(response => response.data)
    },

    getProfile (userId){
        return instance.get(`profile/${userId}`).then(
            response => response.data
        )
    },

    getFollow (userId){
        return instance.post(`follow/${userId}`).then(response => response.data.resultCode)
    },

    getUnFollow (userId){
        return instance.delete(`follow/${userId}`).then(response => response.data.resultCode)
    },

    authMe (){
        return instance.get(`auth/me`).then(response => response.data)
    },

    authLogin (email=null,password=null,rememberMy=false){
        return instance.post(`auth/login`,{
            email:email,
            password:password,
            rememberMy:rememberMy
        })
    },

    authUnLogin (){
        return instance.delete(`auth/login`)
    },

    getStatus (userId){
        return instance.get(`/profile/status/${userId}`).then(response => response.data)
    },

    putNewAuthUserStatus (newStatus){
        return instance.put(`/profile/status/`,{status: newStatus}).then(response => response.data)
    }
}