import { useEffect, useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://portfolio-ix4r.onrender.com/api/contact")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section
      data-theme="dark-orange"
      id="projects"
      className=" min-w-screen bg-bg-secondary px-4 md:px-8 py-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-12 px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Projects</h1>

        <p className="text-center text-secondtext mb-14">
          A few things I’ve built recently
        </p>

        {loading && (
          <p className="text-center text-secondtext mb-8">
            Loading projects...
          </p>
        )}

        {!loading && projects.length === 0 && (
          <p className="text-center text-secondtext mb-8">No projects found</p>
        )}

        {!loading && projects.length > 0 && (
          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project._id}
                className="bg-card-bg p-6 rounded-2xl border border-border-color"
              >
                <h2 className="text-xl font-semibold mb-3">{project.title}</h2>

                <p className="text-secondtext mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-800 text-blue-400 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2">
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
