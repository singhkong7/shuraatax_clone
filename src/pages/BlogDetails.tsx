import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../constants/blogs";
import FreeConsultation from "../components/FreeConsultant";
import Categories from "../components/Categories";
import TrendingPosts from "../components/TrendingPosts";

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogs.find(b => b.id === Number(id));

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
     <div className="blog_main_container">
      <div className="blog_detail_content" style={{ flex: 2 }}>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
        <br />
        <Link to="/blog">← Back to Blog</Link>
      </div>

      <div className="components">
        <FreeConsultation />
        <Categories />
        <TrendingPosts />
      </div>
    </div>
  );
};

export default BlogDetails;
