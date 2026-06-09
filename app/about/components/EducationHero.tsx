"use client";

import { useEffect, useState } from "react";
import styles from "./EducationHero.module.css";


const EducationHero = () => {
    const [yearsCount, setYearsCount] = useState(1);

    useEffect(() => {
        const target = 8;
        const durationMs = 500;
        const stepTime = Math.floor(durationMs / target);

        const intervalId = window.setInterval(() => {
            setYearsCount((current) => {
                if (current >= target) {
                    window.clearInterval(intervalId);
                    return target;
                }

                return current + 1;
            });
        }, stepTime);

        return () => window.clearInterval(intervalId);
    }, []);

	return (
		<div className={styles.educationHero}>
            <div className={styles.content}>
                <h2 className={styles.title}>A path of growth for enterprise impact.</h2>
                <p className={styles.description}>
                    Continuous technical growth across cloud, architecture, and delivery practices to ship reliable products.
                </p>

                <div className={styles.quickFacts}>
                    <article>
                        <h2>+{yearsCount}</h2>
                        <p>Years building software solutions</p>
                    </article>
                    <article>
                        <h2>4</h2>
                        <p>Active certifications and learning tracks</p>
                    </article>
                    <article>
                        <h2>3</h2>
                        <p>Major education milestones represented</p>
                    </article>
                </div>
            </div>
			
		</div>
	);
};

export default EducationHero;
