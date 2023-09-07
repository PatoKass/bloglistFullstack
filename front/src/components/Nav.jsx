import { Link } from 'react-router-dom'
import { setNotification } from '../reducers/notificationReducer'
import { logoutUser } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'

const Nav = ({ username }) => {
  const dispatch = useDispatch()

  const handleLogout = async () => {
    dispatch(setNotification('logged out succesfully!', 'success', 3))
    dispatch(logoutUser())
  }

  return (
    <header className="bg-yellow-200 flex align-top items-center justify-end">
      <Link className="p-5 m-2 text-cyan-500" to="/">
        blogs
      </Link>
      <Link className="p-5 m-2 text-cyan-500" to="/users">
        users
      </Link>

      <strong className=" font-mono">{username} logged in</strong>
      <button
        className="p-2 m-2 rounded-md bg-indigo-600 text-white"
        id="logout-btn"
        type="submit"
        onClick={handleLogout}
      >
        Logout
      </button>
    </header>
  )
}

export default Nav
