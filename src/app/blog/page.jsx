"use client";
import React, { useEffect, useState } from "react";
import SearchFilter from "../components/sections/BlogSections/SearchFilter";
import BlogCards from "../components/sections/BlogSections/BlogCards";
import { getRequest } from "@/services/ApiService";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getRequest("/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <SearchFilter />
      {loading ? <p>Loading...</p> : <BlogCards blogs={blogs} />}
    </div>
  );
};

export default Blog;
