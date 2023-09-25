import React from "react";

const CourseEditor = ({
  course,
  closeEditor,
  handleInputChange,
  handleOnSubmit,
}) => {
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={course.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="meets"
          placeholder="Meeting times"
          value={course.meets}
          onChange={handleInputChange}
        />
        <button onClick={closeEditor}>Cancel</button>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CourseEditor;
