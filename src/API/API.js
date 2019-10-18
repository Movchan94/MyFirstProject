import * as axios from "axios";



const instance = axios.create({
    withCredentials: true,
    headers:{
        "API-KEY" :"5be565a7-e547-4dd9-8dd4-250fe28b0152"
    },
    baseURL:'https://social-network.samuraijs.com/api/1.0/'

});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return   instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow (userID){
        return instance.post(`/follow/${userID}`)
    },
    unfollow(userID){
       return  instance.delete(`/follow/${userID}`)
    },
    getProfile(userId){
        return instance.get(`profile/`+userId)

    },

}
export const authAPI = {
    authMe(){
        return instance.get(`auth/me`)

    },
}

