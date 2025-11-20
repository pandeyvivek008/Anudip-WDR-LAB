import { useState } from 'react'
import StudentProfile from './StudentProfile.jsx';
import StudentList from './StudentList.jsx';
import StudentRegistration from './StudentRegistration.jsx';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';

function App() {
  
  return (
    <>
      <Router>
        <div>
      <ul style={{listStyleType:"none",backgroundColor:"blue",width:"100%",overflow:"hidden"}}>
        <li style={{float:"left",padding:"10px 20px"}}><Link to="/" style={{textDecoration:"none",color:"white"}}>Student Registration</Link></li>
        <li style={{float:"left",padding:"10px 20px"}}><Link to="/stdlist" style={{textDecoration:"none",color:"white"}}>Student List</Link></li>
        <li style={{float:"left",padding:"10px 20px"}}><Link to="/profile" style={{textDecoration:"none",color:"white"}}>Student Profile</Link></li>
      </ul>
      </div>
      <br/>

        <Routes>
          <Route path="/" element={<StudentRegistration />}/>
          <Route path="/stdlist" element={<StudentList />}/>
          <Route path="/profile" element={<StudentProfile />}/>
        </Routes>
      
      </Router>
    </>
  )
}
export default App
