import "./ThisOrThat.css";

function ThisOrThat({ obj }) {
  return (
    <label className="flex this-or-that">
      <span className="body flex input__this-span">{obj.this}</span>
      <input type="range" min={1} max={10} value={obj.range} readOnly={true} />
      <span className="body">{obj.that}</span>
    </label>
  );
}

export default ThisOrThat;
