import { useRef, useState } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";
import { ButtonSolid } from "../../components-styled/button/Button.styles";
import clsx from "clsx";
import { useForm } from "react-hook-form";

function ContactForm({ isSent, setIsSent }) {
  const form = useRef();
  const [error, setError] = useState({ isError: false, errorMsg: "" });

  // Regular expression from MDN for email validation as per HTML specification.
  const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

  // React form validator
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { user_name: "", user_email: "", message: "", name2: "", email2: "" } });

  console.log(errors);

  const sendEmail = () => {
    emailjs
      .sendForm("service_netmm49", "contact_form", form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const contactClassNames = clsx("flex", "flex__column", "heading-4", "font-color-black", "contact__form", { "d-none": isSent });

  return (
    <form
      noValidate
      className={contactClassNames}
      ref={form}
      onSubmit={handleSubmit((data) => {
        console.log(data);
        sendEmail();
      })}
    >
      <label className="contact__label">
        Namn (obligatiskt) <span className="contact__error">{errors.user_name?.message}</span>
        <input
          className="contact__input body"
          type="text"
          required
          {...register("user_name", { required: "Fyll i ett namn", minLength: 3 })}
        />
      </label>
      <label className="contact__label">
        Email (obligatiskt) <span className="contact__error">{errors.user_email?.message}</span>
        <input
          className="contact__input body"
          type="email"
          {...register("user_email", {
            required: "Fyll i en mailadress",
            pattern: { value: emailRegExp, message: "Fyll i en giltig mailadress" },
          })}
          required
        />
      </label>
      <label className="contact__label">
        Meddelande (obligatiskt) <span className="contact__error">{errors.message?.message}</span>
        <textarea className="contact__message body" {...register("message", { required: "Skriv ett meddelande", minLength: 5 })} required />
      </label>

      <label className="ohnohoney" htmlFor="name"></label>
      <input
        className="ohnohoney"
        autoComplete="off"
        type="text"
        id="name"
        {...register("name2", {
          validate: (value) => value === "" || "Detta fält ska vara tomt",
        })}
        placeholder="Your name here"
      />
      <label className="ohnohoney" htmlFor="email"></label>
      <input
        className="ohnohoney"
        autoComplete="off"
        type="email"
        id="email"
        {...register("email2", { validate: (value) => value === "" || "Detta fält ska vara tomt" })}
        placeholder="Your e-mail here"
      ></input>
      <ButtonSolid className={error.isError ? "contact__btn-error" : "contact__btn"} type="submit">
        Skicka
      </ButtonSolid>
    </form>
  );
}

export default ContactForm;
