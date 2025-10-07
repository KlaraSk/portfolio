import { useRef } from "react";
import "./Modal.css";
import clsx from "clsx";
import { ButtonSolidRed } from "../../components-styled/button/Button.styles";
import { IoClose } from "react-icons/io5";

function Modal({ showModal, setShowmodal, project, generateCategories }) {
  const modal = useRef();

  const modalClasses = clsx("modal", { "d-none": !showModal });

  return (
    <div id="myModal" className={modalClasses} ref={modal} onClick={() => setShowmodal(false)}>
      <div
        className="modal__content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ButtonSolidRed aria-label="Stäng" onClick={() => setShowmodal(false)} className="modal__close-btn">
          <IoClose className="close" />
        </ButtonSolidRed>
        <h3 className="heading-3 modal__title">{project.title}</h3>
        <a href={project.url}>länk</a>

        {/* <p className="body cards-list__desc2">{project.description}</p> */}
        {/* <div className="flex cards-list__categories-div2">{generateCategories(project)}</div> */}
      </div>
    </div>
  );
}

export default Modal;
