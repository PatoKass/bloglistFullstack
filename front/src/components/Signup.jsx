import { signup } from '../services/users'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../reducers/userReducer'
import { Link } from 'react-router-dom'
import { setNotification } from '../reducers/notificationReducer'
import blogService from '../services/blogs'

export const Signup = () => {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleSignup = async (e) => {
    e.preventDefault()

    try {
      const user = await signup({
        username,
        name,
        password,
      })

      blogService.setToken(user.token)
      dispatch(loginUser(user))
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      setUsername('')
      setPassword('')
    } catch (error) {
      if (error) {
        dispatch(
          setNotification(
            'please give a valid username and password',
            'error',
            3
          )
        )
      }
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
        <label htmlFor="username" className="flex m-3">
          Username
        </label>
        <input
          autoFocus
          type="text"
          id="username"
          value={username}
          name="Username"
          autoComplete="on"
          onChange={({ target }) => setUsername(target.value)}
        />
        <label htmlFor="name" className="m-3">
          Your name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          name="Name"
          autoComplete="on"
          onChange={({ target }) => setName(target.value)}
        />
        <label htmlFor="password" className="m-3">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          name="Password"
          autoComplete="on"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button
          className="p-2 my-4 text-white rounded-md bg-indigo-600"
          id="login-button"
          type="submit"
        >
          Sign up
        </button>
        <aside>
          Already have a user?
          <Link className="p-5 m-2 text-cyan-500" to="/login">
            Login
          </Link>
        </aside>
      </form>
    </div>
  )
}
