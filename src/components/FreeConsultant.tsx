import React, { useState } from "react";
import "./FreeConsultant.css";

const FreeConsultation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Accounting Services",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="free-consultation">
      <h3>Free Consultation</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name<span>*</span>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Phone No<span>*</span>
          <div className="phone-input">
            <select>
              <option>+91</option>
              <option>+971</option>
              <option>+1</option>
            </select>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
        </label>

        <label>
          Email<span>*</span>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Service Required<span>*</span>
          <select name="service" value={formData.service} onChange={handleChange}>
            <option>Accounting Services</option>
            <option>Auditing Services</option>
            <option>Tax Consultation</option>
          </select>
        </label>

        <label>
          Message<span>*</span>
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FreeConsultation;
