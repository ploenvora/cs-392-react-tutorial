import styles from "./CourseList.module.css";
import { useJsonQuery } from "../utilities/fetch";
import { useState } from "react";

const FilterDropdown = ({selectedTerm, setSelectedTerm}) => (
    <div className={styles.dropdown}>
      <label>Filter term: </label>
      <select 
          id="termSelect" 
          value={selectedTerm} 
          onChange={e => setSelectedTerm(e.target.value)}
      >
          <option value="Fall">Fall</option>
          <option value="Spring">Spring</option>
          <option value="Winter">Winter</option> {/* Corrected the display text */}
      </select>
    </div>
);

const CourseList = (props) => {
    const [term, setTerm] = useState("Fall");

    const url = "https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php";
    const [ data, isLoading, error ] = useJsonQuery(url);

    return (
        <div>
            <FilterDropdown selectedTerm={term} setSelectedTerm={setTerm} />
            {data && data.courses ? (
                <div className={styles.courses}>
                    {Object.entries(data.courses)
                        .filter(([courseCode, courseDetails]) => courseDetails.term === term)
                        .map(([courseCode, courseDetails]) => (
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
            ) : <p>Loading...</p>}
        </div>
    )
};

export default CourseList;
