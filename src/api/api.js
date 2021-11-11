import * as axios from "axios";


const instance = axios.create (
    {
        withCredentials: true,
        headers:{
            "API-KEY":"75b9535f-ac86-4688-992f-8643bc54bbe1"
        },
        baseURL: 'https://social-network.samuraijs.com/api/1.0/'
    }
)

export const  getUsers = (currentPage=1,pageSize=10) => {
return (
    instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
    )
};
export const  getAuth = () => {
return (
    instance.get(`auth/me`)
        .then(response => {
            return response.data
        })
    )
};
export const  getProfile = (userId) => {
return (
    instance.get(`profile/` + userId).then(response => {
            return response.data
        })
    )
};
export const  deleteFollow = (u) => {
return (
    instance.delete(`follow/${u.id}`).then(response => {
            return response.data
        })
    )
};
export const  postUnFollow = (u) => {
return (
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
        withCredentials: true,
            headers:{
            "API-KEY":"75b9535f-ac86-4688-992f-8643bc54bbe1"
        },
        baseURL: 'https://social-network.samuraijs.com/api/1.0/'
    }).then(response => {
        return response.data

       })
)
}
