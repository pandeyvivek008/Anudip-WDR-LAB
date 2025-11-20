/**
 * FacultyProfile Component
 * -------------------------
 * Purpose:
 * - Search faculty by ID and show detailed profile.
 *
 * Props:
 * - faculty : list of all faculty objects
 */

import { useForm } from "react-hook-form";
import { useState } from "react";

function FacultyProfile({ faculty }) {

  const { register, handleSubmit } = useForm();

  // State for storing the selected faculty record
  const [selected, setSelected] = useState(null);

  // Handle search
  function onSubmit(values) {
    const f = faculty.find((x) => x.faculty_id === values.faculty_id);

    if (!f) return alert("Faculty not found");

    setSelected(f);
  }

  return (
    <div className="card">
      <h2>Faculty Profile</h2>

      {/* Search input */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", gap: 8 }}>
          <input placeholder="Enter Faculty ID" {...register("faculty_id")} />
          <button className="ghost">Search</button>
        </div>
      </form>

      {/* Show profile only when selected */}
      {selected && (
        <div className="course-item" style={{ marginTop: 12 }}>
          <div>
            <strong>{selected.faculty_name}</strong>

            <div>Age: {selected.age}</div>
            <div>Qualification: {selected.qualification}</div>
            <div>Joined: {selected.joined_at}</div>
            <div>Status: {selected.status}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FacultyProfile;
