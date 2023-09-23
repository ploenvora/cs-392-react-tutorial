import styles from "./Banner.module.css";

const Banner = (props) => {
  return <h1 className={styles.title}>{props.title}</h1>;
};

export default Banner;
