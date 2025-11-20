import { useState } from "react";

function FormExample() {
  // Defining state variable
  const [user, setUser] = useState({
    username: '',
    age: '',
    standard: ''
  });

  // Function to handle onChange event of text fields
  function displayData(event) {
    const { name, value } = event.target; // fetching data


    //spread operator
    // Updating only the changed field
    setUser((prev) => ({
      ...prev,   // to maintain previous values
      [name]: value,
    }));
  }

  // UI design
  return (
    <div style={{ margin: "30px", fontFamily: "Arial" }}>
      <h2>Student Information Form</h2>

      {/* Name input */}
      <label htmlFor="username">Name:</label><br />
      <input
        type="text"
        name="username"
        value={user.username}
        placeholder="Enter your name"
        onChange={displayData}
      />
      <br /><br />

      {/* Age input */}
      <label htmlFor="age">Age:</label><br />
      <input
        type="number"
        name="age"
        value={user.age}
        placeholder="Enter your age"
        onChange={displayData}
      />
      <br /><br />

      {/* Standard input */}
      <label htmlFor="standard">Standard:</label><br />
      <input
        type="text"
        name="standard"
        value={user.standard}
        placeholder="Enter your standard"
        onChange={displayData}
      />
      <br /><br />

      <h3>-- Student Profile --</h3>
      <p><strong>Name:</strong> {user.username}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Standard:</strong> {user.standard}</p>
    </div>
  );
}

export default FormExample;
