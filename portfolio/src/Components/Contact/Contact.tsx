import * as React from "react";
import styles from "./Contact.module.css";
import LineNavigator from "../LineNavigator/LineNavigator.js";

// export interface IContactProps {
// }
// props: IContactProps

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactForm}>Contact changed</div>
      <div className={styles.navigator}>
        <LineNavigator />
      </div>
    </div>
  );
}
