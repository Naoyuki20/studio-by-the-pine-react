import logo from "../../src/img/logo.jpg";
import { useGlobalContext } from "./Context";
import ReactGA from "react-ga";
import { useEffect } from "react/cjs/react.production.min";

const Home = () => {
  const { openPage } = useGlobalContext();

  useEffect(() => {
    ReactGA.initialize("G-92V0CZF638");

    ReactGA.pageview("/");
  }, []);

  return (
    <section className="home" id="home">
      <div className="about-toggle-area">
        <button className="about-toggle" onClick={() => openPage("ABOUT")}>
          <div className="button-text">about</div>
        </button>
      </div>
      <div className="logo-area">
        <img src={logo} alt="logo for studio by the pine" className="logo" />
      </div>
      <div className="works-toggle-area">
        <button className="works-toggle" onClick={() => openPage("WORKS")}>
          <div className="button-text">works</div>
        </button>
      </div>
      <div className="services-toggle-area">
        <button
          className="services-toggle"
          onClick={() => openPage("SERVICES")}
        >
          <div className="button-text">services</div>
        </button>
      </div>
      <div className="contact-toggle-area">
        <button className="contact-toggle" onClick={() => openPage("CONTACT")}>
          <div className="button-text">contact</div>
        </button>
      </div>
    </section>
  );
};

export default Home;
