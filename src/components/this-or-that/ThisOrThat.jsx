function ThisOrThat({ obj }) {
  return (
    <label className="flex ">
      <span className="body">{obj.this}</span>
      <input type="range" min={1} max={10} value={obj.range} readOnly={true} />
      <span className="body">{obj.that}</span>
    </label>
  );
}

export default ThisOrThat;
