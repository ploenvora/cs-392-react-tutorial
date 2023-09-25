import { useState } from "react";

const CourseEditor = ({
  course,
  closeEditor,
  handleInputChange,
  handleOnSubmit,
}) => {
  const [errors, setErrors] = useState({});

  const validateTitle = (value) => {
    if (value.length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        title: "Title must be at least two characters.",
      }));
    } else {
      setErrors((prevErrors) => {
        const { title, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const validateMeets = (value) => {
    const meetsPattern =
      /^[A-Za-z]{3,5} (?:[01]\d|2[0-3]):[0-5]\d-[01]\d|2[0-3]:[0-5]\d$/;
    if (!meetsPattern.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        meets:
          "Meeting time must have a valid format, e.g., 'MWF 12:00-13:20'.",
      }));
    } else {
      setErrors((prevErrors) => {
        const { meets, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleTitleChange = (e) => {
    e.stopPropagation();
    validateTitle(e.target.value);
    handleInputChange(e);
  };

  const handleMeetsChange = (e) => {
    e.stopPropagation();
    validateMeets(e.target.value);
    handleInputChange(e);
  };

  return (
    <div>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={course.title}
          onChange={handleTitleChange}
        />
        {errors.title && <p>{errors.title}</p>}
        <input
          type="text"
          name="meets"
          placeholder="Meeting times"
          value={course.meets}
          onChange={handleMeetsChange}
        />
        {errors.meets && <p>{errors.meets}</p>}
        <button onClick={closeEditor}>Cancel</button>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CourseEditor;
