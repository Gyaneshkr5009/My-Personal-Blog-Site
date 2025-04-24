import React, { useState, useEffect } from 'react'

const BlogEditor = ({ onSave, defaultData, isEditing }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    if (defaultData) {
      setTitle(defaultData.title)
      setContent(defaultData.content)
    } else {
      setTitle('')
      setContent('')
    }
  }, [defaultData])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newBlog = {
      title,
      content,
      date: new Date().toLocaleString()
    }
    onSave(newBlog)
    setTitle('')
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border border-gray-200 rounded-lg bg-cyan-50/30 shadow-xs">
      <h3 className="text-md font-semibold text-gray-800 mb-3">
        {isEditing ? 'Edit Post' : 'New Post'}
      </h3>

      <div className="space-y-3">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
        />

        <textarea
          rows={3}
          placeholder="Write your content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-cyan-500 min-h-[80px]"
        />
      </div>

      <button
        type="submit"
        className="mt-4 w-full py-2 text-sm font-medium bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors"
      >
        {isEditing ? 'Update' : 'Publish'}
      </button>
    </form>
  )
}

export default BlogEditor
