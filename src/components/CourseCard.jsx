import styles from "./CourseList.module.css";
import { useAuthState } from "./../utilities/firebase";
import { useProfile } from "./../utilities/profile";

const CourseCard = ({ courseCode, courseDetails, handleEditClick }) => {
  const [profile, profileLoading, profileError] = useProfile();
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
      {profile.isAdmin && (
        <button className={styles.editbutton} onClick={handleEditClick}>
          Edit
        </button>
      )}
    </div>
  );
};

export default CourseCard;
