import React from "react";

import { Link } from "react-router-dom";
import styles from "./landingpage.module.css";
import Image from "./assets/hero-image.png";

function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div>
          <h1>Online Will and Testament Generator</h1>
          <h1>Create a Professional-looking Will for Free</h1>
          <h2>Free to use. Developed by lawyes and estate managers.</h2>
          <p>
            Perparing a will can be stressful, confusing, and time-consuming if
            you do it all on your own. Will and Testament Generator, it’s quick,
            pain-free, and effective.
          </p>
          <Link to='/personal-details'>Create your will now</Link>
        </div>
        <div>
          <img src={Image} alt='' />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
