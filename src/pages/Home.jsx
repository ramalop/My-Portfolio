import React from "react";
import profilePic from "../assets/profile.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-base-200 flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <img
            src={profilePic}
            alt="Profile"
            className="w-52 h-52 rounded-full shadow-xl object-cover object-top border-4 border-base-300"
          />
        </div>

        {/* Name + Title */}
        <h1 className="text-4xl font-bold mb-4 text-base-content">
          Hi, I'm <span className="text-primary">Ramal Kumar</span>
        </h1>

        <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
          I’m a passionate{" "}
          <span className="font-semibold">Full-Stack Developer</span> who loves
          building scalable applications, clean UI experiences, and
          high-performance backend systems. I enjoy working across the entire
          stack—from crafting clean and intuitive front-end interfaces to
          architecting efficient backend systems with modern tools like React,
          Node.js, Express, and MongoDB. I’m always exploring new technologies,
          refining my skills, and working on projects that challenge me to grow
          as a developer. I love turning ideas into polished digital products
          that makes an impact.
        </p>
      </div>
    </section>
  );
};

export default Home;
