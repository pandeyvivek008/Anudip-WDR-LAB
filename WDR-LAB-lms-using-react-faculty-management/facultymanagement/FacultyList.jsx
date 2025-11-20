/**
 * FacultyList Component
 * ------------------------------------
 * Purpose:
 * - Show list of all faculty stored in state
 * Props:
 * - faculty : array of faculty objects
 */

function FacultyList({ faculty }) {
  return (
    <div className="card">
      <h2>Faculty List</h2>

      {/* If no faculty exists → show message */}
      {faculty.length === 0 ? (
        <div className="note">No faculty found. Add faculty first.</div>
      ) : (
        faculty.map((f) => (
          <div key={f.faculty_id} className="course-item">

            {/* ---------------- Left Column ---------------- */}
            <div>
              {/* ID + Name */}
              <div>
                <strong>{f.faculty_id} — {f.faculty_name}</strong>
              </div>

              {/* Qualification */}
              <div className="course-meta">{f.qualification}</div>

              {/* Age */}
              <div className="small-muted">Age: {f.age}</div>
            </div>

            {/* ---------------- Right Column ---------------- */}
            <div style={{ textAlign: "right" }}>
              <div className="small-muted">{f.status}</div>
            </div>

          </div>
        ))
      )}
    </div>
  );
}

export default FacultyList;
