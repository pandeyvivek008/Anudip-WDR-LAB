import { useForm } from "react-hook-form";

/**
 * CourseRegistration Component
 * -----------------------------------------
 * ✔ Adds new course to the "courses" array
 * ✔ Uses react-hook-form for form validation
 * ✔ Validates min/max enrollments
 * ✔ Converts number fields before saving
 */
function CourseRegistration({ courses, setCourses }) {

  // useForm() gives functions for:
  // - register → connecting inputs to form
  // - handleSubmit → run function only when form is valid
  // - reset → clear form fields after submit
  // - errors → store all validation errors
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  /**
   * onSubmit(data)
   * -----------------------------------------
   * This function runs ONLY when form is valid.
   * "data" contains all input values.
   */
  function onSubmit(data) {

    // Convert min/max enrollment to numbers
    const minE = Number(data.min_enroll);
    const maxE = Number(data.max_enroll);

    // Extra manual validation → in case user leaves blank
    if (!data.courseid.trim() || !data.coursename.trim()) {
      alert("Course ID and Course Name are required.");
      return;
    }

    // Min enrollment must be <= max enrollment
    if (minE > maxE) {
      alert("Min enrollment cannot be greater than Max enrollment.");
      return;
    }

    // Create final course object (convert numeric fields)
    const courseObj = {
      ...data,  // Spread all form fields
      duration: Number(data.duration || 0),
      min_enroll: Number(data.min_enroll || 0),
      max_enroll: Number(data.max_enroll || 0),
    };

    // Add new course to the main course array
    setCourses([...courses, courseObj]);

    alert("✅ Course Registered Successfully!");

    // Clear all input fields after submit
    reset();
  }

  return (
    <div className="card">
      <h2>Course Registration</h2>

      {/* handleSubmit will validate form before calling onSubmit */}
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-row">

          {/* Course ID */}
          <div className="input-group">
            <label>Course ID *</label>
            {/* register connects the input to react-hook-form */}
            <input {...register("courseid", { required: true, maxLength: 30 })} />
            
            {/* Show error message if failed */}
            {errors.courseid && (
              <span className="small-muted">Required (max 30 chars)</span>
            )}
          </div>

          {/* Course Name */}
          <div className="input-group">
            <label>Course Name *</label>
            <input {...register("coursename", { required: true, maxLength: 300 })} />
            {errors.coursename && (
              <span className="small-muted">Required (max 300 chars)</span>
            )}
          </div>

          {/* Description */}
          <div className="input-group">
            <label>Description</label>
            <textarea {...register("description", { maxLength: 400 })} />
          </div>

          {/* Duration */}
          <div className="input-group">
            <label>Duration (hours)</label>
            <input
              type="number"
              {...register("duration", { min: 0 })}
            />
          </div>

          {/* Min Enrollment */}
          <div className="input-group">
            <label>Min Enrollment</label>
            <input
              type="number"
              {...register("min_enroll", { min: 0 })}
            />
          </div>

          {/* Max Enrollment */}
          <div className="input-group">
            <label>Max Enrollment</label>
            <input
              type="number"
              {...register("max_enroll", { min: 0 })}
            />
          </div>

          {/* Date */}
          <div className="input-group">
            <label>Created / Updated Date</label>
            <input type="date" {...register("created_at")} />
          </div>
        </div>

        {/* Submit Button */}
        <div style={{ marginTop: 12 }}>
          <button type="submit">Register Course</button>
          <span className="note"> &nbsp;* required fields</span>
        </div>
      </form>
    </div>
  );
}

export default CourseRegistration;
