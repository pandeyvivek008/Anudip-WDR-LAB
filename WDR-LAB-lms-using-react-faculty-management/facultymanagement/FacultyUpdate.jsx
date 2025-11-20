/**
 * FacultyUpdate Component
 * -------------------------
 * Purpose:
 * - Find faculty by ID
 * - Update selected fields (name, age, qualification, status)
 *
 * Props:
 * - faculty : list of all faculty
 * - setFaculty : update faculty list
 */

import { useForm } from "react-hook-form";
import { useState } from "react";

function FacultyUpdate({ faculty, setFaculty }) {

  const { register, handleSubmit, reset } = useForm();

  // Store found faculty before update
  const [found, setFound] = useState(null);

  // Find faculty by ID
  function findFaculty(values) {
    const f = faculty.find((x) => x.faculty_id === values.faculty_id);

    if (!f) return alert("Faculty not found");

    setFound(f);
  }

  // Update faculty data
  function updateFaculty(values) {

    const updated = { ...found };

    if (values.faculty_name) updated.faculty_name = values.faculty_name;
    if (values.age) updated.age = Number(values.age);
    if (values.qualification) updated.qualification = values.qualification;
    if (values.status) updated.status = values.status;

    const newList = faculty.map((x) =>
      x.faculty_id === updated.faculty_id ? updated : x
    );

    setFaculty(newList);

    alert("Faculty Updated");

    reset();
  }

  return (
    <div className="card">
      <h2>Faculty Update</h2>

      {/* Search faculty first */}
      <form onSubmit={handleSubmit(findFaculty)}>
        <div style={{ display: "flex", gap: 8 }}>
          <input placeholder="Faculty ID" {...register("faculty_id")} />
          <button className="ghost">Find</button>
        </div>
      </form>

      {/* Update form only if record found */}
      {found && (
        <form onSubmit={handleSubmit(updateFaculty)} style={{ marginTop: 12 }}>
          <div className="form-row">

            <div className="input-group">
              <label>New Name</label>
              <input {...register("faculty_name")} placeholder={found.faculty_name} />
            </div>

            <div className="input-group">
              <label>Age</label>
              <input type="number" {...register("age")} placeholder={found.age} />
            </div>

            <div className="input-group">
              <label>Qualification</label>
              <input {...register("qualification")} placeholder={found.qualification} />
            </div>

            <div className="input-group">
              <label>Status</label>
              <select {...register("status")}>
                <option value="active">Active</option>
                <option value="left">Left</option>
              </select>
            </div>

          </div>

          <button>Update</button>
        </form>
      )}
    </div>
  );
}

export default FacultyUpdate;
