import { useForm } from "react-hook-form";
import { useState } from "react";

/**
 * CourseDetails Component
 * -----------------------
 * Purpose:
 * - Enter a Course ID → Show full details of that course.
 * Props:
 * - courses: array containing all added courses
 */
function CourseDetails({ courses }) {

  // react-hook-form for form handling
  const { register, handleSubmit } = useForm();

  // store selected course after searching
  const [selected, setSelected] = useState(null);

  /**
   * onSubmit()
   * ----------
   * - Read course ID from input
   * - Find matching course in list
   * - If found → show details
   * - If not found → show alert
   */
  function onSubmit(values) {
    const id = values.courseid?.trim();
    if (!id) return alert("Enter Course ID");

    // search course
    const found = courses.find((c) => c.courseid === id);

    // if not found, reset and alert
    if (!found) {
      setSelected(null);
      alert("Course not found");
      return;
    }

    // store found course
    setSelected(found);
  }

  return (
    <div className="card">
      <h2>Course Details</h2>

      {/* SEARCH FORM */}
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: 12 }}>
        <div style={{ display: "flex", gap: 8 }}>

          {/* Input box for entering Course ID */}
          <input
            placeholder="Enter Course ID"
            {...register("courseid")}
          />

          {/* Button to trigger search */}
          <button type="submit" className="ghost">Get Details</button>
        </div>
      </form>

      {/* SHOW COURSE DETAILS IF SELECTED */}
      {selected ? (
        <div style={{ marginTop: 12 }}>
          <div className="course-item">
            <div>

              {/* Course ID + Name */}
              <div>
                <strong>{selected.courseid} — {selected.coursename}</strong>
              </div>

              {/* Description */}
              <div className="course-meta">{selected.description}</div>

              {/* Duration */}
              <div className="small-muted">
                Duration: {selected.duration} hrs
              </div>

              {/* Enrollment limit */}
              <div className="small-muted">
                Enroll: {selected.min_enroll} to {selected.max_enroll}
              </div>

              {/* Created/Updated Date */}
              <div className="small-muted">
                Date: {selected.created_at}
              </div>

            </div>
          </div>
        </div>
      ) : (
        // Message if no course selected yet
        <div className="note">Enter a Course ID to view details.</div>
      )}
    </div>
  );
}

export default CourseDetails;
