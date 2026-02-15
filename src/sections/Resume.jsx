import React from "react";
const Resume = () => {
  return (
    <section data-theme="dark-orange" className="bg-bg-secondary" id="resume">
      <h1 className="text-4xl font-bold text-center mb-[40px]">Resume</h1>
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-12 px-6">
        <div>
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-block font-medium bg-button-bg px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};
export default Resume;
