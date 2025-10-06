import ListItem from "../list-item/ListItem";
import "./List.css";

function List({ title, listItems }) {
  const generateListItem = () => listItems.map((item, index) => <ListItem key={index} listItem={item} />);

  return (
    <section>
      <h2 className="heading-1 font-color-light-green list__title">{title}</h2>
      <ul className="grid list">{generateListItem()}</ul>
    </section>
  );
}

export default List;
