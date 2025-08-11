import React from "react";
import { Link } from "react-router-dom";
import type { Blog } from "../types/Blog";
import "./BlogCard.css";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="blog-card">
      <div className="blog-image">
        <img src={blog.image} alt={blog.title} loading="lazy" />
      </div>

      <div className="blog-date">
        <span className="date-icon">📅</span>
        {blog.date}
      </div>

      <h3 className="blog-title">{blog.title}</h3>
      <p className="blog-summary">{blog.summary}</p>

      <div className="blog-footer">
        <span className="blog-author">{blog.author}</span>
        <Link to={`/blog/${blog.id}`} className="read-more">
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
