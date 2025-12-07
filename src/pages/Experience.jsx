import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-base-200 flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-10 text-base-content">
          <span className="text-primary">Experience</span>
        </h2>

        <div className="grid gap-8 max-w-3xl mx-auto">

          {/* Byju's */}
          <div className="p-6 bg-base-100 rounded-2xl shadow-lg border border-base-300">
            <h3 className="text-2xl font-semibold text-primary">
              Business Development Associate
            </h3>
            <p className="text-lg text-base-content mt-1">
              Byju's • Sep 2020 – Feb 2021
            </p>
            <p className="text-base text-base-content/80 mt-3">
              Worked in student engagement and sales-driven communication,
              helping parents understand personalized learning solutions.
              Developed strong communication, negotiation, and client-handling
              skills while consistently achieving performance targets.
            </p>
          </div>

          {/* Amazon */}
          <div className="p-6 bg-base-100 rounded-2xl shadow-lg border border-base-300">
            <h3 className="text-2xl font-semibold text-primary">
              ML Data Associate
            </h3>
            <p className="text-lg text-base-content mt-1">
              Amazon • Mar 2022 – May 2023
            </p>
            <p className="text-base text-base-content/80 mt-3">
              Worked on data annotation and model training processes to improve
              machine learning systems. Ensured high-quality labeled datasets,
              performed quality checks, and collaborated with teams to optimize
              workflow accuracy and efficiency.
            </p>
          </div>

          {/* Coding Ninjas Bootcamp */}
          <div className="p-6 bg-base-100 rounded-2xl shadow-lg border border-base-300">
            <h3 className="text-2xl font-semibold text-primary">
              Full-Stack Development Bootcamp
            </h3>
            <p className="text-lg text-base-content mt-1">
              Coding Ninjas • Apr 2024 – Apr 2025
            </p>
            <p className="text-base text-base-content/80 mt-3">
              Completed an intensive hands-on bootcamp covering HTML, CSS,
              JavaScript, React, Node.js, Express, MongoDB, and real-world
              project development. Built multiple full-stack applications and
              strengthened problem-solving, UI design, and backend architecture
              skills.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
