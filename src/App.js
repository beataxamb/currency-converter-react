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
  const [currency, setCurrency] = useState("EUR");

  const onInputChange = ({ target }) => {
    setAmount(target.value);
  };

  const onSelectChange = ({ target }) => {
    setCurrency(target.value);
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
      <Buttons/>
      <Result/>
    </Form>
  );
}

export default App;
