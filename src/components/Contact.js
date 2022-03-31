import { useGlobalContext } from "./Context";
import { SiMinutemailer } from "react-icons/si";
import { FaWhatsappSquare, FaArrowsAltH } from "react-icons/fa";

const Contact = () => {
  const { isContactOpen, closePage } = useGlobalContext();

  return (
    <section className={`${isContactOpen ? "contact-show" : "contact"}`}>
      <div className="contact-container">
        <button className="exit-button" onClick={() => closePage("CONTACT")}>
          <FaArrowsAltH />
        </button>
        {/* <hr id="top-line" /> */}
        <div className="contact-area">
          <div className="contact-item">
            If you're interested in working with us,
          </div>
          <div className="contact-item">
            we'd love to have a chat, Message us!
            <br />
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
            or give us a call at, <br />
            <a href="tel:0405594393" target="_blank">
              040 559 4393
            </a>
          </div>
          <div className="contact-item">Can't wait to hear from you!</div>
        </div>
        {/* <hr id="bottom-line" /> */}
      </div>
    </section>
  );
};

export default Contact;
