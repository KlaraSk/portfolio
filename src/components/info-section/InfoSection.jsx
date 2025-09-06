import clsx from "clsx";
import "./InfoSection.css";

function InfoSection({ title, children, isTopSection }) {
  const classNames = clsx("info-section", {
    "info-section__top-section": isTopSection,
    "flex flex__column info-section__bottom-section": !isTopSection,
  });

  const headingClasses = clsx("heading-4 info-section__heading ", {
    "font-color-beige info-section__heading-left": isTopSection,
    "font-color-light-green": !isTopSection,
  });

  return (
    <section className={classNames}>
      <h3 className={headingClasses}>{title}</h3>
      {children}
    </section>
  );
}

export default InfoSection;
