import "./style.css";

const Result = ({ result, currencyName }) => (
    <p className="result">
        Po przeliczeniu:
        <strong className="result__amount">
            {result} {currencyName}
        </strong>
        <span className="result__currency"></span>
    </p>
);

export default Result;