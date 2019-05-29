import React from "react";
import styles from "../style/NotFound.module.css";

const NotFound = () => {
  return (
    <div id={styles.main}>
      <div className={styles.fof}>
        <h1>Error 404</h1>
      </div>
    </div>
  );
};

export default NotFound;
