import './Footer.css';
import { MailOutlined, PhoneOutlined, GithubOutlined, LinkedinOutlined } from "@ant-design/icons"

const Footer = () => {

  return (
    <footer className="footer" id='/contact'>

      <div style={{ display: "flex", flexDirection: "column", alignItems:"center" }}>
        <div className="contact-row">
          <a><MailOutlined /></a>
          <strong className="contact-text">komals.5700@gmail.com</strong>
        </div>

        <div className="contact-row">
          <a><PhoneOutlined /></a>
          <strong className="contact-text">+91 9828368262</strong>
        </div>
      </div>

      <p className="find-me-text">You may also find me on these platforms!</p>

      <div style={{ marginTop: "1rem", fontSize: 24, cursor: "pointer" }}>
        <a href="https://github.com/Komal5700" aria-label="GitHub" style={{ color: "inherit", textDecoration: "none", marginRight: 10 }}><GithubOutlined /></a>
        <a href="https://www.linkdin.com/in/komsl-saini-739038221/" aria-label="Dribbble" style={{ color: "inherit", textDecoration: "none" }}><LinkedinOutlined /></a>
      </div>

      <div className="social-icons">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
        </a>
        <a href="https://stackoverflow.com/users/youruserid" target="_blank" rel="noopener noreferrer" className="social-link">
        </a>
      </div>

      <div className="footer-copyright">
        © 2025 | Designed and coded by Komal Saini
      </div>
    </footer>
  );
};

export default Footer;
