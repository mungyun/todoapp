import styles from "./Header.module.css";
import { memo } from "react";

function Header() {
  return (
    <div className={styles.Header}>
      <h3>오늘은 📅</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
}

export default memo(Header);
