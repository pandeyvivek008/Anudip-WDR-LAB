import { useState } from "react";
import UserForm from "./UserForm";
import UserDisplay from "./UserDisplay";

function App() {
  // Step 1: Create state in parent component (App)
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    city: ""
  });

  return (
    <div style={{ margin: "20px", fontFamily: "Arial" }}>
      <h1>React Two Component Example</h1>
      {/* Pass setUserData to child to update state */}
      <UserForm userData={userData} setUserData={setUserData} />
      {/* Pass userData to display in another component */}
      <UserDisplay userData={userData} />
    </div>
  );
}

export default App;
