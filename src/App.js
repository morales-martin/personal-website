import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Gallery } from "./Components/Gallery";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/gallery" exact element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
