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
    </footer>
  );
};

export default Footer;
