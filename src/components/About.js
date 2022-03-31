import { useGlobalContext } from "./Context";

const About = () => {
  const { isAboutOpen, closePage } = useGlobalContext();

  return (
    <section className={`${isAboutOpen ? "about-show" : "about"}`}>
      <button className="exit-button" onClick={() => closePage("ABOUT")}>
        X
      </button>

      <div className="spacer">
        <h2> I was born, upside down</h2>
        <img src="" alt="" />
      </div>
      <div className="spacer2"></div>
      <div className="spacer">
        <h2>Then I was taken to New York</h2>
      </div>
      <div className="spacer2"></div>
      <div className="spacer">
        <h2>Started making computer music</h2>
      </div>
      <div className="spacer2"></div>
      <div className="spacer">
        <h2>Also other computer arts</h2>
      </div>
      <div className="spacer2"></div>
      <div className="spacer">
        <h2>Now I make websites and write</h2>
      </div>
    </section>
  );
};

export default About;
