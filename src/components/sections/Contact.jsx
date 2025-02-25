import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formDate, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_zs98yar";
  const TEMPLATE_ID = "template_7pa0mbg";
  const PUBLIC_KEY = "evlMkikWBW8CL4XdS";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 sm:w-150 w-screen">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className=" relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formDate.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition 
                 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formDate, name: e.target.value })
                }
              />
            </div>

            <div className=" relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formDate.email}
                className=" w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition 
                 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formDate, email: e.target.value })
                }
              />
            </div>

            <div className=" relative">
              <textarea
                id="message"
                name="message"
                required
                rows={7}
                value={formDate.message}
                className=" w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition 
                 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 max-h-36 md:max-h-none"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formDate, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition 
               relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
