import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import ReactGA from "react-ga";
import { useEffect } from "react/cjs/react.production.min";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <About />
              <Works />
              <Home />
              <Services />
              <Contact />
            </>
          }
        />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
