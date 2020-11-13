import React, { useState } from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({ 
     createBlog,
    }) => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    const [likes, setLikes] = useState('')

    const addBlog = (event) => {
        event.preventDefault()
        createBlog({
            title,
            author,
            url,
            likes
        })
        setTitle('')
        setAuthor('')
        setUrl('')
        setLikes('')
    }
    
    return (
        <>
        <h2>create</h2>
        <form onSubmit={addBlog}>
        title:
        <input 
        type="text"
        value={title}
        name="Title"
        onChange={({ target }) => setTitle(target.value)}
        />
        <br />
        author:
        <input 
        type="text"
        value={author}
        name="Author"
        onChange={({ target }) => setAuthor(target.value)}
        />
        <br />
        url:
        <input 
        type="text"
        value={url}
        name="URL"
        onChange={({ target }) => setUrl(target.value)}
        />
        <br />
        likes:
        <input 
        type="text"
        value={likes}
        name="Likes"
        onChange={({ target }) => setLikes(target.value)}
        />
        <br />
        <button type="submit">Create Blog</button>
        </form>
        </>
    )
}

BlogForm.propTypes = {
    createBlog: PropTypes.func.isRequired
}

export default BlogForm