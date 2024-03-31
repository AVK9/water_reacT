
import { api } from "./api"

export const setTokenApi = (token) => {
    api.defaults.headers.common['Authorization'] = token;
}

export const signUpApi = async (body) => {
    const { data } = await api.post('/users/signup', body)
    return data
}

export const loginApi = async (body) => {
    const { data } = await api.post('/users/login', body)
    return data
}
export const refreshApi = async (token) => {
    const { data } = await api('/users/current', {
        headers: {
        Authorization: `Bearer ${token}`,
    }})
    return data
}

export const loginOutApi = async () => {
   await api.post('/users/logout')
}
