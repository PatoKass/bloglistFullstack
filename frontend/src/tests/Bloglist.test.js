import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import BlogList from '../components/BlogList'
import { store } from '../store'

describe('BlogList', () => {
  it('should render a list of blogs', () => {
    const blogs = [
      {
        id: 1,
        title: 'My First Blog Post',
        author: 'John Doe',
        likes: 10,
      },
      {
        id: 2,
        title: 'My Second Blog Post',
        author: 'Jane Doe',
        likes: 5,
      },
    ]

    render(<BlogList blogs={blogs} store={store} />)

    expect(screen.getAllByTestId('blog')).toHaveLength(2)
    expect(screen.getByTestId('blog-1')).toHaveTextContent('My First Blog Post')
    expect(screen.getByTestId('blog-2')).toHaveTextContent(
      'My Second Blog Post'
    )
  })

  it('should not render any blogs if there are no blogs', () => {
    render(<BlogList blogs={[]} />)

    expect(screen.getAllByTestId('blog')).toHaveLength(0)
  })
})
