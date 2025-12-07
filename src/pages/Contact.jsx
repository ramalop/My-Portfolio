import { Mail, Github, Linkedin, Facebook, Bold } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-base-200 text-white px-8 pt-30 ">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6 text-green-400">Get in Touch</h2>

        <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
          I’m always open for discussing new projects, collaboration opportunities,
          or even just chatting about tech. Whether you want to build something,
          hire a developer, or need help with your ideas—feel free to reach out!
        </p>

        {/* Address */}
        <div className="text-gray-300 mb-10">
          <h3 className="text-2xl font-semibold mb-2 text-green-400">My Address</h3>
          <p className="leading-relaxed">
           Village : Birsinghpur <br />
            Town: Nirsa <br />
            District: Dhanbad <br />
            State: Jharkhand <br />
            Pin Code: 828205 <br />
            Mobile : 7783827618
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-6">

          <a
            href="https://www.linkedin.com/in/ramal-kumar-38a7711b3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Linkedin size={32} />
          </a>

          <a
            href="mailto:ramalkumar574@gmail.com"
            className="hover:text-red-400 transition"
          >
            <Mail size={32} />
          </a>

          <a
            href="https://github.com/ramalop"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <Github size={32} />
          </a>

          <a
            href="https://www.facebook.com/ramal.kumar2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <Facebook size={32} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;
