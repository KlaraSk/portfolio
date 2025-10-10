import { useRef } from "react";
import "./Modal.css";
import clsx from "clsx";
import { ButtonSolidRed } from "../../components-styled/button/Button.styles";
import { IoClose } from "react-icons/io5";

function Modal({ project, activeId, setActiveId, generateCategories }) {
  const modal = useRef();

  const modalClasses = clsx("modal", { "d-none": project.id !== activeId });

  const closeModal = () => {
    setActiveId(null);

    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    // https://medium.com/@nikhil_gupta/how-to-disable-background-scroll-when-a-modal-side-drawer-is-open-in-react-js-999653a8eebb
    document.body.style.overflow = "unset";
  };

  return (
    <div id="myModal" className={modalClasses} ref={modal} onClick={closeModal}>
      <div
        className="modal__content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ButtonSolidRed aria-label="Stäng" onClick={closeModal} className="modal__close-btn">
          <IoClose className="close" />
        </ButtonSolidRed>
        <h3 className="heading-3 modal__title">{project.title}</h3>
        {project.url && (
          <a
            href="http://react-individual-exam.s3-website.eu-north-1.amazonaws.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="body"
          >
            Länk till projektet
          </a>
        )}
        <p className="body cards-list__desc2">{project.description}</p>
        {/* <div className="flex cards-list__categories-div2">{generateCategories(project)}</div> */}
      </div>
    </div>
  );
}

export default Modal;
