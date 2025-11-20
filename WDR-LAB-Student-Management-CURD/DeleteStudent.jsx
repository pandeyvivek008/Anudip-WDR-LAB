function DeleteStudent({ student, students, setStudents, setSelectedStudent }) {
  function handleDelete() {
    const updatedList = students.filter((s) => s.id !== student.id);
    setStudents(updatedList);
    setSelectedStudent(null);
  }

  return (
    <div>
      <button onClick={handleDelete} style={{ background: "red", color: "#fff" }}>
        Delete Student
      </button>
    </div>
  );
}

export default DeleteStudent;
