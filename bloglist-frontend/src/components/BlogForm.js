import React from 'react'

const BlogForm = ({ 
     handleCreateBlog,
     handleTitleChange,
     handleAuthorChange,
     handleUrlChange,
     title, 
     author, 
     url 
    }) => {
    
    return (
        <>
        <h2>create</h2>
        <form onSubmit={handleCreateBlog}>
        title:
        <input 
        type="text"
        value={title}
        name="Title"
        onChange={handleTitleChange}
        />
        <br />
        author:
        <input 
        type="text"
        value={author}
        name="Author"
        onChange={handleAuthorChange}
        />
        <br />
        url:
        <input 
        type="text"
        value={url}
        name="URL"
        onChange={handleUrlChange}
        />
        <br />
        <button type="submit">Create Blog</button>
        </form>
        </>
    )
}

export default BlogForm