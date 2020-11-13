import React from 'react'
import Togglable from './Togglable'

const Blog = ({ blog, updateBlogLikes }) => {
  
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const addLikes = (event) => {
    event.preventDefault()
    updateBlogLikes({
      user: blog.user,
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes + 1,
      id: blog.id
    })

  }

  return (
    <div style={blogStyle}>
      Title: {blog.title} <br />
      Author: {blog.author} <br />
      <Togglable showLabel="view" hideLabel="hide">
        Url: {blog.url} <br />
        Likes: {blog.likes} <button onClick={addLikes}>Like</button> <br />
      </Togglable>
    </div>
  )
}

export default Blog
