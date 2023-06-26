import "./style.css";

const Currency = () => (
    <select className="currency" name="currency">
    <option value="EUR" selected>EUR</option>
    <option value="GBP">GBP</option>
    <option value="USD">USD</option>
  </select>
);

export default Currency;