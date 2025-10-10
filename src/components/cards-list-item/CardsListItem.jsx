import { act, useEffect, useState } from "react";
import { CardButton } from "../../components-styled/button/Button.styles";
import Modal from "../modal/Modal";

function CardsListItem({ project }) {
  const [activeId, setActiveId] = useState(null);

  const generateCategories = (project) => {
    return project.categories.map((category, idx) => (
      <span key={idx} className="label cards-list__category" style={{ "--i": idx + 1 }}>
        {category}
      </span>
    ));
  };

  const openModal = () => {
    setActiveId(project.id);

    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    // https://medium.com/@nikhil_gupta/how-to-disable-background-scroll-when-a-modal-side-drawer-is-open-in-react-js-999653a8eebb
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    console.log("activeId: ", activeId);
  }, [activeId]);

  return (
    <li className="cards-list__item">
      {activeId === project.id && (
        <Modal activeId={activeId} setActiveId={setActiveId} project={project} generateCategories={generateCategories} />
      )}

      <CardButton onClick={openModal}>
        <img className="cards-list__item-img" src={project.imgSrc}></img>
        <div className="flex flex__column cards-list__item-info">
          <h3 className="heading-3">{project.title}</h3>
          <p className="body cards-list__desc">{project.description}</p>
          <div className="flex cards-list__categories-div">{generateCategories(project)}</div>
        </div>
      </CardButton>
    </li>
  );
}

export default CardsListItem;
