import React from "react";

const skills = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "HTML & CSS",
  "Tailwind CSS",
  "REST APIs",
  "WordPress",
  "Git & GitHub",
];

const About = () => {
  return (
    <section
      data-theme="dark-orange"
      id="about"
      className=" min-w-screen px-4 md:px-8 py-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-12 px-6">
        {/* Profile Image */}
        <img
          id="profile_pic"
          src="/profile.png"
          alt="Bhavya Jain"
          className="w-32 h-32 md:w-60 md:h-60 rounded-full border-4 border-border-color"
        />

        {/* Intro */}
        <div className="text-center space-y-4 max-w-2xl">
          <h2 className="text-4xl font-bold text-thirdtext">About Me</h2>
          <p className="text-secondtext text-lg md:text-xl">
            I’m Bhavya Jain, an IT student and passionate MERN Stack Developer.
            I enjoy building scalable web applications and headless CMS
            solutions.
          </p>
        </div>

        {/* Resume Button */}
        <div>
          <a
            href="/Resume.pdf"
            target="_blank"
            className="inline-block  font-medium bg-button-bg px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
