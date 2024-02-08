"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [isSubmitted]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/contacts`,
        {
          data: formData,
        }
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <p className="text-green-500">
          Form submitted successfully! Thank you for your message.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Subject:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
