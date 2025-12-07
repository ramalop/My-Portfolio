import React from "react";
import NewsFlow from "../assets/NewsFlow.png";
import NotesApp from "../assets/Notes_App.png";
import TextPro from "../assets/TextPro_App.png";

const PortfolioSection = () => {
  return (
    <section id="projects" className="bg-base-200 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

      <div className="flex flex-col items-center gap-12">
        {/* ------------ NewsFlow ------------- */}
        <div className="card bg-base-100 shadow-xl w-[70%] mx-auto">
          <figure>
            <img
              src={NewsFlow}
              alt="NewsFlow"
              className="w-full h-85 object-cover"
            />
          </figure>

          <div className="card-body">
            <h3 className="card-title text-2xl">NewsFlow App</h3>
            <p className="text-lg">
              A real-time news application that fetches live headlines with
              category filters, Search Feature, pagination and a smooth UI.
            </p>

            <p className="text-sm mt-2 opacity-70">React • API • Bootstrap</p>

            <div className="card-actions mt-4">
              <a
                href="https://github.com/ramalop/Newsflow"
                target="_blank"
                className="btn btn-outline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* ------------ Notes App (MERN) ------------- */}
        <div className="card bg-base-100 shadow-xl w-[70%] mx-auto">
          <figure>
            <img
              src={NotesApp}
              alt="Notes App"
              className="w-full h-90 object-cover"
            />
          </figure>

          <div className="card-body">
            <h3 className="card-title text-2xl">Notes App (MERN)</h3>
            <p className="text-lg">
              A full-stack cloud-enabled notes manager with JWT authentication, Email Verification (Please check the spam folder for email Verification),
              CRUD operations, cloudinary image upload and mobile-first responsive UI.
            </p>

            <p className="text-sm mt-2 opacity-70">
              React • Node.js • Express • MongoDB
            </p>

            <div className="card-actions mt-4">
              <a
                href="https://mern-notes-app-hsrd.onrender.com"
                target="_blank"
                className="btn btn-primary"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/ramalop/mern-Notes-App"
                target="_blank"
                className="btn btn-outline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* ------------ TextPro ------------- */}
        <div className="card bg-base-100 shadow-xl w-[70%] mx-auto">
          <figure>
            <img
              src={TextPro}
              alt="TextPro"
              className="w-full h-90 object-cover"
            />
          </figure>

          <div className="card-body">
            <h3 className="card-title text-2xl">TextPro App</h3>
            <p className="text-lg">
              A React-based text utility tool with character tools, remove
              spaces, copy text, typing speed test and theme toggle.
            </p>

            <p className="text-sm mt-2 opacity-70">
              React • Tailwind • JavaScript
            </p>

            <div className="card-actions mt-4">
              <a
                href="https://github.com/ramalop/TextUtils-App"
                target="_blank"
                className="btn btn-outline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
