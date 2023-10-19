import Result from "./Result";
import Buttons from "./Buttons";
import Currency from "./Currency";
import Amount from "./Amount";
import Label from "./Label";
import Header from "./Header";
import Form from "./Form"
import { useState } from "react";

function App() {

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [result, setResult] = useState("N/A");
  const [currencyName, setCurrencyName] = useState("");


  const onInputChange = ({ target }) => {
    setAmount(target.value);
  };

  const onSelectChange = ({ target }) => {
    setCurrency(target.value);
  };

  const calculateResult = () => {
    const calculateResult = calculate();
    setResult(calculateResult.toFixed(2));
    setCurrencyName(currency);
  };

  const calculate = () => {
    const currencyEur = 0.21;
    const currencyGbp = 0.19;
    const currencyUsd = 0.22;

    switch (currency) {
      case "EUR":
        return amount * currencyEur;

      case "GBP":
        return amount * currencyGbp;

      case "USD":
        return amount * currencyUsd;

      default:
        return "N/A";
    }
  };

  return (
    <Form
      annotation="*-pole wymagane"
    >
      <Header
        title="Kalkulator walut"
      />
      <Label
        title="Kwota w złotówkach:* "
        formField={
          <Amount value={amount} onChange={onInputChange} />
        }
      />
      <Label
        title="Wybierz walutę: "
        formField={
          <Currency value={currency} onChange={onSelectChange} />
        }
      />
      <Buttons calculateResult={calculateResult} />
      <Result result={result} currencyName={currencyName} />
    </Form>
  );
}

export default App;
