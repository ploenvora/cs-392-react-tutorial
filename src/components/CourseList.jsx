import styles from "./CourseList.module.css";
import { useJsonQuery } from "../utilities/fetch";
import { haveTimeConflict } from "../utilities/timeConflict";
import { useState, useEffect } from "react";
import { fetchDataFromDatabase } from "../utilities/firebase";
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
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const fetchedData = await fetchDataFromDatabase();
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [term, setTerm] = useState("Fall");
  const [selected, setSelected] = useState([]);
  const [conflicted, setConflicted] = useState([]);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const findConflicts = (selected, courses, haveTimeConflict) => {
    const courseKeys = Object.keys(courses);
    const conflictingCourses = [];
    for (const key of courseKeys) {
      const course1 = {
        courseCode: key,
        courseDetails: courses[key],
      };
      if (
        !selected.some(
          (course2) =>
            course2.courseCode === course1.courseCode &&
            course2.courseDetails === course1.courseDetails
        )
      ) {
        for (const course2 of selected) {
          if (haveTimeConflict(course1, course2)) {
            conflictingCourses.push(course1);
            break;
          }
        }
      }
    }
    setConflicted(conflictingCourses);
  };

  const toggleSelected = (courseCode, courseDetails) => {
    if (selected.some((item) => item.courseCode === courseCode)) {
      setSelected(selected.filter((item) => item.courseCode !== courseCode));
    } else {
      const isConflicted = conflicted.some(
        (item) => item.courseCode === courseCode
      );
      if (!isConflicted) {
        setSelected([
          ...selected,
          { courseCode: courseCode, courseDetails: courseDetails },
        ]);
      }
    }
  };

  useEffect(() => {
    if (data && data.courses) {
      findConflicts(selected, data.courses, haveTimeConflict);
    }
  }, [selected, data]);

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
                conflicted={conflicted}
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
