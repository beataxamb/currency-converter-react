import "./style.css"

const Amount = () => (
    <input
        className="amount"
        min="10"
        step="0.01"
        type="number"
        placeholder="Wpisz kwotę w zł"
    />
);

export default Amount;