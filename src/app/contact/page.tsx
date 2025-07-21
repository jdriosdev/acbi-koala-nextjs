"use client";

import React, { useState } from "react";

const containerStyle: React.CSSProperties = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "40px 20px",
  fontFamily: "Arial, sans-serif",
};

const inputStyle: React.CSSProperties = {
  padding: "10px",
  width: "100%",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const labelStyle: React.CSSProperties = {
  fontWeight: "bold",
  marginBottom: "5px",
  display: "block",
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    question: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry!");
    // You can send this data to a backend/API here
  };

  return (
    <main style={containerStyle}>
      <h1>Contact Us</h1>

      <section style={{ marginBottom: "40px" }}>
        <h2>🏢 Address</h2>
        <p>
          Koala Tshirts HQ
          <br />
          123 Koala Street
          <br />
          Sydney, NSW 2000
          <br />
          Australia
        </p>

        <iframe
          title="Koala Tshirts Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.687892975628!2d151.2099009152094!3d-33.868820080655226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3c17e4f1e9%3A0x7df3b6e3b9c6cdb2!2sSydney!5e0!3m2!1sen!2sau!4v1620881588799!5m2!1sen!2sau"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>📞 Phone</h2>
        <p>+61 400 123 456</p>
      </section>

      <section>
        <h2>📬 Send us a message</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label style={labelStyle} htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              style={inputStyle}
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              style={inputStyle}
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              style={inputStyle}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="question">
              Question
            </label>
            <textarea
              name="question"
              id="question"
              rows={4}
              style={inputStyle}
              value={formData.question}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#2ecc71",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
