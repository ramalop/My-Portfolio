
import Navbar from "./components/Navbar";
import { Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Education from "./pages/Education";
import Experience from "./pages/Experience";


const App = () => {
  return (
    <div data-theme="winter">
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/skills" element = {<Skills/>}/>
        <Route path="/portfolio" element = {<Portfolio/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/education" element = {<Education/>}/>
        <Route path="/experience" element = {<Experience/>}/>
      </Routes>
    </div>
  );
};

export default App;
