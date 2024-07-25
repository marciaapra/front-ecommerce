import styles from "./name-tag.module.css";

const NameTag = ({ name }: { name: string }) => {
  return <p className={styles["name"]}>{name}</p>;
};

export default NameTag;
