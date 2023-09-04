import { useState } from 'react'

const Togglable = ({ buttonLabel, children }) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div className=" flex justify-center items-center">
      <div style={hideWhenVisible}>
        <button
          id="new-blog"
          onClick={toggleVisibility}
          className="p-2 text-white rounded-md bg-indigo-600"
        >
          {buttonLabel}
        </button>
      </div>
      <div
        style={showWhenVisible}
        className="flex flex-col justify-center items-center"
      >
        {children}
        <button
          onClick={toggleVisibility}
          className=" p-2 my-12 text-white rounded-md bg-indigo-600"
        >
          cancel
        </button>
      </div>
    </div>
  )
}

export default Togglable
