import HorizontalBar from "./utils/HorizontalBar";

const MainSkills = () => {
    return (
        <section className="main-skills">
            <h2>Let's create amazing solutions</h2>
            <div className="skills-list">
                <button type="button" className="skill-item">
                    <h3>.NET & CSharp</h3>
                    <p>Building robust backend services, APIs, and enterprise applications.</p>
                </button>

                <button type="button" className="skill-item">
                    <h3>Power Platform</h3>
                    <p>Building robust backend services, APIs, and enterprise applications.</p>
                </button>

                <button type="button" className="skill-item">
                    <h3>Web and Mobile Development</h3>
                    <p>Building robust backend services, APIs, and enterprise applications.</p>
                </button>

                <button type="button" className="skill-item">
                    <h3>DevOps</h3>
                    <p>Building robust backend services, APIs, and enterprise applications.</p>
                </button>

                <button type="button" className="skill-item">
                    <h3>Tools & Best Practices </h3>
                    <p>Building robust backend services, APIs, and enterprise applications.</p>
                </button>
            </div>
        </section>
    );
};

export default MainSkills;