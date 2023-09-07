import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { deleteUser } from '../services/users'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../reducers/userReducer'
import { setNotification } from '../reducers/notificationReducer'
import { deleteBlog } from '../reducers/blogReducer'

const User = () => {
  const dispatch = useDispatch()
  const id = useParams().id
  const users = useSelector((state) => state.userlist)
  const user = users.find((u) => u.id === id)
  const loggedUser = JSON.parse(window.localStorage.loggedUser).username
  const token = JSON.parse(window.localStorage.loggedUser).token

  if (!user) {
    return null
  }

  const handleDelete = async () => {
    if (
      window.confirm(
        `delete user ${user.username}? Your blogs will be deleted as well`
      )
    ) {
      try {
        if (user.blogs && user.blogs.length > 0) {
          const deletePromises = user.blogs.map((blog) =>
            dispatch(deleteBlog(blog.id))
          )
          await Promise.all(deletePromises)
        }
        await deleteUser(token, id)
        dispatch(logoutUser())

        dispatch(setNotification(`user ${user.username} deleted`, 'success', 3))
      } catch (error) {
        dispatch(setNotification(error.response.data.error, 'error', 3))
      }
    }
  }

  return (
    <div className="flex p-12 max-w-max min-w-fit my-10 relative justify-center flex-col items-center rounded-2xl border-red-950 border-2">
      <h1 className=" text-xl italic">{user.username}</h1>
      {user.username === loggedUser && (
        <button
          onClick={handleDelete}
          className="p-2 my-4 text-white rounded-md bg-indigo-600"
        >
          delete
        </button>
      )}
      {user.blogs.length > 0 ? (
        <div>
          <h2 className="text-2xl my-3">Added blogs:</h2>
          <ul className="my-3 list-disc">
            {user.blogs.map((blog) => (
              <li className="my-3" key={blog.title}>
                {blog.title}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h2>no blogs posted as yet</h2>
      )}
    </div>
  )
}

export default User
