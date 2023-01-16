import { useGlobalContext } from "./Context";
import mirva from "../img/studiomirvae.png";
import jenni from "../img/hierojajenni.png";
import e from "../img/E.png";
import hieroja from "../img/hieroja.png";
import saimaanlatu from "../img/saimaanlatu.png";
import saksan from "../img/saksan.png";
import anitta from "../img/anitta.png";
import Navbar from "./Navbar";
import {FaArrowsAltV} from "react-icons/fa";

const Works = () => {
  const { isWorksOpen, closePage } = useGlobalContext();

  return (
    <section className={`${isWorksOpen ? "works-show" : "works"}`}>
      <div className="works-container">
        <button className="exit-button" onClick={() => closePage("WORKS")}>
          <FaArrowsAltV />
        </button>
        <div className="project-container">
          <a href="https://parturikampaamoanitta.hair" className="project" target="_blank">
            <img src={anitta} alt="parturi kampaamo anitta" className="project-img" />
            <div className="project-info">
              <h2>Parturi-kampaamo Anitta</h2>
            </div>
          </a>
          <a href="https://saimaanlatu.fi" className="project" target="_blank">
            <img src={saimaanlatu} alt="saimaan latu" className="project-img" />
            <div className="project-info">
              <h2>Saimaan Latu ry</h2>
            </div>
          </a>
          <a href="https://hierojajennivaananen.fi" className="project" target="_blank">
            <img src={hieroja} alt="hieroja jenni vaananen" className="project-img" />
            <div className="project-info">
              <h2>Hieroja Jenni Väänanen</h2>
            </div>
          </a>
          <a href="https://saksanmetsastysterrierit.org" className="project" target="_blank">
            <img src={saksan} alt="saksanmetsastysterrierit" className="project-img" />
            <div className="project-info">
              <h2>Suomen Saksanmetsastysterrierit Ry</h2>
            </div>
          </a>
          <a href="https://studiomirvae.fi" className="project" target="_blank">
            <img src={e} alt="studio mirva e" className="project-img" />
            <div className="project-info">
              <h2>Studio Mirva E</h2>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Works;
