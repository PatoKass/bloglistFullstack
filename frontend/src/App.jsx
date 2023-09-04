import { useEffect } from 'react'
import Login from './components/Login'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import BlogList from './components/BlogList'
import Blog from './components/Blog'
import Nav from './components/Nav'
import User from './components/User'
import Userlist from './components/Userlist'
import { Footer } from './components/Footer'
import { Signup } from './components/Signup'
import { useDispatch, useSelector } from 'react-redux'
import { setNotification } from './reducers/notificationReducer'
import { initializeBlogs } from './reducers/blogReducer'
import { initializeUser, logoutUser } from './reducers/userReducer'
import { initializeUserlist } from './reducers/userlistReducer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

const App = () => {
  const notification = useSelector((state) => state.notification)
  const user = useSelector((state) => state.user)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeBlogs())
  }, [dispatch])

  useEffect(() => {
    dispatch(initializeUser())
  }, [dispatch])

  useEffect(() => {
    dispatch(initializeUserlist())
  }, [dispatch])

  const handleLogout = async () => {
    dispatch(setNotification('logged out succesfully!', 'success', 3))
    dispatch(logoutUser())
  }

  const Home = () => {
    return (
      <>
        <BlogList className="flex justify-center items-center self-center" />
        <Togglable buttonLabel={'new blog'}>
          <BlogForm />
        </Togglable>
      </>
    )
  }

  return (
    <Router>
      <header>
        {user && <Nav username={user.name} handleLogout={handleLogout} />}
      </header>
      <div className="flex justify-center items-center flex-col min-h-screen">
        <main className="mx-5 mb-auto flex-grow justify-center items-center flex-col">
          <h1 className="text-5xl my-12 font-bold underline flex justify-center">
            Bloglist
          </h1>
          {notification && <Notification />}

          <Routes>
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate replace to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate replace to="/" />}
            />
            <Route
              path="/users/:id"
              element={user ? <User /> : <Navigate replace to="/login" />}
            />
            <Route
              path="/users"
              element={
                user ? (
                  <Userlist className="flex w-auto my-8 relative justify-center flex-col items-center rounded-2xl border-red-950 border-2" />
                ) : (
                  <Navigate replace to="/login" />
                )
              }
            />
            <Route
              path="/"
              element={user ? <Home /> : <Navigate replace to="/login" />}
            />
            <Route
              path="/blogs/:id"
              element={user ? <Blog /> : <Navigate replace to="/login" />}
            />
          </Routes>
        </main>
        <Footer className="mt-auto" />
      </div>
    </Router>
  )
}

export default App
