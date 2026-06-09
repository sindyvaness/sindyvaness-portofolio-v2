import Experience from "../components/Experience";
import EducationHero from "./components/EducationHero";
import NavBar from "../components/shared/NavBar/NavBar";
import styles from "./EducationPage.module.css";

type EducationItem = {
    period: string;
    degree: string;
    institution: string;
    summary: string;
};

const educationTimeline: EducationItem[] = [
    {
        period: "2024 - 2025",
        degree: "Azure Solutions Architecture",
        institution: "Microsoft Learn Path",
        summary:
            "Advanced cloud architecture path focused on resilient workloads, security, and cost optimization.",
    },
    {
        period: "2021 - 2023",
        degree: "Specialization in Enterprise Software",
        institution: "Regional Technology Institute",
        summary:
            "Design of distributed systems, API strategy, observability, and delivery pipelines for enterprise teams.",
    },
    {
        period: "2013 - 2018",
        degree: "BSc in Computer Systems Engineering",
        institution: "Universidad Tecnologica",
        summary:
            "Core foundation in algorithms, software engineering, databases, and scalable application development.",
    },
];

const certifications = [
    "Microsoft Certified: Azure Developer",
    "Scrum Fundamentals Certified",
    "Power Platform App Maker",
    "Secure Coding Essentials",
];

const Education = () => {
    return (
        <section className={styles.educationPage}>
            <NavBar />
            <EducationHero />

            <Experience></Experience>

            <div className={styles.contentGrid}>
                <section className={styles.timelinePanel}>
                    <h2>Academic Timeline</h2>

                    <ol className={styles.timelineList}>
                        {educationTimeline.map((item) => (
                            <li key={`${item.period}-${item.degree}`} className={styles.timelineItem}>
                                <span className={styles.dot} aria-hidden="true" />
                                <p className={styles.period}>{item.period}</p>
                                <h3>{item.degree}</h3>
                                <p className={styles.institution}>{item.institution}</p>
                                <p className={styles.summary}>{item.summary}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                <aside className={styles.sidePanel}>
                    <section className={styles.certCard}>
                        <h2>Certifications</h2>
                        <ul>
                            {certifications.map((certification) => (
                                <li key={certification}>{certification}</li>
                            ))}
                        </ul>
                    </section>

                    <section className={styles.focusCard}>
                        <h2>Current Focus</h2>
                        <p>Cloud-native architecture, secure APIs, platform engineering, and high-quality delivery systems.</p>
                    </section>
                </aside>
            </div>
        </section>
    );
};

export default Education;