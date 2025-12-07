import React from "react";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-base-200 px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-base-content mb-10">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-5 rounded-xl bg-base-100 shadow hover:bg-base-200 border border-base-300 transition-all text-lg font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
