import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const submissionData = {
      ...formData,
      access_key: "YOUR_ACCESS_KEY_HERE", // FIXME: Paste your Web3Forms Access Key here!
      subject: `Portfolio Contact from ${formData.name}`,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="snap-start min-h-screen px-4 sm:px-6 py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-600 text-white flex flex-col justify-center items-center"
    >
      {/* Title Header Layout Block */}
      <div className="w-full flex flex-col items-center mb-12 md:mb-16 group cursor-pointer select-none px-4">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal mb-2 relative inline-block text-center">
    <span>Contact Me</span>
    {/* Responsive Underline Animation */}
    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 sm:mt-4 h-1 bg-blue-400 rounded transition-all duration-300 ease-in-out w-0 group-hover:w-36 sm:group-hover:w-44 md:group-hover:w-56" />
  </h2>
</div>

      {/* Premium Minimal Form Capsule */}
      <div className="w-full max-w-xl bg-slate-950/30 backdrop-blur-xl border-2 border-white/10 rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-blue-400/50 transition-all duration-500">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          
          {/* Name Field Group */}
          <div className="relative group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-transparent focus:placeholder-gray-400/70 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 peer"
              id="contact-name"
            />
            <label 
              htmlFor="contact-name"
              className="absolute left-4 -top-2.5 bg-indigo-950/80 px-2 rounded text-xs font-bold uppercase tracking-wider text-cyan-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-placeholder-shown:font-normal transition-all duration-300 pointer-events-none peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-cyan-300 peer-focus:bg-indigo-950/80 peer-focus:font-bold"
            >
              Your Name
            </label>
          </div>

          {/* Email Field Group */}
          <div className="relative group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-transparent focus:placeholder-gray-400/70 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 peer"
              id="contact-email"
            />
            <label 
              htmlFor="contact-email"
              className="absolute left-4 -top-2.5 bg-indigo-950/80 px-2 rounded text-xs font-bold uppercase tracking-wider text-cyan-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-placeholder-shown:font-normal transition-all duration-300 pointer-events-none peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-cyan-300 peer-focus:bg-indigo-950/80 peer-focus:font-bold"
            >
              Your Email
            </label>
          </div>

          {/* Message Field Group */}
          <div className="relative group">
            <textarea
              name="message"
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-transparent focus:placeholder-gray-400/70 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 resize-none peer"
              id="contact-message"
            />
            <label 
              htmlFor="contact-message"
              className="absolute left-4 -top-2.5 bg-indigo-950/80 px-2 rounded text-xs font-bold uppercase tracking-wider text-cyan-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-placeholder-shown:font-normal transition-all duration-300 pointer-events-none peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-cyan-300 peer-focus:bg-indigo-950/80 peer-focus:font-bold"
            >
              Your Message
            </label>
          </div>

          {/* Verification Status Banner Prompts */}
          {submitStatus === "success" && (
            <div className="p-3 text-sm rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-center font-medium">
              ✓ Message dispatched successfully straight to my email!
            </div>
          )}
          {submitStatus === "error" && (
            <div className="p-3 text-sm rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-center font-medium">
              ✕ Submission failed. Please configure your Web3Forms token.
            </div>
          )}

          {/* Centered High-Contrast Interactive CTA Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 disabled:from-gray-800 disabled:to-gray-700 text-white py-4 rounded-xl font-bold text-xs tracking-widest uppercase shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Sending Message...</span>
              </>
            ) : (
              <span>Send Message</span>
            )}
          </button>

        </form>
      </div>
    </section>
  );
}