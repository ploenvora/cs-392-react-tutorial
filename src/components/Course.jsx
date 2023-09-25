import { useState } from "react";
import styles from "./CourseList.module.css";
import CourseEditor from "./CourseEditor";
import CourseCard from "./CourseCard";

const Course = ({
  courseCode,
  courseDetails,
  selected,
  toggleSelected,
  conflicted,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [added, setAdded] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

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
      ) ? null : (
        <button
          onClick={() => {
            setAdded(!added);
            toggleSelected(courseCode, courseDetails);
          }}
          className={styles.addbutton}
        >
          {added ? "Remove" : "Add"}
        </button>
      )}
      {isEditing ? (
        <CourseEditor
          courseCode={courseCode}
          courseDetails={courseDetails}
          onCancel={handleCancelClick}
        />
      ) : (
        <CourseCard
          courseCode={courseCode}
          courseDetails={courseDetails}
          handleEditClick={handleEditClick}
        ></CourseCard>
      )}
    </div>
  );
};

export default Course;
