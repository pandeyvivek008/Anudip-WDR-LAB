// FacultyRegistration.jsx
// --------------------------------
// Purpose:
// - Create new faculty entries using react-hook-form
// - Store submitted data in 'faculty' array
// Props:
// - faculty : existing faculty list
// - setFaculty : state update function

import { useForm } from "react-hook-form";

function FacultyRegistration({ faculty, setFaculty }) {

  // useForm handles input values, validation, and reset
  const { register, handleSubmit, reset } = useForm();

  // When form is submitted → create a faculty object
  function onSubmit(data) {
    const obj = {
      faculty_id: data.faculty_id,
      faculty_name: data.faculty_name,
      age: Number(data.age),           // converting text → number
      qualification: data.qualification,
      joined_at: data.joined_at,
      status: data.status
    };

    // Add new faculty to array
    setFaculty([...faculty, obj]);

    alert("Faculty Registered");

    // Reset form fields after submission
    reset();
  }

  return (
    <div className="card">
      <h2>Faculty Registration</h2>

      {/* Form submit handler */}
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-row">

          {/* Faculty ID */}
          <div className="input-group">
            <label>Faculty ID</label>
            <input {...register("faculty_id")} />
          </div>

          {/* Name */}
          <div className="input-group">
            <label>Name</label>
            <input {...register("faculty_name")} />
          </div>

          {/* Age */}
          <div className="input-group">
            <label>Age</label>
            <input type="number" {...register("age")} />
          </div>

          {/* Qualification */}
          <div className="input-group">
            <label>Qualification</label>
            <input {...register("qualification")} />
          </div>

          {/* Joining Date */}
          <div className="input-group">
            <label>Joined At</label>
            <input type="date" {...register("joined_at")} />
          </div>

          {/* Status (Active/Left) */}
          <div className="input-group">
            <label>Status</label>
            <select {...register("status")}>
              <option value="active">Active</option>
              <option value="left">Left</option>
            </select>
          </div>

        </div>

        {/* Submit button */}
        <button type="submit">
          Register
        </button>

      </form>
    </div>
  );
}

export default FacultyRegistration;
