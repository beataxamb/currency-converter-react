import "./style.css";

const Buttons = ({ calculateResult }) => {

    return (
        <p className="buttons">
            <button
                className="buttons__button"
                onClick={calculateResult}
            >
                Przelicz
            </button>
            <button
                className="buttons__button"
                type="reset"
            >
                Wyczyść
            </button>
        </p>
    );
};

export default Buttons;