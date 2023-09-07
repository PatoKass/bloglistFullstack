import { login } from '../services/users'
import blogService from '../services/blogs'
import { loginUser } from '../reducers/userReducer'
import { initializeUserlist } from '../reducers/userlistReducer'
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { initializeBlogs } from '../reducers/blogReducer'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const user = await login({ username, password })
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      blogService.setToken(user.token)
      dispatch(loginUser(user))
      dispatch(initializeUserlist())
      dispatch(initializeBlogs())
      setUsername('')
      setPassword('')
      dispatch(setNotification(`Welcome back ${user.name}!`, 'success', 3))
    } catch (error) {
      dispatch(setNotification('wrong username or password', 'error', 3))
    }
  }

  return (
    <section className="flex justify-center items-center">
      <form className="flex flex-col" onSubmit={handleLogin} id="login-form">
        <h2 className="flex self-center my-2 text-xl ">
          Log in to application
        </h2>
        <div className="m-2">
          username
          <input
            className="mx-3"
            autoFocus
            type="text"
            id="username"
            value={username}
            name="Username"
            autoComplete="on"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div className="m-2">
          password
          <input
            className="mx-3"
            type="password"
            id="password"
            value={password}
            name="Password"
            autoComplete="on"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button
          className="p-2 my-4 text-white rounded-md bg-indigo-600"
          id="login-button"
          type="submit"
        >
          Login
        </button>
        <aside className="flex justify-center items-center">
          Create your FREE user!
          <Link className="p-2 text-cyan-500 underline" to="/signup">
            Sign up
          </Link>
        </aside>
      </form>
    </section>
  )
}

export default Login
