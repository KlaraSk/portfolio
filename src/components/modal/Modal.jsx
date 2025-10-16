import { useRef } from "react";
import "./Modal.css";
import clsx from "clsx";
import { BasicButtonLightGreen, ButtonSolidRed } from "../../components-styled/button/Button.styles";
import { IoClose } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

function Modal({ project, activeId, setActiveId, generateCategories }) {
  const modal = useRef();

  const modalClasses = clsx("flex modal", { "d-none": project.id !== activeId });

  // Unsets Background Scrolling to use when SideDrawer/Modal is closed
  // https://medium.com/@nikhil_gupta/how-to-disable-background-scroll-when-a-modal-side-drawer-is-open-in-react-js-999653a8eebb
  const closeModal = () => {
    setActiveId(null);
    document.body.style.overflow = "unset";
  };

  const generateInsightsList = () =>
    project.insights.map((insight) => {
      return (
        <li key={insight} className="label modal__list-item">
          {insight}
        </li>
      );
    });

  return (
    <div id="myModal" className={modalClasses} ref={modal} onClick={closeModal}>
      <div
        className="flex flex__column modal__content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <header className="flex flex__column modal__header">
          <ButtonSolidRed aria-label="Stäng" onClick={closeModal} className="modal__close-btn flex">
            <IoClose className="modal__close-icon" />
            Stäng
          </ButtonSolidRed>
          <h3 className="heading-3 modal__title">{project.title}</h3>
          <p className="body cards-list__desc2">{project.descriptionLong}</p>
        </header>
        <ul className="flex flex__column modal__list">
          <h4 className="heading-4">Vad jag lärde mig</h4>
          {generateInsightsList()}
        </ul>
        {project.url && (
          <BasicButtonLightGreen className="modal__link-btn">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="body flex font-color-light-green modal__link">
              Visa projektet <FaExternalLinkAlt />
            </a>
          </BasicButtonLightGreen>
        )}
      </div>
    </div>
  );
}

export default Modal;
