// src/pages/Home.jsx
import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      data-theme="dark-orange"
      className="min-w-screen pt-25 px-4 md:px-8 py-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-12 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I’m <span className="text-thirdtext">Bhavya Jain</span>
        </h1>

        <p className="text-secondtext max-w-2xl mx-auto mb-8 text-lg">
          MERN Stack Developer building modern web applications and scalable
          backend systems.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/projects"
            className="bg-button-bg px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="border border-border-color px-6 py-3 rounded-lg hover:bg-gray-800"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
