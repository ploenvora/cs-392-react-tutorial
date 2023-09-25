import styles from "./CourseList.module.css";

const CourseCard = ({ courseCode, courseDetails, handleEditClick }) => {
  return (
    <div>
      <div className={styles.info}>
        <h2>
          {courseDetails.term} CS {courseCode}
        </h2>
        <p>{courseDetails.title}</p>
      </div>
      <div className={styles.meets}>
        <p>{courseDetails.meets}</p>
      </div>
      <button className={styles.editbutton} onClick={handleEditClick}>Edit</button>
    </div>
  );
};

export default CourseCard;
