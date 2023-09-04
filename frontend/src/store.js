import notificationReducer from './reducers/notificationReducer'
import blogReducer from './reducers/blogReducer'
import userReducer from './reducers/userReducer'
import userlistReducer from './reducers/userlistReducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    notification: notificationReducer,
    blogs: blogReducer,
    user: userReducer,
    userlist: userlistReducer,
  },
})
