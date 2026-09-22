import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import UseRef from "./pages/UseRef";
import UseEffect from "./pages/UseEffect";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/useref" element={<UseRef />} />
          <Route path="/useeffect" element={<UseEffect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
