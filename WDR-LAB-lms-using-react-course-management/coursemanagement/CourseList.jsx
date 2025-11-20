/**
 * CourseList Component
 * --------------------
 * Purpose:
 * - Display all courses stored in the 'courses' array.
 * - If list is empty → show a simple message.
 * Props:
 * - courses : array of all course objects
 */
function CourseList({ courses }) {
  return (
    <div className="card">
      <h2>All Courses</h2>

      {/* Show message when no courses exist */}
      {courses.length === 0 ? (
        <div className="note">
          No courses found. Add courses via Registration.
        </div>
      ) : (
        // If courses exist → iterate and show each course
        courses.map((c) => (
          <div key={c.courseid} className="course-item">

            {/* Left section: ID, Name, Description, Duration, Min/Max */}
            <div>
              {/* Course ID + Name */}
              <div>
                <strong>{c.courseid} — {c.coursename}</strong>
              </div>

              {/* Course description */}
              <div className="course-meta">{c.description}</div>

              {/* Additional details like duration and enrollment limits */}
              <div className="small-muted">
                Duration: {c.duration} hrs • Min: {c.min_enroll} • Max: {c.max_enroll}
              </div>
            </div>

            {/* Right section: created/updated date */}
            <div style={{ textAlign: "right" }}>
              <div className="small-muted">{c.created_at}</div>
            </div>

          </div>
        ))
      )}
    </div>
  );
}

export default CourseList;
