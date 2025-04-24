import React, {useState} from 'react'
import BlogCard from '../components/BlogCard'
import BlogEditor from '../components/BlogEditor'

const BlogPost = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddBlog = (newBlog) => {
    setBlogs(b => [...b , newBlog]);
  }

  const handleUpdate = (updatedBlog, index) => {
    const newBlogs = [...blogs];
    newBlogs[index] = updatedBlog;
    setBlogs(newBlogs);
    setEditingIndex(null);
  }

  return (
    <div>
      <BlogEditor
        onSave={editingIndex !== null ? (data) => handleUpdate(data, editingIndex) :handleAddBlog}
          defaultData={editingIndex !== null ? blogs[editingIndex] : null}
          isEditing={editingIndex !== null}
      />
      <div>
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            blog={blog}
            onEdit={() => setEditingIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default BlogPost