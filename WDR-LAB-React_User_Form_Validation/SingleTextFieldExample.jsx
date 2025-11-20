import { useState } from "react";

// Functional component
function SingleTextFieldExample() {
  // State variables
  const [username, setUsername] = useState('');
  const [userage, setUserage] = useState('');
  const [userstandard, setUserstandard] = useState('');

  // Functions to set values in state variables
  function displayUserName(event) {
    setUsername(event.target.value);
  }

  function displayUserAge(event) {
    setUserage(event.target.value);
  }

  function displayUserStandard(event) {
    setUserstandard(event.target.value);
  }

  // UI Design
  return (
    <div style={{ margin: "20px" }}>
      <h2>Student Information</h2>

      {/* Name Input */}
      <label htmlFor="userage">Name:</label><br />
      <input
        type="text"
        name="username"
        value={username}
        placeholder="Enter your name"
        onChange={displayUserName}
      />
      
      <br/>

      {/* Age Input */}
      <label htmlFor="userage">Age:</label><br />
      <input
        type="number"
        name="userage"
        value={userage}
        placeholder="Enter your age"
        onChange={displayUserAge}
      />
      
      <br/>

      {/* Standard Input */}
      <label htmlFor="userage">Standard:</label><br />
      <input
        type="text"
        name="userstandard"
        value={userstandard}
        placeholder="Enter your standard"
        onChange={displayUserStandard}
      />
      <p>Name: {username}</p>
      <p>Age: {userage}</p>
      <p>Standard: {userstandard}</p>
    </div>
  );
}

export default SingleTextFieldExample;
