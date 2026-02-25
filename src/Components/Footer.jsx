import React from "react";
import github from "../assets/Images/GitHub.png";
import gmail from "../assets/Images/gmail.avif";
import linkedin from "../assets/Images/LinkedIn_logo_initials.png";

const Footer = () => {
  return (
    <>
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6 text-[#22d3ee]">Contact Me</h3>
          <p className="text-gray-400 mb-6">
            Let’s build something amazing together 🚀
          </p>
          <a
            href="https://github.com/Pavibritta"
            className="inline-block px-4 py-4 bg-secondary text-black rounded-full font-semibold hover:bg-primary transition"
          >
            <img src={github} alt="" className="h-10 w-10" />
          </a>
          <a
            href="mailto:pavithrarajase1@gmail.com"
            className="inline-block px-4 py-4 bg-secondary text-black rounded-full font-semibold hover:bg-primary transition"
          >
            <img src={gmail} alt="" className="h-10 w-10" />
          </a>

          <a
            href="https://www.linkedin.com/in/pavithra-r-2621bb232/"
            className="inline-block px-4 py-4 bg-secondary text-black rounded-full font-semibold hover:bg-primary transition"
          >
            <img src={linkedin} alt="" className="h-10 w-10" />
          </a>
        </div>
        <footer className="text-center py-6  text-gray-500 text-sm">
          © 2025 Pavithra. All rights reserved.
        </footer>
      </section>
    </>
  );
};

export default Footer;
