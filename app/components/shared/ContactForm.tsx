import styles from "./ContactForm.module.css";

const ContactForm = () => {
    return (
        <section id="contact" className={styles.contactSection} aria-labelledby="contact-title">
            <div className={styles.layout}>
                <div className={styles.copyPanel}>
                    <p className={styles.kicker}>Contact</p>
                    <h2 id="contact-title" className={styles.title}>
                        Build your next product with enterprise-level execution.
                    </h2>
                    <p className={styles.description}>
                        Share your idea, architecture needs, or team goals. I will reply with a clear proposal,
                        timeline, and technical approach.
                    </p>

                    <ul className={styles.highlights}>
                        <li>Architecture and API strategy</li>
                        <li>Delivery roadmap and milestones</li>
                        <li>Security, performance, and maintainability</li>
                    </ul>
                </div>

                <form className={styles.formCard}>
                    <div className={styles.fieldGrid}>
                        <label className={styles.field}>
                            Full name
                            <input type="text" name="name" placeholder="Your name" required />
                        </label>

                        <label className={styles.field}>
                            Work email
                            <input type="email" name="email" placeholder="you@company.com" required />
                        </label>

                        <label className={styles.field}>
                            Company
                            <input type="text" name="company" placeholder="Company name" />
                        </label>

                        <label className={styles.field}>
                            Project type
                            <select name="projectType" defaultValue="">
                                <option value="" disabled>
                                    Select one
                                </option>
                                <option value="new-build">New platform build</option>
                                <option value="modernization">Modernization</option>
                                <option value="integration">System integration</option>
                                <option value="consulting">Technical consulting</option>
                            </select>
                        </label>
                    </div>

                    <label className={`${styles.field} ${styles.fullWidth}`}>
                        Project details
                        <textarea
                            name="message"
                            rows={6}
                            placeholder="Tell me about your goals, constraints, and expected timeline."
                            required
                        />
                    </label>

                    <div className={styles.actions}>
                        <button type="submit" className={styles.submitButton}>
                            Send Project Brief
                        </button>
                        <p className={styles.note}>Typical response time: within 24 hours.</p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;