export default function Cell({ id, value, computedValue, onInputChange }) {
  const displayValue = value;

  return (
    <div className="cell">
      <label>{id}</label>
      <input type="text" value={displayValue} onChange={(e) => { onInputChange(id, e.target.value) }} />
      <p>{computedValue}</p>
    </div>
  );
}