import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const services = [
    'Accounting Services', 'Anti-Money Laundering Registration', 'Audit', 'Business Advisory',
    'Corporate Tax Advisory Services', 'Corporate Tax Filing', 'Corporate Tax Registration Service',
    'De-registration for VAT', 'ESR Filing', 'ESR Notification', 'Excise Tax Filing',
    'Excise Tax Registration', 'Payroll', 'VAT Registration', 'Tax Agency Service',
    'Tax Residency Certificate (TRC)', 'VAT Health Check', 'VAT Refund', 'VAT Services',
    'Job Seeker', 'Other Service'
  ];

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // TODO: Send data via your API or contact handler
    console.log('Form submitted:', form);
  };

  return (
    <div className="contact-section">
        <div className="contact-form">
        <form  onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name*" required />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone No*" required />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email*" required />

        <select name="service" value={form.service} onChange={handleChange} required>
          <option value="">Service Required*</option>
          {services.map(s => <option key={s} value={s}>{s}</option>)}
        </select>

        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message*"></textarea>
        <button type="submit">Submit</button>
      </form>
      </div>
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p><strong>Address:</strong> 601 Sheikh Zayed Road, 6th Floor, Aspin Commercial Tower – Dubai</p>
        <p><strong>Phone:</strong> +971 44081900</p>
        <p><strong>WhatsApp:</strong> +971 508912062</p>
        <p><strong>Email:</strong> info@shuraatax.com</p>
      </div>

      {/* Optional modal for "Right Now" contact method selection */}
    </div>
  );
};

export default Contact;
