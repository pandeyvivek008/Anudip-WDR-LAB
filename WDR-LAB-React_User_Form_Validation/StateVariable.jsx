import { useState } from "react";

// Defining functional component
function StateVariable() {
  // Creating a state variable
  const [num, setNum] = useState(0);

  // Defining a function that triggers on button click
  function incrementNumber() {
    // Increment variable by 10
    setNum(num + 10);
    console.log("State Variable:", num + 10);
  }

  // UI design
  return (
    <div>
      Number: {num}
      <br />
      <button onClick={incrementNumber}>Increment</button>
    </div>
  );
}

export default StateVariable;
