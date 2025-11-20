function UserDisplay({ userData }) {
  return (
    <div>
      <h2>Display User Data</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Age:</strong> {userData.age}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Phone:</strong> {userData.phone}</p>
      <p><strong>City:</strong> {userData.city}</p>
    </div>
  );
}

export default UserDisplay;
