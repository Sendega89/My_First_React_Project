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
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
    },
    saveProfile(valuesProfileForm) {
        return instance.put ( `profile/`,valuesProfileForm)
    },
    savePhoto(photoFile) {
        let formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {"Content-Type":"multipart/form-data" }
    });
}
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email,password,rememberMe=false,captcha=null) {
        return instance.post(`auth/login`,{email,password,rememberMe,captcha})
    },
    logout() {
        return instance.delete (`auth/login`)
    },
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}

