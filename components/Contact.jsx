'use client'
import { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:1337/api/contacts', {
        data: formData,
      });

      console.log('Form submitted successfully');

      // Clear the form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      // Set the success state to true
      setIsSubmitted(true);

      // Add any further actions (e.g., redirect) here
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  return (
    <div>
      {isSubmitted ? (
        <p className="text-green-500">Form submitted successfully! Thank you for your message.</p>
      ) : (
    
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Phone:
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
      </label>
      <label>
        Subject:
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
      </label>
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
    )}
    </div>
  );
};

export default ContactForm;
