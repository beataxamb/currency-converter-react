import "./style.css";

const Currency = ({ value, onChange }) => {
  return (
    <select
      className="currency"
      name="currency"
      value={value}
      onChange={onChange}
    >
      <option>EUR</option>
      <option>GBP</option>
      <option>USD</option>
    </select>
  )
};

export default Currency;