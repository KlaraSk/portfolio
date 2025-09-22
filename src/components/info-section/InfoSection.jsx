import clsx from "clsx";
import "./InfoSection.css";

function InfoSection({ title, children, isDarkGreen, isLightGreen, isDarkPink, isLightPink }) {
  const classNames = clsx("info-section font-color-black", {
    "info-section__dark-green": isDarkGreen,
    "info-section__light-green": isLightGreen,
    "info-section__dark-pink": isDarkPink,
    "info-section__light-pink": isLightPink,
  });

  const headingClasses = clsx("heading-3 info-section__heading", {});

  return (
    <section className={classNames}>
      <h3 className={headingClasses}>{title}</h3>
      {children}
    </section>
  );
}

export default InfoSection;
