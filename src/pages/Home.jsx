import React from "react";
import profilePic from "../assets/profilePic.jpeg";

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
          <span className="font-semibold text-primary">Frontend Developer</span>  with a strong foundation in full-stack development,
          focused on building scalable, high-performance web applications with
          clean and intuitive user interfaces. I started my career in
          non-technical roles at Byju’s and Amazon, where I developed strong
          problem-solving, communication, and analytical skills. Over time, I
          discovered a strong interest in technology and transitioned into
          software development through an intensive full-stack bootcamp at
          Coding Ninjas. Since then, I’ve built multiple real-world projects,
          including a production-ready MERN e-commerce platform featuring
          authentication, an admin dashboard, product management,
          Cloudinary-based image uploads, and PayPal payment integration. I
          enjoy creating dynamic UIs, optimizing performance, and delivering
          seamless user experiences. I specialize in HTML, CSS, JavaScript, and
          React, with hands-on experience in backend technologies like Node.js,
          Express, and MongoDB. I’m currently seeking opportunities where I can
          contribute, grow, and build impactful products as a frontend developer.
        </p>
      </div>
    </section>
  );
};

export default Home;
