function ThisOrThat({ obj }) {
  return (
    <label className="flex this">
      <span className="body this-or-that__span">{obj.this}</span>
      <input type="range" min={1} max={10} value={obj.range} readOnly={true} className="this-or-that__range" />
      <span className="body this-or-that__span">{obj.that}</span>
    </label>
  );
}

export default ThisOrThat;
