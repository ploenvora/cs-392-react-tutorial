import styles from "./CourseList.module.css";
import { useJsonQuery } from "../utilities/fetch";
import { useState } from "react";
import Course from "./Course";
import Modal from "./Modal";

const FilterDropdown = ({ selectedTerm, setSelectedTerm }) => (
  <div className={styles.dropdown}>
    <label>Filter term: </label>
    <select
      id="termSelect"
      value={selectedTerm}
      onChange={(e) => setSelectedTerm(e.target.value)}
    >
      <option value="Fall">Fall</option>
      <option value="Winter">Winter</option>
      <option value="Spring">Spring</option>
    </select>
  </div>
);

const CoursePlanButton = ({ openModal }) => (
  <button onClick={() => openModal()} className={styles.button}>
    Course Plan
  </button>
);

const CourseList = (props) => {
  const url =
    "https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php";
  const [data, isLoading, error] = useJsonQuery(url);

  const [term, setTerm] = useState("Fall");
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const toggleSelected = (courseCode, courseDetails) => {
    if (selected.some((item) => item.courseCode === courseCode)) {
      setSelected(selected.filter((item) => item.courseCode !== courseCode));
    } else {
      setSelected([
        ...selected,
        { courseCode: courseCode, courseDetails: courseDetails },
      ]);
    }
  };


  return (
    <div>
      <div className={styles.topbar}>
        <FilterDropdown selectedTerm={term} setSelectedTerm={setTerm} />
        <CoursePlanButton openModal={openModal} />
        {open && <Modal open={open} close={closeModal} children={selected} />}
      </div>
      {data && data.courses ? (
        <div className={styles.courses}>
          {Object.entries(data.courses)
            .filter(
              ([courseCode, courseDetails]) => courseDetails.term === term
            )
            .map(([courseCode, courseDetails]) => (
              <Course
                key={courseCode}
                courseCode={courseCode}
                courseDetails={courseDetails}
                selected={selected}
                toggleSelected={toggleSelected}
              ></Course>
            ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CourseList;
