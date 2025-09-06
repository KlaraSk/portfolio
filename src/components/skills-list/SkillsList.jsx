import "./SkillsList.css";

function SkillsList({ arr, title }) {
  return (
    <ul className="list">
      <h4 className="heading-4 font-color-light-green">{title}</h4>
      {arr.map((item) => (
        <li className="body font-color-black list__item">{item}</li>
      ))}
    </ul>
  );
}

export default SkillsList;
