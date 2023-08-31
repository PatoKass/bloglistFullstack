import { signup, login } from '../services/users'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setNotification } from '../reducers/notificationReducer'
import { loginUser } from '../reducers/userReducer'
import blogService from '../services/blogs'

export const Signup = () => {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleSignup = async (e) => {
    e.preventDefault()

    // step one: create user
    try {
      const user = await signup({
        username,
        name,
        password,
      })

      console.log(user)
    } catch (error) {
      return dispatch(setNotification(error.response.data.error, 'error', 3))
    }
    //step two: log user in
    try {
      const user = await login({ username, password })
      blogService.setToken(user.token)
      dispatch(loginUser(user))
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
    } catch (error) {
      console.log(error)
      return dispatch(setNotification(error.response.data.error, 'error', 3))
    }
  }

  return (
    <div className="flex justify-center items-center">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSignup}
        id="login-form"
      >
        <h2 className="self-center my-5 text-xl ">Create new user</h2>

        <input
          autoFocus
          type="text"
          id="username"
          value={username}
          name="Username"
          autoComplete="on"
          onChange={({ target }) => setUsername(target.value)}
          placeholder="Username"
        />

        <input
          type="text"
          id="name"
          value={name}
          name="Name"
          autoComplete="on"
          onChange={({ target }) => setName(target.value)}
          placeholder="Your name"
        />

        <input
          type="password"
          id="password"
          value={password}
          name="Password"
          autoComplete="on"
          onChange={({ target }) => setPassword(target.value)}
          placeholder="Password"
        />
        <button
          className="p-2 my-4 text-white rounded-md bg-indigo-600"
          id="login-button"
          type="submit"
        >
          Sign up
        </button>
        <aside className="flex justify-center items-center">
          Already have a user?
          <Link className="p-3 text-cyan-500 underline" to="/login">
            Login
          </Link>
        </aside>
      </form>
    </div>
  )
}
