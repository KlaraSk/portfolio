import "./CardsList.css";
import { projects } from "../../data/projects.js";

import CardsListItem from "../cards-list-item/CardsListItem.jsx";

function CardsList({ title }) {
  const generateListItems = () => {
    return projects.map((project) => {
      return <CardsListItem key={project.id} project={project} />;
    });
  };

  return (
    <section className="cards-list__section">
      <h2 className="heading-2 font-color-beige cards-list__title">{title}</h2>
      <ul className="grid cards-list">{generateListItems()}</ul>
    </section>
  );
}

export default CardsList;
