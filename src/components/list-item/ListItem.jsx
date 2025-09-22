import "./ListItem.css";
import { FaHouse } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";

function ListItem({ listItem }) {
  return (
    <li className="flex flex__column font-color-black list-item">
      <h3 className="heading-3 ">{listItem.title}</h3>

      <div className="flex list-item__div">
        <FaHouse />
        <h4 className="label">{listItem.organisation}</h4>
      </div>
      <div className="flex list-item__div">
        <FaCalendar />
        <h4 className="label">{listItem.years}</h4>
      </div>

      <p className="body">{listItem.about}</p>
      {listItem.link && (
        <a href={listItem.link} className="body font-color-light-green">
          Länk till kursinnehållet
        </a>
      )}
    </li>
  );
}

export default ListItem;
