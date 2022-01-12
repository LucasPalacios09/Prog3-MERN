import axios from 'axios'

const API = 'http://localhost:4000'

export const getUsers = async () => {
    return await axios.get(`${API}/user`)
}

export const getUser = async (id) => {
    return await axios.get(`${API}/user/${id}`)
}

export const getUserByName = async (name) => {
    return await axios.get(`${API}/user/name/${name}`)
}

export const createUser = async (user) => {
    return await axios.post(`${API}/user`, user)
}

export const updateUser = async (user, id) => {
    return await axios.put(`${API}/user/${id}`, user)
}

export const deleteUser = async (id) => {
    return await axios.delete(`${API}/user/${id}`)
}

