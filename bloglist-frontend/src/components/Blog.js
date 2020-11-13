import React from 'react'
import Togglable from './Togglable'

const Blog = ({ blog }) => {
  
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  return (
    <div style={blogStyle}>
      Title: {blog.title} <br />
      Author: {blog.author} <br />
      <Togglable showLabel="view" hideLabel="hide">
        Url: {blog.url} <br />
        Likes: {blog.likes} <button>Like</button> <br />
      </Togglable>
    </div>
  )
}

export default Blog
