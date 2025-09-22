export const generateListItems = (arr, classnames) =>
  arr.map((item, idx) => (
    <li key={idx} className={classnames}>
      {item}
    </li>
  ));
