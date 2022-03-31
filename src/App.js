import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <About />
      <Works />
      <Home />
      <Services />
      <Contact />
    </>
  );
}

export default App;
