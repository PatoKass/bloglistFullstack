import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs'

const userlistSlice = createSlice({
  name: 'userlist',
  initialState: [],
  reducers: {
    setUserlist(_, action) {
      return action.payload
    },
  },
})

export const { setUserlist } = userlistSlice.actions

export const initializeUserlist = () => {
  return async (dispatch) => {
    const users = await blogService.getUsers()
    dispatch(setUserlist(users))
  }
}

export const addBlogToUser = (user, blog) => {
  return async (dispatch) => {
    const updatedUser = { ...user, blogs: user.blogs.concat(blog) }
    await blogService.update(user.id, updatedUser)
    dispatch(initializeUserlist())
  }
}

export default userlistSlice.reducer
