import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaWordpress,
  FaPython,
  FaBootstrap,
  FaJava,
  FaFigma,
} from "react-icons/fa";

import {
  SiMysql,
  SiCplusplus,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

const tech = [
  { name: "React", icon: <FaReact color="#61DBFB" size={36} /> },
  { name: "Node.js", icon: <FaNodeJs color="#68A063" size={36} /> },
  { name: "Express", icon: <SiExpress color="#ffffff" size={36} /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" size={36} /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" size={36} /> },
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" size={36} /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" size={36} /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#38BDF8" size={36} /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" size={36} /> },
  { name: "WordPress", icon: <FaWordpress color="#21759B" size={36} /> },
  { name: "Python", icon: <FaPython color="#3776AB" size={36} /> },
  { name: "MySQL", icon: <SiMysql color="#4479A1" size={36} /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" size={36} /> },
  { name: "Java", icon: <FaJava color="#f89820" size={36} /> },
  { name: "C/C++", icon: <SiCplusplus color="#00599C" size={36} /> },
  { name: "Figma", icon: <FaFigma color="#F24E1E" size={36} /> },
];

export default function TechStack() {
  return (
    <section data-theme="dark-orange" id="tech" className="py-[80px] px-[20px]">
      <div className="max-w-[1200px] my-0 mx-auto">
        <h2
          style={{
            textAlign: "center",
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "50px",
          }}
        >
          Tech Stack
        </h2>

        {/* Row 1 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(8, minmax(0, 1fr))",
            gap: "30px",
            marginBottom: "40px",
          }}
        >
          {tech.slice(0, 8).map((item, index) => (
            <div
              key={index}
              className={"bg-card-bg"}
              style={{
                textAlign: "center",
                padding: "18px 10px",
                borderRadius: "12px",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(59,130,246,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                {item.icon}
              </div>
              <p style={{ fontSize: "14px", color: "#d1d5db" }}>{item.name}</p>
            </div>
          ))}
        </div>

        <hr className="border-border-color mb-[40px]" />

        {/* Row 2 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(8, minmax(0, 1fr))",
            gap: "30px",
          }}
        >
          {tech.slice(8).map((item, index) => (
            <div
              key={index}
              className="bg-card-bg"
              style={{
                textAlign: "center",
                padding: "18px 10px",
                borderRadius: "12px",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(59,130,246,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                {item.icon}
              </div>
              <p style={{ fontSize: "14px", color: "#d1d5db" }}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
