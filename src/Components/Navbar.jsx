import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 bg-base/80 backdrop-blur-md border-b border-base-300 shadow-sm z-50">
      <nav className="w-full mx-auto flex items-center justify-between p-4 bg-base-200">
        {/* LOGO */}
        <h1 className="text-xl font-semibold">MyPortfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-blue-600">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-blue-600">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/education" className="hover:text-blue-600">
              Education
            </Link>
          </li>
          <li>
            <Link to="/experience" className="hover:text-blue-600">
              Experience
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Icon */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 bg-base-200 text-center py-4 text-lg shadow">
          <li>
            <Link to="/" className="block" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/skills" className="block" onClick={() => setOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="block"
              onClick={() => setOpen(false)}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
