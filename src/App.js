import Result from "./Result";
import Buttons from "./Buttons";
import Currency from "./Currency";
import Amount from "./Amount";
import Label from "./Label";
import Header from "./Header";
import Form from "./Form"

function App() {
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
          <Amount />
        }
      />
      <Label
        title="Wybierz walutę: "
        formField={
          <Currency />
        }
      />
      <Buttons />
      <Result />
    </Form>
  );
}

export default App;
