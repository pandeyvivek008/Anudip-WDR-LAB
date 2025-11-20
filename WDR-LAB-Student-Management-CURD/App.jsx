import { useState } from "react";
import StudentRegistration from "./StudentRegistration";
import StudentList from "./StudentList";
import StudentProfile from "./StudentProfile";
import DeleteStudent from "./DeleteStudent";
import UpdateStudent from "./UpdateStudent";

function App() {
  // Main student list state
  const [students, setStudents] = useState([]);

  // To show selected student for profile/update/delete
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div style={{ margin: "30px", fontFamily: "Arial" }}>
      <h1>Student Management App</h1>

      {/* Registration Component */}
      <StudentRegistration students={students} setStudents={setStudents} />

      <hr />

      {/* Student List */}
      <StudentList
        students={students}
        setSelectedStudent={setSelectedStudent}
      />

      <hr />

      {/* Student Profile */}
      {selectedStudent && <StudentProfile student={selectedStudent} />}

      {/* Update Student */}
      {selectedStudent && (
        <UpdateStudent
          student={selectedStudent}
          students={students}
          setStudents={setStudents}
        />
      )}

      <br></br>
      {/* Delete Student */}
      {selectedStudent && (
        <DeleteStudent
          student={selectedStudent}
          students={students}
          setStudents={setStudents}
          setSelectedStudent={setSelectedStudent}
        />
      )}
    </div>
  );
}

export default App;
