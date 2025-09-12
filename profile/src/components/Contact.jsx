import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is a placeholder)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="snap-start min-h-screen px-12 py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-600 text-white flex flex-col justify-center items-center"
    >
      <h2 className="text-5xl font-bold mb-8 animate-fadeIn">Contact Me</h2>
      <form
        className="w-full max-w-lg flex flex-col gap-6"
        onSubmit={handleSubmit}
        >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded text-black focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded text-black focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
          className="p-3 rounded text-black focus:outline-none"
        />
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded font-semibold transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
