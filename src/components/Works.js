import { useGlobalContext } from "./Context";
import pic from "../img/studiomirvae.png";
import { FaArrowsAltV } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { AiFillFormatPainter } from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const Works = () => {
  const { isWorksOpen, closePage } = useGlobalContext();

  return (
    <section className={`${isWorksOpen ? "works-show" : "works"}`}>
      <div className="works-container">
        <nav className="nav">
          <button className="exit-button" onClick={() => closePage("WORKS")}>
            <FaArrowsAltV />
          </button>
          {/* <ul className="nav-links">
            <li>
              <a href="/">
                <MdWeb />
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillFormatPainter />
              </a>
            </li>
            <li>
              <a href="/">
                <HiOutlineDesktopComputer />
              </a>
            </li>
          </ul> */}
        </nav>
        <div className="project-container">
          <a href="https://studiomirvae.fi" className="project" target="_blank">
            <img src={pic} alt="" className="project-img" />
            <div className="project-info">
              <h2>Studio Mirva E</h2>
              <br />
              <ul>
                <li>Website</li>
                <li>Wordpress</li>
                <li>Graphic Design</li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Works;
