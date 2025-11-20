import { useState, useEffect } from "react";

function UpdateStudent({ student, students, setStudents }) {
  const [updated, setUpdated] = useState({
    id: "",
    stdname: "",
    standard: "",
    age: "",
    roll: "",
  });

  // 🧠 Update local state whenever the student prop changes
  useEffect(() => {
    if (student) {
      setUpdated({
        id: student.id,
        stdname: student.stdname,
        standard: student.standard,
        age: student.age,
        roll: student.roll,
      });
    }
  }, [student]);

  // handle input change
  function handleChange(e) {
    const { name, value } = e.target;
    setUpdated((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // update in main array
  function handleUpdate() {
    const newList = students.map((s) =>
      s.id === updated.id ? { ...s, ...updated } : s
    );
    setStudents(newList);
    alert("Student updated successfully!");
  }

  return (
    <div>
      <h3>Update Student Info</h3>

      <label>ID:</label><br />
      <input
        type="text"
        name="id"
        value={updated.id}
        onChange={handleChange}
      />
      <br /><br />

      <label>Name:</label><br />
      <input
        type="text"
        name="stdname"
        value={updated.stdname}
        onChange={handleChange}
      />
      <br /><br />

      <label>Standard:</label><br />
      <input
        type="text"
        name="standard"
        value={updated.standard}
        onChange={handleChange}
      />
      <br /><br />

      <label>Age:</label><br />
      <input
        type="number"
        name="age"
        value={updated.age}
        onChange={handleChange}
      />
      <br /><br />

      <label>Roll:</label><br />
      <input
        type="number"
        name="roll"
        value={updated.roll}
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={handleUpdate}>Update Student</button>
    </div>
  );
}

export default UpdateStudent;
