import axios from 'axios'
const usersUrl = '/api/users'
const loginUrl = '/api/login'

export const signup = async (credentials) => {
  const res = await axios.post(usersUrl, credentials)
  return res.data
}

export const login = async (credentials) => {
  const res = await axios.post(loginUrl, credentials)
  return res.data
}

export const deleteUser = async (token, id) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }

  const res = await axios.delete(`${usersUrl}/${id}`, config)
  return res.data
}
