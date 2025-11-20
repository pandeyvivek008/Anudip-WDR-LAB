function VariableExample() {
  // Creating a normal variable
  let num1 = 0;

  // Function to increment the value of variable by 5
  function incrementValue() {
    num1 = num1 + 5;
    console.log("Normal Variable:", num1);
  }

  // UI design
  return (
    <div>
      Number: {num1}
      <br />
      <button onClick={incrementValue}>Increment</button>
    </div>
  );
}

export default VariableExample;
