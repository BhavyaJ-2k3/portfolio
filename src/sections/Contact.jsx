import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 4000);
      } else {
        setStatus(data.error || "Something went wrong ❌");
      }
    } catch (err) {
      setStatus("Server error ❌");
    }
  };

  return (
    <section
      data-theme="dark-orange"
      id="contact"
      className="bg-bg-secondary min-h-screen flex items-center"
    >
      <div className="max-w-3xl mx-auto px-6 w-full">
        <h2 className="text-firsttext text-4xl font-bold mb-8">Contact Me</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 rounded bg-card-bg"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 rounded bg-card-bg"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            className="p-3 rounded bg-card-bg"
          />

          <button
            type="submit"
            disabled={status === "Sending..."}
            className="bg-button-bg p-3 rounded font-semibold disabled:opacity-50"
          >
            {status === "Sending..." ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="text-sm">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
