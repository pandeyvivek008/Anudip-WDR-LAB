import { useForm } from "react-hook-form";
import { useState } from "react";

/**
 * CourseUpdate Component
 * -------------------------------------------------
 * ✔ Pehle courseid dalna hoga → course find hoga
 * ✔ Agar course mil gaya → update form enable ho jayega
 * ✔ Sirf wo fields update hongi jo user input karega
 */
function CourseUpdate({ courses, setCourses }) {

  // react-hook-form se form handle karne ke tools milte hain
  const { register, handleSubmit, reset } = useForm();

  // Found course ko store karne ke liye local state
  const [found, setFound] = useState(null);

  /**
   * handleFind(values)
   * -------------------------------------------------
   * ✔ User ne jo courseid dala usse course search karta hai
   * ✔ Agar match mil gaya → setFound() me store kar deta hai
   */
  function handleFind(values) {
    const id = values.courseid?.trim();
    if (!id) return alert("Enter Course ID to find.");

    // Array me courseid se match dhunda
    const c = courses.find((x) => x.courseid === id);

    if (!c) {
      alert("Course not found.");
      setFound(null);
      return;
    }

    setFound(c); // Successfully found
  }

  /**
   * handleUpdate(values)
   * -------------------------------------------------
   * ✔ Pehle check karega ki koi course find hua ya nahi
   * ✔ Saare naye values updated object me add karega
   * ✔ Sirf filled (non-empty) fields ko update karega
   */
  function handleUpdate(values) {

    if (!found) return alert("First find a course by Course ID.");

    // Copy old course
    const updated = { ...found };

    // Jis field me user ne kuch input diya → update ussi ko karo
    if (values.coursename) updated.coursename = values.coursename;
    if (values.description) updated.description = values.description;
    if (values.duration) updated.duration = Number(values.duration);
    if (values.min_enroll) updated.min_enroll = Number(values.min_enroll);
    if (values.max_enroll) updated.max_enroll = Number(values.max_enroll);
    if (values.created_at) updated.created_at = values.created_at;

    // Array me match karke replace karo updated course ko
    const newList = courses.map((c) =>
      c.courseid === updated.courseid ? updated : c
    );

    // Final update → parent state update
    setCourses(newList);

    alert("✅ Course updated");

    // Updated course ko screen me dikhate raho
    setFound(updated);

    // Form clear
    reset();
  }

  return (
    <div className="card">
      <h2>Update Course</h2>

      {/* Pehla form → Course ID find karne ke liye */}
      <form onSubmit={handleSubmit(handleFind)}>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <input
            placeholder="Enter Course ID to find"
            {...register("courseid")}
          />
          <button type="submit" className="ghost">Find</button>
        </div>
      </form>

      {/* Agar course mil gaya toh update form show hoga */}
      {found ? (
        <div style={{ marginTop: 12 }}>
          <div className="small-muted">
            Editing: <strong>{found.courseid}</strong> — {found.coursename}
          </div>

          {/* Ye form sirf updates apply karega */}
          <form onSubmit={handleSubmit(handleUpdate)} style={{ marginTop: 12 }}>
            <div className="form-row">

              {/* Course Name */}
              <div className="input-group">
                <label>New Course Name</label>
                <input
                  {...register("coursename")}
                  placeholder={found.coursename}
                />
              </div>

              {/* Description */}
              <div className="input-group">
                <label>New Description</label>
                <input
                  {...register("description")}
                  placeholder={found.description}
                />
              </div>

              {/* Duration */}
              <div className="input-group">
                <label>Duration (hours)</label>
                <input
                  type="number"
                  {...register("duration")}
                  placeholder={found.duration}
                />
              </div>

              {/* Min Enroll */}
              <div className="input-group">
                <label>Min Enrollment</label>
                <input
                  type="number"
                  {...register("min_enroll")}
                  placeholder={found.min_enroll}
                />
              </div>

              {/* Max Enroll */}
              <div className="input-group">
                <label>Max Enrollment</label>
                <input
                  type="number"
                  {...register("max_enroll")}
                  placeholder={found.max_enroll}
                />
              </div>

              {/* Date */}
              <div className="input-group">
                <label>Updated Date</label>
                <input type="date" {...register("created_at")} />
              </div>
            </div>

            {/* Update Button */}
            <div style={{ marginTop: 12 }}>
              <button type="submit">Apply Update</button>
            </div>
          </form>
        </div>
      ) : (
        // Agar course find nahi hua toh ye dikhega
        <div className="note" style={{ marginTop: 12 }}>
          Enter Course ID and click <strong>Find</strong> to load course data here.
        </div>
      )}
    </div>
  );
}

export default CourseUpdate;
