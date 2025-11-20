import { useEffect, useState } from "react";

function StudentProfile({ student }) {
  const [profile, setProfile] = useState(student);

  useEffect(() => {
    setProfile(student); 
  }, [student]);

  return (
    <div>
      <h2>Student Profile</h2>
      <p><strong>ID:</strong> {profile.id}</p>
      <p><strong>Name:</strong> {profile.stdname}</p>
      <p><strong>Standard:</strong> {profile.standard}</p>
      <p><strong>Age:</strong> {profile.age}</p>
      <p><strong>Roll:</strong> {profile.roll}</p>
    </div>
  );
}

export default StudentProfile;
