import "./ContactPage.css";
import ContactForm from "../../components/contact-form/ContactForm";
import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

function ContactPage() {
  const [isSent, setIsSent] = useState(false);

  const contactTopClassNames = clsx("flex", "flex__column", "contact__top", { "contact__top--justify-flex-start": isSent });

  return (
    <section className="flex flex__column page page__wrapper font-color-black contact">
      <h2 className="heading-2">{!isSent ? "Kontakta mig" : "Tack för ditt meddelande"}</h2>
      <section className={contactTopClassNames}>
        <p className="body">
          {!isSent
            ? "Jag söker praktikplats inför vårterminen 2026. Har du tips på företag som tar emot LIA-studenter eller kanske en idé om ett samarbete? Kul! Hör av dig så pratar vi mer!"
            : "Jag återkopplar till dig inom kort. Vi hörs!"}
        </p>
        {isSent && (
          <Link className="link__button" to={"/"}>
            Tillbaka till startsidan
          </Link>
        )}
        {!isSent && <ContactForm isSent={isSent} setIsSent={setIsSent} />}
      </section>
      <section className="contact__bottom">
        <img
          className="contact__gif"
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExemY5NGI5aXBidG16bXczeGQ3aG1iN2l2OGlhdDJuZHZ3ZzNjejM1biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/efyEShk2FJ9X2Kpd7V/giphy.gif"
          alt=""
        />
      </section>
    </section>
  );
}

export default ContactPage;
