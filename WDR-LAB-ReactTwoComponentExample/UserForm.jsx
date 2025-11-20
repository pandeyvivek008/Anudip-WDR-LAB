function UserForm({ userData, setUserData }) {
  // Step 2: Handle input change and update parent state
  function handleChange(event) {
    const { name, value } = event.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>User Input Form</h2>

      

      <label>Name:</label><br />
      <input
        type="text"
        name="name"
        value={userData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      /><br /><br />

      <label>Age:</label><br />
      <input
        type="number"
        name="age"
        value={userData.age}
        onChange={handleChange}
        placeholder="Enter your age"
      /><br /><br />

      <label>Email:</label><br />
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      /><br /><br />

      <label>Phone:</label><br />
      <input
        type="text"
        name="phone"
        value={userData.phone}
        onChange={handleChange}
        placeholder="Enter your phone number"
      /><br /><br />

      <label>City:</label><br />
      <input
        type="text"
        name="city"
        value={userData.city}
        onChange={handleChange}
        placeholder="Enter your city"
      />
    </div>
  );
}

export default UserForm;
