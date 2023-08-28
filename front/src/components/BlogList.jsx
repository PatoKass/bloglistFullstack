import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs)

  if (!blogs || blogs.length === 0) {
    return <div>No blogs found.</div>
  }
  let sortedBlogs = [...blogs].sort((a, b) => b.likes - a.likes)

  return (
    <section className="flex w-1/2 min-w-max my-8 justify-center flex-col items-center rounded-2xl border-red-950 border-2">
      <h2 className="p-3 my-8 text-3xl">Blogs:</h2>
      {sortedBlogs.map((blog) => (
        <div className="p-4 my-3" key={blog.id}>
          <Link
            className="p-3  border-2 border-red-900 bg-red-500"
            to={`/blogs/${blog.id}`}
          >
            {blog.title}, by {blog.author}
          </Link>
        </div>
      ))}
    </section>
  )
}

export default BlogList
