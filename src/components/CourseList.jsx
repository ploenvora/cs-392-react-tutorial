const CourseList = (props) => {
    return (
        <div>
            {Object.entries(props.courses).map(([courseCode, courseDetails]) => (
                <p key={courseCode}>
                    {courseDetails.term} CS {courseCode}: {courseDetails.title}
                </p>
            ))}
        </div>
    )
};

export default CourseList;