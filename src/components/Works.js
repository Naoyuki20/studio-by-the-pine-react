import { useGlobalContext } from "./Context";
import mirva from "../img/studiomirvae.png";
import jenni from "../img/hierojajenni.png";
import { FaArrowsAltV } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { AiFillFormatPainter } from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import Navbar from "./Navbar";

const Works = () => {
  const { isWorksOpen, closePage } = useGlobalContext();

  return (
    <section className={`${isWorksOpen ? "works-show" : "works"}`}>
      <div className="works-container">
        <Navbar page="WORKS" />
        <div className="project-container">
          <a href="https://hierojajennivaananen.fi" className="project" target="_blank">
            <img src={mirva} alt="hieroja jenni vaananen" className="project-img" />
            <div className="project-info">
              <h2>Hieroja Jenni Väänanen</h2>
            </div>
          </a>
          <a href="https://studiomirvae.fi" className="project" target="_blank">
            <img src={pic} alt="studio mirva e" className="project-img" />
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
