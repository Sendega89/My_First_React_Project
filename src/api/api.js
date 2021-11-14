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
        return instance.get(`profile/` + userId)
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            },

}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}


