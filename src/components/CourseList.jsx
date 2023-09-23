import styles from "./CourseList.module.css";
import { useJsonQuery } from "../utilities/fetch";
import { useState } from "react";
import Course from "./Course";

const FilterDropdown = ({selectedTerm, setSelectedTerm}) => (
    <div className={styles.dropdown}>
      <label>Filter term: </label>
      <select 
          id="termSelect" 
          value={selectedTerm} 
          onChange={e => setSelectedTerm(e.target.value)}
      >
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
      </select>
    </div>
);

const CourseList = (props) => {
    const url = "https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php";
    const [ data, isLoading, error ] = useJsonQuery(url);

    const [term, setTerm] = useState("Fall");
    const [selected, setSelected] = useState([]);

    const toggleSelected = (item) => setSelected(
        selected.includes(item)
        ? selected.filter(x => x !== item)
        : [...selected, item]
    );

    console.log(selected)

    return (
        <div>
            <FilterDropdown selectedTerm={term} setSelectedTerm={setTerm} />
            {data && data.courses ? (
                <div className={styles.courses}>
                    {Object.entries(data.courses)
                        .filter(([courseCode, courseDetails]) => courseDetails.term === term)
                        .map(([courseCode, courseDetails]) => (
                        <Course key={courseCode} courseCode={courseCode} courseDetails={courseDetails} selected={selected} toggleSelected={toggleSelected}></Course>
                    ))}
                </div>
            ) : <p>Loading...</p>}
        </div>
    )
};

export default CourseList;
