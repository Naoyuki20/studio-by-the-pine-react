import { useGlobalContext } from "./Context";
import { FaArrowsAltV } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { AiFillFormatPainter } from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import gif from "../img/forest.gif";

const Services = () => {
  const { isServicesOpen, closePage } = useGlobalContext();

  return (
    <section className={`${isServicesOpen ? "services-show" : "services"}`}>
      <div className="service-container">
        <nav className="nav">
          <button
            className="exit-button"
            id="services-exit"
            onClick={() => closePage("SERVICES")}
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
        {/* <header>
          While described separately for ease of information, all of our
          services compliments eachother and is offered in a packaged form.
          <br />
          Get in touch with us and let's discuss how to imropove your digital
          business!
          <br />
          We don't just make websites for it to look cool, we're here to solve
          your business needs through a website
        </header> */}
        <section className="service" id="web-design">
          <h2>Web Design</h2>

          <hr />
          <h3>
            Simple and beautiful website that will reach new customers and act
            as your 24/7 "sales person"
          </h3>
          <p>
            Your business' website is the most important aspect of your digital
            presence as it is the main source of information for existing
            customers and potential clients. To maximize the potential of your
            website, it is crucial for the website to be easy to navigate around
            on any device, as well as beautiful to look at and true to the
            business’ brand. At our studio, we create custom websites using
            Wordpress, as it gives you an easy way to manage blog posts and
            updates with little to no technology knowledge. We will listen to
            your needs as a business and will create a website that will not
            only be the face of your business online, but will act as a
            “salesperson” that will promote your business online; both day and
            night.
          </p>
        </section>

        <section className="service" id="branding">
          <div class="custom-shape-divider-top-1648811132">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 0L0 0 892.25 114.72 1200 0z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
          <h2>Branding</h2>
          <hr />
          <h3>
            Build a consistent and memorable brand to reach your business goals
          </h3>
          <p>
            Whether you are looking to refresh your business or expand it, a
            consistent and memorable business identity is essential to building
            up your brand. We utilize our graphic design and writing expertise
            to help you communicate your business to your customers with more
            clarity
          </p>
          <ul>
            <li className="list-title">Services include:</li>
            <li>Logo and business identity</li>
            <li>Digital / Physical Contents</li>
            <li>Copywriting</li>
          </ul>
        </section>
        <section className="service" id="tech-support">
          <div class="custom-shape-divider-top-1648811517">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
          <h2>Tech Support</h2>
          <hr />
          <h3>
            Avoid costly technology downtimes so you can focus on running your
            business
          </h3>
          <p>
            Having well maintained technology for your business is crucial to
            keeping up productivity and avoiding future technology troubles. In
            a world where technologies are changing at an unseen pace, we bring
            our technology expertise to keep your computers and softwares up to
            date, as well as organizing your files and data so you can find them
            with ease right when you need them. Also, as gadget enthusiasts, we
            can consult you about new technologies / devices that can help make
            work more efficient for you and your employees.
          </p>
          <ul>
            <li className="list-title">Services include:</li>
            <li>Technology maintenance</li>
            <li>Technology Suggestions and Integration</li>
            <li>General Tech Support</li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Services;
