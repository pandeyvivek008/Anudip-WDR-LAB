import { useState } from "react";

function StudentRegistration({ students, setStudents }) {
  const [form, setForm] = useState({
    id: "",
    stdname: "",
    standard: "",
    age: "",
    roll: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ 
        ...prev, 
        [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.id || !form.stdname) {
      alert("Please fill all required fields!");
      return;
    }
    setStudents([...students, form]);
    setForm({ id: "", stdname: "", standard: "", age: "", roll: "" });
  }

  return (
    <div>
      <h2>Register New Student</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Student ID:</label>
        <input
          type="text"
          name="id"
          placeholder="Student ID"
          value={form.id}
          onChange={handleChange}
        />
        <br></br>

        <label htmlFor="id">Student Name:</label>
        <input
          type="text"
          name="stdname"
          placeholder="Student Name"
          value={form.stdname}
          onChange={handleChange}
        />
        <br></br>

        <label htmlFor="id">Standard:</label>
        <input
          type="text"
          name="standard"
          placeholder="Standard"
          value={form.standard}
          onChange={handleChange}
        />
        <br></br>

        <label htmlFor="id">Age:</label>
         <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
        />
        <br></br>

        <label htmlFor="id">Roll Number:</label>
        <input
          type="number"
          name="roll"
          placeholder="Roll Number"
          value={form.roll}
          onChange={handleChange}
        />
        <br></br>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default StudentRegistration;
