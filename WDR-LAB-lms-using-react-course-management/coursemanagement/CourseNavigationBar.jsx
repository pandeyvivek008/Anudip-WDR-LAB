import { Link } from "react-router-dom";

// ---------------------------------------------------------
// CourseNavigationBar Component
// This component shows the navigation bar for all course modules.
// Users can click on any link to navigate to Registration,
// Update, Delete, List, or Details pages.
// ---------------------------------------------------------

function CourseNavigationBar() {
  return (
    // Main navigation bar container
    <nav className="navbar card">

      {/* Link → Course Registration Page */}
      <Link className="nav-link" to="/course/register">
        Course Registration
      </Link>

      {/* Link → Course Update Page */}
      <Link className="nav-link" to="/course/update">
        Course Update
      </Link>

      {/* Link → Course Delete Page */}
      <Link className="nav-link" to="/course/delete">
        Course Delete
      </Link>

      {/* Link → Course List Page */}
      <Link className="nav-link" to="/course/list">
        Course List
      </Link>

      {/* Link → Course Details Page */}
      <Link className="nav-link" to="/course/details">
        Course Details
      </Link>

    </nav>
  );
}

export default CourseNavigationBar;
