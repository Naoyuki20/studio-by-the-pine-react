import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <Link to="/blog">Blog</Link>
      </div>
      <div className="footer-section">
        <Link to="/blog">Music</Link>
      </div>
    </footer>
  );
};

export default Footer;
