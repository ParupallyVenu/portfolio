import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/boy.png")}
          alt="boy icon"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>About me</h3>
              <p>
                I'm currently pursuing my B.Tech final year in Computer Science Engineering at KL University
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Details</h3>
              <pre>
                Name : PARUPALLY VENU
                <br/>
                Age : 20
                <br/>
                Gender : MALE 
                <br/>
                Phone : 8074137258
                <br/>
                Email : 2100030403cseh@gmail.com 
                <br/>
                Country : India
              </pre>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>My Goal</h3>
              <p>
              My objective is to succeed as a software engineer with a focus on cloud computing and web development. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
