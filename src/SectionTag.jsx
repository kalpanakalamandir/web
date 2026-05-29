import styles from "./SectionTag.module.css";

export default function SectionTag({ children, color }) {
  return (
    <span className={styles.tag} style={color ? { color } : undefined}>
      {children}
    </span>
  );
}
