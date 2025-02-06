"use client";
import React from "react";

function BlogCards({ blogs }) {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap gap-5 md:px-8 px-4 py-4">
      {blogs?.length > 0 ? (
        blogs.map((blog) => (
          <div
            key={blog._id}
            className="w-full sm:w-[48%] md:w-[30%] lg:w-[300px] h-[300px] border border-gray-100 rounded-xl shadow-xl overflow-hidden"
          >
            <img
              src={blog.image}
              alt="Blog"
              className="w-full h-[60%] object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-600">{blog.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
}

export default BlogCards;
