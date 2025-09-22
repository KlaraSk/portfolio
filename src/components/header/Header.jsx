import Navigation from "../navigation/Navigation";
import "./Header.css";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { p } from "framer-motion/client";

function Header() {
  return (
    <header className="grid header">
      <section className=" header__left">
        <img src="src/assets/profile-image/IMG_3576.jpg" alt="Klara Sköld" className="header__img" />
      </section>
      <section className="grid header__right">
        <Navigation />
        <h2 className="heading-2 font-color-beige header__text">
          <span className="heading-1 font-color-pink font-color--stroke heading__hej">Hej!</span>
          <br />
          Jag heter Klara. Webbutvecklare vars{" "}
          <motion.span
            style={{ display: "inline-block" }}
            animate={{ scale: [1, 1.25, 1, 1.25, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.1, 0.2, 0.3, 1],
            }}
          >
            <FaHeart
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              size={22}
              color="var(--pink)"
              role="img"
              aria-label="hjärta"
            />
          </motion.span>{" "}
          slår extraslag för ux och design.
        </h2>
      </section>
    </header>
  );
}

export default Header;
