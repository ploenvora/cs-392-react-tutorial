import styles from "./CourseList.module.css";
import { useJsonQuery } from "../utilities/fetch";

const CourseList = (props) => {
    const url = "https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php";
    const [ data, isLoading, error ] = useJsonQuery(url)
    return (
        <div className={styles.courses}>
            {Object.entries(data.courses).map(([courseCode, courseDetails]) => (
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