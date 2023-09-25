import { useDbUpdate } from "../utilities/firebase";
import { useFormData } from "../utilities/useFormData";
import { useNavigate } from "react-router-dom";
import styles from "./CourseEditor.module.css";

const validateUserData = (key, value) => {
  switch (key) {
    case "title":
      return value.length >= 2 ? "" : "Title must be at least two characters.";
    case "meets":
      const meetsPattern =
        /^[A-Za-z]{3,5} (?:[01]\d|2[0-3]):[0-5]\d-[01]\d|2[0-3]:[0-5]\d$/;
      return meetsPattern.test(value)
        ? ""
        : "Meeting time must have a valid format, e.g., 'MWF 12:00-13:20'.";
    default:
      return "";
  }
};

const InputField = ({ name, text, state, change }) => (
  <div>
    <label className={styles.label} htmlFor={name}>{text}</label>
    <input
      id={name}
      name={name}
      defaultValue={state.values?.[name]}
      onChange={change}
      className={styles.input}
    />
    <div>{state.errors?.[name]}</div>
  </div>
);

const ButtonBar = ({ message, disabled, onCancel }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.button}>
      <button type="button" onClick={() => onCancel()} className={styles.cancel}>
        Cancel
      </button>
      <button type="submit" disabled={disabled} className={styles.submit}>
        Submit
      </button>
      <br></br>
      <span className={styles.message}>{message}</span>
    </div>
  );
};

const CourseEditor = ({ courseCode, courseDetails, onCancel }) => {
  const [update, result] = useDbUpdate(`/courses/${courseCode}`);

  const [state, change] = useFormData(validateUserData, courseDetails);

  const submit = (evt) => {
    evt.preventDefault();
    if (!state.errors) {
      update(state.values);
    }
  };

  return (
    <form onSubmit={submit} className={styles.form} noValidate={state.errors ? "novalidate" : null}>
      <InputField name="title" text="Title" state={state} change={change} />
      <InputField name="meets" text="Meets" state={state} change={change} />
      <ButtonBar
        message={result?.message}
        disabled={state.errors}
        onCancel={onCancel}
      />
    </form>
  );
};

export default CourseEditor;
