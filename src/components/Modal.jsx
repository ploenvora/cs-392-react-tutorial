import styles from "./Modal.module.css";

const Modal = ({ children, open, close }) => (
  <div
    className={`${styles.modal} ${open ? styles.show : ""}`}
    tabIndex="-1"
    role="dialog"
    onClick={(e) => {
      if (e.target === e.currentTarget) close();
    }}
  >
    <div className={styles.dialog} role="document">
      <div className={styles.content}>
        <div className={styles.header}>
          <button
            type="button"
            className={styles.close}
            aria-label="Close"
            onClick={close}
          >
            X
          </button>
        </div>
        <div className={styles.body}>
          {children.length === 0 ? (
            <div className={styles.noCourses}>
              <p>No courses selected.</p>
              <p>Select courses by clicking on them.</p>
            </div>
          ) : (
            children.map((child, index) => (
              <div key={index} className={styles.course}>
                <div className={styles.info}>
                  <h2>
                    {child.courseDetails.term} CS {child.courseCode}
                  </h2>
                  <p>{child.courseDetails.title}</p>
                </div>
                <div className={styles.meets}>
                  <p>{child.courseDetails.meets}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
