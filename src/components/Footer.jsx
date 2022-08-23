import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <Link to="/blog">Blog</Link>
      </div>
      <div className="footer-section">
        <a href="https://soundcloud.com/naoyukisan" target="_blank">
          Music
        </a>
      </div>
      <div className="footer-section">
        <a href="http://vr.studiobythepine.com" target="_blank">
          VR Experience
        </a>
      </div>
    </footer>
  );
};

export default Footer;
