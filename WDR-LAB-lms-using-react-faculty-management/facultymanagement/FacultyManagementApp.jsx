/**
 * FacultyManagementApp
 * -----------------------
 * Purpose:
 * - Parent component for all Faculty modules.
 * - Stores faculty state and renders navigation + all routes.
 */

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import FacultyNavBar from "./FacultyNavBar";
import FacultyRegistration from "./FacultyRegistration";
import FacultyList from "./FacultyList";
import FacultyProfile from "./FacultyProfile";
import FacultyUpdate from "./FacultyUpdate";

function FacultyManagementApp() {

  // Main Faculty State
  const [faculty, setFaculty] = useState([]);

  return (
    <div className="container">

      {/* Navigation bar for Faculty Module */}
      <FacultyNavBar />

      {/* All Routes for Faculty screens */}
      <Routes>
        <Route
          path="/faculty/register"
          element={<FacultyRegistration faculty={faculty} setFaculty={setFaculty} />}
        />

        <Route
          path="/faculty/list"
          element={<FacultyList faculty={faculty} />}
        />

        <Route
          path="/faculty/profile"
          element={<FacultyProfile faculty={faculty} />}
        />

        <Route
          path="/faculty/update"
          element={<FacultyUpdate faculty={faculty} setFaculty={setFaculty} />}
        />
      </Routes>

    </div>
  );
}

export default FacultyManagementApp;
