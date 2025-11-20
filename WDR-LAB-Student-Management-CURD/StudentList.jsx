function StudentList({ students, setSelectedStudent }) {
  return (
    <div>
      <h2>All Students</h2>
      {students.length === 0 ? (
        <p>No students registered yet.</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              <strong>{student.stdname}</strong> (Std: {student.standard}, Age: {student.age}, Roll:{" "}
              {student.roll})
              <button
                onClick={() => setSelectedStudent(student)}
                style={{ marginLeft: "10px" }}
              >
                View
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;
