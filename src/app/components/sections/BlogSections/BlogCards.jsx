"use client";
import React, { useState } from "react";
import { Pencil, Trash, Save, X } from "lucide-react";
import { deleteRequest, putForm } from "@/services/ApiService";

function BlogCards({ blogs }) {
  const [blogList, setBlogList] = useState(blogs);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      const response = await deleteRequest(`/blog/${id}`);
      if (response.ok) {
        setBlogList((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
      } else {
        console.error("Failed to delete blog");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  // Open Edit Modal
  const handleEdit = (blog) => {
    setEditingBlog(blog._id);
    setFormData({
      title: blog.title,
      description: blog.description,
      image: null, // No new image by default
    });
  };

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Image Upload
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Handle Save
  const handleSave = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    try {
      const response = await putForm(`/blog/${editingBlog}`, formDataToSend);
      if (response.ok) {
        const updatedBlog = await response.json();
        setBlogList((prevBlogs) =>
          prevBlogs.map((blog) => (blog._id === editingBlog ? updatedBlog.blog : blog))
        );
        setEditingBlog(null); // Close modal
      } else {
        console.error("Failed to update blog");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap gap-5 md:px-8 px-4 py-4">
      {blogList?.length > 0 ? (
        blogList.map((blog) => (
          <div
            key={blog._id}
            className="relative w-full sm:w-[48%] md:w-[30%] lg:w-[300px] h-[300px] border border-gray-100 rounded-xl shadow-xl overflow-hidden group"
          >
            <img
              src={blog.image}
              alt="Blog"
              className="w-full h-[60%] object-cover rounded-t-xl"
            />

            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => handleEdit(blog)}
                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
              >
                <Pencil size={18} className="text-gray-700" />
              </button>
              <button
                onClick={() => handleDelete(blog._id)}
                className="p-2 bg-white rounded-full shadow-md hover:bg-red-200"
              >
                <Trash size={18} className="text-red-500" />
              </button>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-600">{blog.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No blogs found.</p>
      )}

      {/* Edit Modal */}
      {editingBlog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-xl font-semibold mb-4">Edit Blog</h2>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-3"
              placeholder="Title"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-3"
              placeholder="Description"
            />
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full p-2 border rounded mb-3"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditingBlog(null)}
                className="p-2 bg-gray-200 rounded"
              >
                <X size={18} />
              </button>
              <button
                onClick={handleSave}
                className="p-2 bg-blue-500 text-white rounded"
              >
                <Save size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogCards;
