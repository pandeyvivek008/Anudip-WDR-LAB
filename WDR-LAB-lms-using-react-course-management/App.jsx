import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// importing CSS file
import "../src/index.css";

// importing all course management components
import CourseNavigationBar from "./coursemanagement/CourseNavigationBar";
import CourseRegistration from "./coursemanagement/CourseRegistration";
import CourseUpdate from "./coursemanagement/CourseUpdate";
import CourseDelete from "./coursemanagement/CourseDelete";
import CourseList from "./coursemanagement/CourseList";
import CourseDetails from "./coursemanagement/CourseDetails";

function App() {

  // -----------------------------------------------------
  // MAIN STATE → This array stores all course records
  // -----------------------------------------------------
  const [courses, setCourses] = useState([
    // Sample object for testing (optional)
    // {
    //   courseid: "C101",
    //   coursename: "Intro to React",
    //   description: "React basics",
    //   duration: 20,
    //   min_enroll: 5,
    //   max_enroll: 50,
    //   created_at: "2025-11-17"
    // }
  ]);

  return (
    <BrowserRouter>
      <div className="container">

        {/* -------------------------------
            HEADER SECTION
        -------------------------------- */}
        <div className="header">
          <h1>LMS — Course Management</h1>
        </div>

        {/* ---------------------------------------------
            NAVIGATION BAR FOR SWITCHING BETWEEN MODULES
        ---------------------------------------------- */}
        <CourseNavigationBar />

        {/* -------------------------------
            ROUTES FOR ALL COMPONENTS
        ------------------------------- */}
        <div style={{ marginTop: 14 }}>

          <Routes>

            {/* Default route - redirect to course registration */}
            <Route
              path="/"
              element={<Navigate to="/course/register" replace />}
            />

            {/* Course Registration Component */}
            <Route
              path="/course/register"
              element={
                <CourseRegistration
                  courses={courses}
                  setCourses={setCourses}
                />
              }
            />

            {/* Course Update Component */}
            <Route
              path="/course/update"
              element={
                <CourseUpdate
                  courses={courses}
                  setCourses={setCourses}
                />
              }
            />

            {/* Course Delete Component */}
            <Route
              path="/course/delete"
              element={
                <CourseDelete
                  courses={courses}
                  setCourses={setCourses}
                />
              }
            />

            {/* Display List of All Courses */}
            <Route
              path="/course/list"
              element={<CourseList courses={courses} />}
            />

            {/* Single Course Details Component */}
            <Route
              path="/course/details"
              element={<CourseDetails courses={courses} />}
            />

            {/* Fallback Route → redirect */}
            <Route
              path="*"
              element={<Navigate to="/course/list" replace />}
            />

          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
