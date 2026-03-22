import React from "react";
import NewsFlow from "../assets/NewsFlow.png";
import NotesApp from "../assets/Notes_App.png";
import TextPro from "../assets/TextPro_App.png";
import Ecommerce from "../assets/E-commerce.png";

const PortfolioSection = () => {
  return (
    <section id="projects" className="bg-base-200 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

      <div className="flex flex-col items-center gap-12">
        <div className="card bg-base-100 shadow-xl md:w-[70%] mx-auto">
          <figure>
            <img
              src={Ecommerce}
              alt="NewsFlow"
              className="w-full h-85 object-cover"
            />
          </figure>

          <div className="card-body">
            <h3 className="card-title text-2xl">E-Commerce App</h3>
            <p className="text-lg">
              A full-stack MERN eCommerce application with user shopping flow
              and admin management features. Built with modern React tooling,
              Redux Toolkit, and a scalable Node/Express backend.
            </p>

            <p className="text-sm mt-2 opacity-70">React • API • Bootstrap</p>

            <div className="card-actions mt-4">
              <a
                href="https://github.com/ramalop/MERN-ecommerce"
                target="_blank"
                className="btn btn-outline"
              >
                GitHub
              </a>
              <a
                href="https://mern-ecommerce-1-0ycn.onrender.com"
                target="_blank"
                className="btn btn-outline"
              >
                Live
              </a>
            </div>
          </div>
        </div>
        {/* ------------ NewsFlow ------------- */}
        <div className="card bg-base-100 shadow-xl md:w-[70%] mx-auto">
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
        <div className="card bg-base-100 shadow-xl md:w-[70%] mx-auto">
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
              A full-stack cloud-enabled notes manager with JWT authentication,
              Email Verification (Please check the spam folder for email
              Verification), CRUD operations, cloudinary image upload and
              mobile-first responsive UI.
            </p>

            <p className="text-sm mt-2 opacity-70">
              React • Node.js • Express • MongoDB
            </p>

            <div className="card-actions mt-4">
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
        <div className="card bg-base-100 shadow-xl md:w-[70%] mx-auto">
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
