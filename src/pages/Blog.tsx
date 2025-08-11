import React from "react";
import { blogs } from "../constants/blogs";
import BlogCard from "../components/BlogCard";
import FreeConsultation from "../components/FreeConsultant";
import Categories from "../components/Categories";
import TrendingPosts from "../components/TrendingPosts";
import './Blog.css';

const Blog: React.FC = () => {
  return (
    <div className="blog_main_container">
       <div className="blog_list_container">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
    <div className="components">
      <FreeConsultation/>
      <Categories/>
      <TrendingPosts/>
    </div>
    </div>
  );
};

export default Blog;
