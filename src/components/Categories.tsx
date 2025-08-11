
import React from "react";
import "./Categories.css";

const Categories: React.FC = () => {
  const categories = [
    "Accounting Services",
    "Anti Money Laundering",
    "Auditing Services",
    "Bookkeeping Services",
    "Company Liquidation",
    "Corporate Tax",
    "Dubai Tax System"
  ];

  return (
    <div className="categories">
      <h3>Categories</h3>
      <ul>
        {categories.map((cat, idx) => (
          <li key={idx}>{cat}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
