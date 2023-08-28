import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Users = () => {
  const users = useSelector((state) => state.userlist)

  return (
    <table className="flex w-1/2 min-w-max my-8 relative justify-center items-center flex-col rounded-2xl border-red-950 border-2">
      <tbody>
        <tr>
          <td> </td>
          <td>
            <strong>blogs created</strong>
          </td>
        </tr>
        {users.map((user) => (
          <tr key={user.username}>
            <td>
              <Link to={`/users/${user.id}`} className="text-blue-500">
                {user.username}
              </Link>
            </td>
            <td>{user.blogs.length} </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Users
