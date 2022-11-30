import * as React from 'react';
import styles from "./Skills.module.css";
import github from "../../images/github.svg"
import LineNavigator from '../LineNavigator/LineNavigator';

// export interface ISkillsProps {
// }
// props: ISkillsProps

export default function Skills() {
    return (
        <div className={styles.skillsSection}>
            <div className={styles.skills}>
                <div className={styles.header}>
                    <span>Skill</span>-Set
                </div>
                <div className={styles.skillItems}>
                    <div className={styles.skill}>
                        <img src={github} alt="skill" />
                        <div className={styles.skillTitle}>Git Version Control</div>
                        <div className={styles.note}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                        </div>
                    </div>
                    <div className={styles.skill}>
                        <img src={github} alt="skill" />
                        <div className={styles.skillTitle}>Git Version Control</div>
                        <div className={styles.note}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                        </div>
                    </div>
                    <div className={styles.skill}>
                        <img src={github} alt="skill" />
                        <div className={styles.skillTitle}>Git Version Control</div>
                        <div className={styles.note}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                        </div>
                    </div>
                    <div className={styles.skill}>
                        <img src={github} alt="skill" />
                        <div className={styles.skillTitle}>Git Version Control</div>
                        <div className={styles.note}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                        </div>
                    </div>
                    <div className={styles.skill}>
                        <img src={github} alt="skill" />
                        <div className={styles.skillTitle}>Git Version Control</div>
                        <div className={styles.note}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                        </div>
                    </div>
                    <div className={styles.skill}>
                        <img src={github} alt="skill" />
                        <div className={styles.skillTitle}>Git Version Control</div>
                        <div className={styles.note}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.navigator}>
                <LineNavigator />
            </div>
        </div>
    );
}
