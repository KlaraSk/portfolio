import "./CardsList.css";
import { CardButton } from "../../components-styled/button/Button.styles";
import { projects } from "../../data/projects.js";
import { useState } from "react";

import Modal from "../modal/Modal.jsx";

function CardsList({ title }) {
  const [showModal, setShowmodal] = useState(false);
  // const modal = useRef();

  const generateCategories = (project) => {
    return project.categories.map((category, idx) => (
      <span key={idx} className="label cards-list__category" style={{ "--i": idx + 1 }}>
        {category}
      </span>
    ));
  };

  // const modalClasses = clsx("modal", { "d-none": !showModal });

  return (
    <section className="cards-list__section">
      <h2 className="heading-2 font-color-beige cards-list__title">{title}</h2>
      <ul className="grid cards-list">
        {projects.map((project) => {
          return (
            <li key={project.id} className="cards-list__item">
              {showModal && (
                <Modal showModal={showModal} setShowmodal={setShowmodal} project={project} generateCategories={generateCategories} />
                // <div id="myModal" className={modalClasses} ref={modal} onClick={() => setShowmodal(false)}>
                //   <div
                //     className="modal__content"
                //     onClick={(e) => {
                //       e.stopPropagation();
                //     }}
                //   >
                //     <div className="flex flex__column cards-list__item-info2">
                //       <ButtonSolidRed aria-label="Stäng" onClick={() => setShowmodal(false)} className="modal__close-btn">
                //         <IoClose className="close" />
                //       </ButtonSolidRed>
                //       <h3 className="heading-3">{project.title}</h3>
                //       <p className="body cards-list__desc">{project.description}</p>
                //       <div className="flex cards-list__categories-div">{generateCategories(project)}</div>
                //       <iframe src={project.url} frameborder="0"></iframe>
                //     </div>
                //   </div>
                // </div>
              )}
              <CardButton onClick={() => setShowmodal(true)}>
                <img className="cards-list__item-img" src={project.imgSrc}></img>
                <div className="flex flex__column cards-list__item-info">
                  <h3 className="heading-3">{project.title}</h3>
                  <p className="body cards-list__desc">{project.description}</p>
                  <div className="flex cards-list__categories-div">{generateCategories(project)}</div>
                </div>
              </CardButton>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CardsList;
