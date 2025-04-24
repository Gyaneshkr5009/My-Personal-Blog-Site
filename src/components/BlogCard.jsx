import React from 'react'

const BlogCard = ({ blog, onEdit  , onDelete}) => {
  if (!blog) return null

  return (
    <div className="group p-5 rounded-xl bg-cyan-400/8 border border-gray-200 overflow-hidden cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-lg">
      <div className="flex justify-between items-start gap-2">
        <h2 className="text-lg font-semibold text-gray-800 group-hover:text-cyan-700 transition-colors">
          {blog.title}
        </h2>
        <span className="text-xs font-medium text-cyan-700 bg-cyan-100/50 px-2.5 py-1 rounded-full">
          {blog.date}
        </span>
      </div>

      <div className="mt-3 text-gray-700 text-sm line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
        {blog.content}
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={onEdit}
          className="px-4 py-2 text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 rounded-lg active:scale-95 transition-transform mr-3"
        >
          Edit Post
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 rounded-lg active:scale-95 transition-transform"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default BlogCard
