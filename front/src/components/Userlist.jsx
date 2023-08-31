import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Users = () => {
  const users = useSelector((state) => state.userlist)

  return (
    <table className="flex p-4 max-w-max min-w-fit my-16 relative justify-center items-center flex-col rounded-2xl border-red-950 border-2">
      <tbody>
        <tr>
          <th className="p-2">user</th>
          <th className="p-2">
            <strong>blogs created</strong>
          </th>
        </tr>
        {users.map((user) => (
          <tr key={user.username}>
            <td className="p-2">
              <Link to={`/users/${user.id}`} className="text-blue-500">
                {user.username}
              </Link>
            </td>
            <td className="p-2 flex justify-center items-center">
              {user.blogs.length}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Users
