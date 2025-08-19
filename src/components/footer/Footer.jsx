import "./Footer.css";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Footer() {
  return (
    <footer className=" footer text-color-orange">
      <nav className="flex footer__nav">
        <ul className="flex footer__list">
          <li>
            <a href="https://github.com/KlaraSk" target="_blank" rel="noopener noreferrer">
              <FaSquareGithub className="footer__icon" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/klaraskold" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="footer__icon" />
            </a>
          </li>
          <li>
            <a href="https://se.linkedin.com/in/klaraskold" target="_blank" rel="noopener noreferrer">
              <IoMail className="footer__icon" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
