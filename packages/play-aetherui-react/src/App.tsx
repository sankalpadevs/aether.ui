import "./App.css";
import {
  TextInput,
  ThemeProvider,
  NumberInput,
  Button,
  TextArea,
  PasswordInput,
} from "aetherui-react";

function App() {
  return (
    <ThemeProvider>
      <TextInput
        showCopy
        onChange={(e) => {
          console.log(e.target.value);
        }}
        replacer={"$1-$2-$3-$4"}
        format={/^(\d{3})(\d{3})(\d{3})(\d{3})$/}
        matcher={/^(\d{3})-(\d{3})-(\d{3})-(\d{3})$/}
        required
        errorText={"Invalid code"}
        helper={"Format 000-000-000-000"}
        label={"Credit Card No"}
        placeholder={"Credit card"}
      />
      <NumberInput
        onChange={(e) => {
          console.log(e.target.value);
        }}
        defaultValue={10}
        counter={5}
        max={20}
        min={5}
        controlButtons
        label={"Order amount"}
      />
      <Button type={"primary"} variant={"default"}>
        Add new
      </Button>
      <TextArea
        variant={"dotted"}
        maxLength={20}
        required
        label={"Sample text"}
      />
      <PasswordInput
        showStrength={true}
        strengthCriteria={[/[a-z]/, /[A-Z]/, /\d/, /[^A-Za-z\d]/]}
        errorText={"Invalid Password"}
        matcher={/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/}
        required
        label={"Password"}
      />
    </ThemeProvider>
  );
}

export default App;
