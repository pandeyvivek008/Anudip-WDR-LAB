import VariableExample from "./VariableExample.jsx";
import StateVariable from "./StateVariable.jsx";
import SingleTextFieldExample from "./SingleTextFieldExample.jsx";
import FormExample from "./FormExample.jsx";

function App() {
  return (
    <div>
      <h2>Normal Variable Example</h2>
      <VariableExample />

      <h2>State Variable Example</h2>
      <StateVariable />

      <h2>Single Text Field Example</h2>
      <SingleTextFieldExample/>

      <FormExample/>
    </div>
  );
}

export default App;
