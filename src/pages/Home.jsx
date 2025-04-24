import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import BlogCard from '../components/BlogCard';
import BlogEditor from '../components/BlogEditor';
import { Menu } from 'lucide-react';
import supabase from '../supabaseClient';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const userId = import.meta.env.VITE_SUPABASE_USER_ID;
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('user_id', userId)
      .order('date', { ascending: false });
  
    if (error) {
      console.error('Error fetching blogs:', error);
    } else {
      setBlogs(data);
    }
  };

  const handleAddBlog = async (newBlog) => {
    const userId = import.meta.env.VITE_SUPABASE_USER_ID;
  
    const { data, error } = await supabase
      .from('blogs')
      .insert([{ ...newBlog, user_id: userId }])
      .select();
  
    if (error) {
      console.error('Error adding blog:', error);
    } else {
      setBlogs((prev) => [...prev, data[0]]);
    }
  };
  

  const handleUpdate = async (updatedBlog, index) => {
    const blogToUpdate = blogs[index];
    const userId = import.meta.env.VITE_SUPABASE_USER_ID;
    const { data, error } = await supabase
      .from('blogs')
      .update({ title: updatedBlog.title, content: updatedBlog.content })
      .eq('id', blogToUpdate.id)
      .eq('user_id', userId) 
      .select();
    if(error){
      console.error('Error updating blog:', error);
    }
    else{
      const newBlogs = [...blogs];
      newBlogs[index] = data[0];
      setBlogs(newBlogs);
      setEditingIndex(null);
    }
  };

  const handleDelete = async (index) => {
    try {
      const blogToDelete = blogs[index];
      const userId = import.meta.env.VITE_SUPABASE_USER_ID;
  
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', blogToDelete.id)
        .eq('user_id', userId); // extra safety for RLS
  
      if (error) {
        console.error('Error deleting blog:', error);
      } else {
        setBlogs((prev) => prev.filter((_, i) => i !== index));
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };
  

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 bg-white shadow">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-700">
          <Menu size={24} />
        </button>
        <h1 className="text-lg font-semibold">Home</h1>
      </div>

      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'block' : 'hidden'
        } md:block`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-3 space-y-4">
        <div className="space-y-2">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              blog={blog}
              onEdit={() => setEditingIndex(index)}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
        <BlogEditor
          onSave={editingIndex !== null ? (data) => handleUpdate(data, editingIndex) : handleAddBlog}
          defaultData={editingIndex !== null ? blogs[editingIndex] : null}
          isEditing={editingIndex !== null}
        />
      </div>
    </div>
  );
};

export default Home;
