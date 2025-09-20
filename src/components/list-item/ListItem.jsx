import { a } from "framer-motion/client";
import "./ListItem.css";

function ListItem({ listItem }) {
  return (
    <li className="flex flex__column font-color-black list__item">
      <h3 className="heading-3 ">{listItem.title}</h3>
      <h4 className="label">{listItem.organisation}</h4>
      <h4 className="label">{listItem.years}</h4>
      <p className="body">{listItem.about}</p>
      {listItem.link && <a href={listItem.link}>Länk till kursinnehållet</a>}
    </li>
  );
}

export default ListItem;
