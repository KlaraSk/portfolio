import "./CardsList.css";
import { CardButton } from "../../components-styled/button/Button.styles";
import { projects } from "../../data/projects.js";

function CardsList({ title }) {
  const generateCategories = (project) => {
    return project.categories.map((category, idx) => (
      <span key={idx} className="label cards-list__category" style={{ "--i": idx + 1 }}>
        {category}
      </span>
    ));
  };

  return (
    <section className=" cards-list__section">
      <h2 className="heading-2 font-color-beige cards-list__title">{title}</h2>
      <ul className="grid cards-list">
        {projects.map((project) => {
          return (
            <li key={project.id} className="cards-list__item">
              <CardButton>
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
