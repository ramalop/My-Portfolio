import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-base-200 flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-10 text-base-content">
          <span className="text-primary">Education</span>
        </h2>

        {/* Education Cards */}
        <div className="grid gap-8 max-w-3xl mx-auto">

          {/* 10th */}
          <div className="p-6 bg-base-100 rounded-2xl shadow-lg border border-base-300">
            <h3 className="text-2xl font-semibold text-primary">
              10th Standard
            </h3>
            <p className="text-lg text-base-content mt-2">
              De Nobili School Mugma (ICSE)
            </p>
          </div>

          {/* 12th */}
          <div className="p-6 bg-base-100 rounded-2xl shadow-lg border border-base-300">
            <h3 className="text-2xl font-semibold text-primary">
              12th Standard
            </h3>
            <p className="text-lg text-base-content mt-2">
              Boon School (CBSE)
            </p>
          </div>

          {/* Engineering */}
          <div className="p-6 bg-base-100 rounded-2xl shadow-lg border border-base-300">
            <h3 className="text-2xl font-semibold text-primary">
              B.Tech – Electrical & Electronics Engineering (EEE)
            </h3>
            <p className="text-lg text-base-content mt-2">
              Techno India Banipur
            </p>
          </div>
          <div className="p-6 bg-base-100 rounded-2xl shadow-lg border border-base-300">
            <h3 className="text-2xl font-semibold text-primary">
              Web Development Training
            </h3>
            <p className="text-lg text-base-content mt-2">
              Coding Ninjas
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
