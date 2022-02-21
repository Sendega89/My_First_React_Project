import * as axios from "axios";


const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "75b9535f-ac86-4688-992f-8643bc54bbe1"
        }
    });


export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data
                })
        )
    },

    getProfile(userId) {
        console.warn('Obsolete method,please use profileAPI object')
        return profileAPI.getProfile(userId)
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            },

}

export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status})
    }

}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}


