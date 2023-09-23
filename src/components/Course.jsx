import styles from "./CourseList.module.css";

const Course = ({ courseCode, courseDetails, selected, toggleSelected }) => {
  return (
    <div
      onClick={() => toggleSelected(courseCode, courseDetails)}
      className={`${styles.course} ${
        selected.some((selectedItem) => selectedItem.courseCode === courseCode)
          ? styles.selected
          : ""
      }`}
    >
      <div className={styles.info}>
        <h2>
          {courseDetails.term} CS {courseCode}
        </h2>
        <p>{courseDetails.title}</p>
      </div>
      <div className={styles.meets}>
        <p>{courseDetails.meets}</p>
      </div>
    </div>
  );
};

export default Course;
