import React from "react";
import styles from "./download.module.css";
import image from "./assets/Last-will-and-testament.jpg";

function Download() {
  return (
    <div className={styles.container}>
      <div className={`${styles.hero} ${styles.download}`}>
        <h1>Your download will begin shortly</h1>
        <img src={image} alt='' className={`${styles.downloadimage}`} />
      </div>
    </div>
  );
}

export default Download;
