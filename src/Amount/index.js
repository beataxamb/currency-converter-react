import "./style.css"

const Amount = ({ value, onChange }) => {
    return (
        <input
            className="amount"
            min="10"
            step="0.01"
            type="number"
            placeholder="Wpisz kwotę w zł"
            value={value}
            onChange={onChange}
        />
    );
};

export default Amount;