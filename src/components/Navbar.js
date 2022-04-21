import { FaArrowsAltV } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { AiFillFormatPainter } from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { useGlobalContext } from "./Context";

const Navbar = ({ page }) => {
  const { closePage } = useGlobalContext();
  console.log({ page });

  return (
    <nav className="nav">
      <button
        className="exit-button"
        // id="services-exit"
        onClick={() => closePage(page)}
      >
        <FaArrowsAltV />
      </button>
      <ul className="nav-links">
        <li>
          <a href="#web-design">
            <MdWeb />
          </a>
        </li>
        <li>
          <a href="#branding">
            <AiFillFormatPainter />
          </a>
        </li>
        <li>
          <a href="#tech-support">
            <HiOutlineDesktopComputer />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
