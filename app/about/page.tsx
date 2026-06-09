import Experience from "../components/Experience";
import ExternalLinks from "../components/ExternalLinks";
import Footer from "../components/shared/Footer";
import NavBar from "../components/shared/NavBar/NavBar";
import GradienteBG from "../components/utils/GradienteBG";
import HorizontalBar from "../components/utils/HorizontalBar";
import EducationHero from "../education/components/EducationHero";

const About = () => {
    return (
        <main>
            <div className="main-container">
                <div className="content-container">
                <GradienteBG />
                <NavBar />
                <HorizontalBar />
                <EducationHero />
                <Experience />
                <Footer />
                </div>
                
                <div className="external-links-container">
                <ExternalLinks />
                </div>
            </div>
        </main>
    );  
};
export default About;