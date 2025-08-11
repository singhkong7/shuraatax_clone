import React from "react";
import "./TrendingPosts.css";

interface Post {
  title: string;
  date: string;
}

const TrendingPosts: React.FC = () => {
  const posts: Post[] = [
    { title: "Crypto Taxes in Dubai: Are Digital Assets Really Tax-Free?", date: "August 1, 2025" },
    { title: "Understanding Property Tax in Dubai: What Investors Need to Know", date: "July 16, 2025" },
    { title: "Qualifying Free Zone Person Under UAE’s Corporate Tax Law", date: "July 28, 2025" },
    { title: "Guide for Small Business Tax Preparation In 2025", date: "July 17, 2025" },
    { title: "VAT On Services Provided Outside UAE", date: "June 27, 2025" },
  ];

  return (
    <div className="trending-posts">
      <h3>Trending Posts</h3>
      <ul>
        {posts.map((post, idx) => (
          <li key={idx}>
            <p className="title">{post.title}</p>
            <p className="date">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPosts;
