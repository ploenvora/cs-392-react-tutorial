import styles from "./CourseList.module.css";

const CourseList = (props) => {
    return (
        <div className={styles.courses}>
            {Object.entries(props.courses).map(([courseCode, courseDetails]) => (
                <div key={courseCode} className={styles.course}>
                    <div className={styles.info}>
                        <h2>
                            {courseDetails.term} CS {courseCode}
                        </h2>
                        <p>
                            {courseDetails.title}
                        </p>
                    </div>
                    <div className={styles.meets}>
                        <p>
                            {courseDetails.meets}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default CourseList;