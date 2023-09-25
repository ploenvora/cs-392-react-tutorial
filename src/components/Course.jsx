import { useState } from "react";
import styles from "./CourseList.module.css";
import CourseEditor from "./CourseEditor";

const Course = ({
  courseCode,
  courseDetails,
  selected,
  toggleSelected,
  conflicted,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCourse, setEditedCourse] = useState(courseDetails);
  const [added, setAdded] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    e.stopPropagation();
    const { name, value } = e.target;
    setEditedCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  const handleOnSubmit = () => {};

  return (
    <div
      className={`${styles.course} ${
        selected.some((selectedItem) => selectedItem.courseCode === courseCode)
          ? styles.selected
          : ""
      }
      ${
        conflicted.some(
          (conflictedItem) => conflictedItem.courseCode === courseCode
        )
          ? styles.conflicted
          : ""
      }`}
    >
      {conflicted.some(
        (conflictedItem) => conflictedItem.courseCode === courseCode
      ) ? 
        null : (
        <button
          onClick={() => {
            setAdded(!added);
            toggleSelected(courseCode, courseDetails);
          }}
        >
          {added ? "Remove" : "Add"}
        </button>
      )}
      {isEditing ? (
        <CourseEditor
          course={editedCourse}
          closeEditor={handleCancelClick}
          handleInputChange={handleInputChange}
          handleOnSubmit={handleOnSubmit}
        />
      ) : (
        <>
          <div className={styles.info}>
            <h2>
              {courseDetails.term} CS {courseCode}
            </h2>
            <p>{courseDetails.title}</p>
          </div>
          <div className={styles.meets}>
            <p>{courseDetails.meets}</p>
          </div>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Course;
