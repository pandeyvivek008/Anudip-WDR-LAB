import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "../src/index.css";

// Course Components
import CourseNavigationBar from "./coursemanagement/CourseNavigationBar";
import CourseRegistration from "./coursemanagement/CourseRegistration";
import CourseUpdate from "./coursemanagement/CourseUpdate";
import CourseDelete from "./coursemanagement/CourseDelete";
import CourseList from "./coursemanagement/CourseList";
import CourseDetails from "./coursemanagement/CourseDetails";

// Faculty Components
import FacultyNavBar from "./facultymanagement/FacultyNavBar";
import FacultyRegistration from "./facultymanagement/FacultyRegistration";
import FacultyList from "./facultymanagement/FacultyList";
import FacultyProfile from "./facultymanagement/FacultyProfile";
import FacultyUpdate from "./facultymanagement/FacultyUpdate";
import "./facultymanagement/faculty.css";

function App() {

  // Course state
  const [courses, setCourses] = useState([]);

  // Faculty state
  const [faculty, setFaculty] = useState([]);

  return (
    <BrowserRouter>
      <div className="container">

        {/* ---------------- Header ---------------- */}
        <div className="header">
          <h1>LMS — Management System</h1>
        </div>

        {/* ------------ NavBar for both modules ---------- */}
        <CourseNavigationBar />
        <FacultyNavBar />

        <div style={{ marginTop: 14 }}>
          <Routes>

            {/* Redirect to course by default */}
            <Route path="/" element={<Navigate to="/course/register" replace />} />

            {/* ---------------- Course Routes ---------------- */}
            <Route path="/course/register"
              element={<CourseRegistration courses={courses} setCourses={setCourses} />} />

            <Route path="/course/update"
              element={<CourseUpdate courses={courses} setCourses={setCourses} />} />

            <Route path="/course/delete"
              element={<CourseDelete courses={courses} setCourses={setCourses} />} />

            <Route path="/course/list"
              element={<CourseList courses={courses} />} />

            <Route path="/course/details"
              element={<CourseDetails courses={courses} />} />

            {/* ---------------- Faculty Routes ---------------- */}
            <Route path="/faculty/register"
              element={<FacultyRegistration faculty={faculty} setFaculty={setFaculty} />} />

            <Route path="/faculty/list"
              element={<FacultyList faculty={faculty} />} />

            <Route path="/faculty/profile"
              element={<FacultyProfile faculty={faculty} />} />

            <Route path="/faculty/update"
              element={<FacultyUpdate faculty={faculty} setFaculty={setFaculty} />} />

          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
