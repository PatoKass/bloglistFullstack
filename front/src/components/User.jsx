import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { deleteUser } from '../services/users'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../reducers/userReducer'
import { setNotification } from '../reducers/notificationReducer'

// import { deleteBlog } from '../reducers/blogReducer'
// import blogServices from '../services/blogs'

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

  const handleDelete = () => {
    deleteUser(token, id)

    dispatch(setNotification('Your account was deleted!', 'success', 3))
    dispatch(logoutUser())

    // for (blog in user.blogs) {
    //   deleteBlog(user.blog.id)
    //   blogServices.remove(user.blog.id)
    // }
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
