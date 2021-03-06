import { useGlobalContext } from "./Context";
import { FaArrowsAltH } from "react-icons/fa";

const About = () => {
  const { isAboutOpen, closePage } = useGlobalContext();

  return (
    <section className={`${isAboutOpen ? "about-show" : "about"}`}>
      <div className="about-container">
        <button className="exit-button" onClick={() => closePage("ABOUT")}>
          <FaArrowsAltH />
        </button>
        <div className="about-area">
          <div className="about-item">
            <h2>
              <span id="about-studio">Studio</span> by the pine<span id="about-period">.</span>
            </h2>
            <p>provides creative business solutions.</p>
          </div>
          <div className="about-item">
            <p>We design websites, logos, branding,</p>
          </div>
          <div className="about-item">
            <p>whatever digital needs your business may have</p>
          </div>
          <div className="about-item">
            <p>...</p>
          </div>
          <div className="about-item">
            <p>we're here for you.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
