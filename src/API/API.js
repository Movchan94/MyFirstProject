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
    follow (userId){
        return instance.post(`/follow/${userId}`)
    },
    unfollow(userId){
       return  instance.delete(`/follow/${userId}`)
    },
    getProfile(userId){
        console.warn('Obsolete method.Please use Profile obj')
        return profileAPI.getProfile(userId)

    },

}

export const pofileAPI = {
    getProfile(userId){
        return instance.get(`profile/`+ userId)

    },
    getStatus(userId){
        return instance.get(`status/`+ userId)

    },
    updateStatus(status){
        return instance.put(`status`,{status:status})

    }

}

export const authAPI = {
    authMe(){
        return instance.get(`auth/me`)

    },
}


