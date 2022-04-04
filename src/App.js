// Importing pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import CreateTour from "./pages/CreateTour/CreateTour";
import Trips from "./pages/Trips/Trips";
import Error from "./pages/Error/Error";
import ColorSwatch from "./components/ColorSwatch/ColorSwatch";
import { useCustomization } from "./customhooks/useCustomization";

// Importing components
import Navbar from "./components/Navbar/Navbar";

// React Router
import { Route, BrowserRouter, Routes } from "react-router-dom";

// Importing stylesheet
import "./App.css";

function App() {
  const { color } = useCustomization();
  return (
    <div
      className="App"
      style={{ backgroundColor: color, height: "100%", paddingBottom: "10px" }}
    >
      <BrowserRouter>
        <Navbar />
        <ColorSwatch />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create-tour" element={<CreateTour />} />
          <Route path="/trips/:id" element={<Trips />} />
          <Route path="/404" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
