import { useGlobalContext } from "./Context";
import { SiMinutemailer } from "react-icons/si";
import { FaWhatsappSquare, FaArrowsAltH } from "react-icons/fa";
import { ImArrowRight2 } from "react-icons/im";

const Contact = () => {
  const { isContactOpen, closePage } = useGlobalContext();

  return (
    <section className={`${isContactOpen ? "contact-show" : "contact"}`}>
      <div className="contact-container">
        <button className="exit-button" onClick={() => closePage("CONTACT")}>
          <FaArrowsAltH />
        </button>

        <div className="contact-area">
          <div className="contact-item">
            <p>A little haiku I wrote, goes something like this:</p>
          </div>
          <div className="contact-item">
            <p>Your business can benefit with us,</p>
          </div>
          <div className="contact-item">
            <p>send us a message and we can discuss!</p>

            <ul className="socials-links">
              <li>
                <a href="https://wa.me/15164554202" target="_blank">
                  <FaWhatsappSquare />
                </a>
              </li>
              <li>
                <a href="mailto:studiobythepine@gmail.com" target="_blank">
                  <SiMinutemailer />
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-item">
            <p>Or we can call and have a talk,</p>
            <a href="tel:0405594393" target="_blank">
              040 559 4393
            </a>
          </div>
          <div className="contact-item">
            <p>Don't be shy and give us a knock!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
