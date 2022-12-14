import axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)},
    getProfile(userId: string) {
        return profileAPI.getProfile(userId)
    },
    getFollow(id: number) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data.resultCode)
    },
    getUnfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data.resultCode)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
            .then(response => response.data);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
            .then(response => response.data);
    }
}

export const authAPI = {
    getAuthMe() {
        return instance.get(baseUrl + `auth/me`)
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(baseUrl + `auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },
    logout() {
        return instance.delete(baseUrl + `auth/login`)
            .then(response => response.data)
    }
}

