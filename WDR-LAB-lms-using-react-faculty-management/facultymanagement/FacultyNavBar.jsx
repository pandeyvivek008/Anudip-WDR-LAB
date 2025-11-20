// ----------------------------------------------------
// FacultyNavBar Component
// ----------------------------------------------------
// Purpose:
// - Ye navigation bar sirf Faculty Management module ke
//   andar hi use hoga.
// - Isme 4 links hain: Register, List, Profile, Update
// - User jab kisi link par click karega → respective page open hoga
// ----------------------------------------------------

import { Link } from "react-router-dom";

function FacultyNavBar() {
  return (
    // nav + card = clean white box UI (index.css style)
    <nav className="navbar card">

      {/* Faculty Registration Page Link */}
      <Link className="nav-link" to="/faculty/register">
        Faculty Registration
      </Link>

      {/* Faculty List Page Link */}
      <Link className="nav-link" to="/faculty/list">
        Faculty List
      </Link>

      {/* Faculty Profile Page Link */}
      <Link className="nav-link" to="/faculty/profile">
        Faculty Profile
      </Link>

      {/* Faculty Update Page Link */}
      <Link className="nav-link" to="/faculty/update">
        Faculty Update
      </Link>

    </nav>
  );
}

export default FacultyNavBar;
