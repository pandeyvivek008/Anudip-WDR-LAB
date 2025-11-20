import { useForm } from "react-hook-form";
import { useState } from "react";

/**
 * CourseDelete Component
 * ----------------------
 * Function:
 * - Enter Course ID → Find the course → Delete it from the list.
 * Props:
 * - courses: array of all courses
 * - setCourses: function to update courses list
 */
function CourseDelete({ courses, setCourses }) {

  // react-hook-form object
  const { register, handleSubmit } = useForm();

  // store course found by ID
  const [found, setFound] = useState(null);

  /**
   * handleFind()
   * -----------
   * - Reads course ID from input
   * - Searches for that course in list
   * - If found → show it
   * - If not found → show alert
   */
  function handleFind(values) {
    const id = values.courseid?.trim();
    if (!id) return alert("Enter ID to find.");

    const c = courses.find((x) => x.courseid === id);

    if (!c) {
      alert("Course not found.");
      setFound(null);
      return;
    }

    // store found course
    setFound(c);
  }

  /**
   * handleDelete()
   * --------------
   * - Deletes selected course from list
   * - Updates state with remaining courses
   * - Clears the found course box
   */
  function handleDelete() {
    if (!found) return;

    // remove course matching the found ID
    const filtered = courses.filter((c) => c.courseid !== found.courseid);
    setCourses(filtered);

    setFound(null);
    alert("✅ Course deleted");
  }

  return (
    <div className="card">
      <h2>Delete Course</h2>

      {/* FIND COURSE FORM */}
      <form onSubmit={handleSubmit(handleFind)} style={{ marginBottom: 12 }}>
        <div style={{ display: "flex", gap: 8 }}>
          {/* Input for course ID */}
          <input
            placeholder="Course ID to delete"
            {...register("courseid")}
          />

          {/* Submit button for searching */}
          <button type="submit" className="ghost">Find</button>
        </div>
      </form>

      {/* SHOW FOUND COURSE + DELETE BUTTON */}
      {found ? (
        <div>
          <div className="course-item" style={{ alignItems: "flex-start" }}>
            <div>
              {/* Display ID + Name */}
              <div>
                <strong>{found.courseid} — {found.coursename}</strong>
              </div>

              {/* Display description */}
              <div className="course-meta">{found.description}</div>
            </div>

            {/* Delete Button */}
            <div className="actions">
              <button className="btn-danger" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        // message when course is not found yet
        <div className="note">Find a course first to delete it.</div>
      )}
    </div>
  );
}

export default CourseDelete;
