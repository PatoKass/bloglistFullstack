import { useDispatch } from 'react-redux'
import { addLike, deleteBlog, commentBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Blog = () => {
  const [newComment, setNewComment] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const id = useParams().id
  const blogs = useSelector((state) => state.blogs)
  const blog = blogs.find((b) => b.id === id)

  if (!blog) {
    return null
  }

  // this setup is to access the name of the user currently logged, doing the trick for the fix required in ex 5.8
  const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
  const loggedName = loggedUser?.name
  const uploader = blog.user.name

  const handleLike = () => {
    dispatch(addLike(blog.id))
  }

  const handleComment = (e) => {
    setNewComment(e.target.value)
  }

  const handleDelete = () => {
    dispatch(deleteBlog(blog.id))
    dispatch(
      setNotification(`blog '${blog.title}' has been deleted`, 'success', 3)
    )
    navigate('/')
  }

  const addComment = async () => {
    dispatch(commentBlog(blog.id, newComment))
    setNewComment('')
  }

  return (
    <section className="my-16 items-center rounded-2xl border-red-950 border-2 flex flex-col">
      <h1 className="my-8 text-3xl">
        {blog.title} {blog.author}
      </h1>
      <a
        className="flex justify-center text-2xl text-cyan-600 underline"
        href={blog.url.startsWith('http') ? blog.url : `http://${blog.url}`}
      >
        {blog.url}
      </a>

      <p className="flex my-3 justify-center">likes: {blog.likes} </p>
      <button
        onClick={handleLike}
        className="flex my-3 justify-center p-2 text-white rounded-md bg-indigo-600"
      >
        Like
      </button>

      <p>added by {blog.user.name} </p>
      {uploader === loggedName && (
        <button
          className=" flex my-3 justify-center p-2 text-white rounded-md bg-indigo-600"
          onClick={handleDelete}
        >
          Remove
        </button>
      )}

      <aside className="p-10 my-6 items-center ">
        <h2 className="p-3 text-3xl">Comments:</h2>
        <input
          type="text"
          placeholder="comment"
          value={newComment}
          onChange={handleComment}
        />
        <button
          onClick={addComment}
          className="p-2 mx-12 text-white rounded-md bg-indigo-600"
        >
          Add comment
        </button>
        <ul className="list-disc">
          {blog.comments.map((comment) => (
            <li key={comment.id}>{comment.comment}</li>
          ))}
        </ul>
      </aside>
    </section>
  )
}

export default Blog
