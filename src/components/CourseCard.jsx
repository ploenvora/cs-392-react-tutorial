import styles from "./CourseList.module.css";
import { useAuthState } from "./../utilities/firebase";

const CourseCard = ({ courseCode, courseDetails, handleEditClick }) => {
  const [user] = useAuthState();
  const isUserAuthenticated = user !== null;
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
      {isUserAuthenticated && (
        <button className={styles.editbutton} onClick={handleEditClick}>
          Edit
        </button>
      )}
    </div>
  );
};

export default CourseCard;
