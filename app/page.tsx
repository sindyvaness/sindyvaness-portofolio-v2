import ExternalLinks from "./components/ExternalLinks";
import Hero from "./components/Hero";
import MainSkills from "./components/MainSkills";
import Work from "./components/work/Work";
import ContactForm from "./components/shared/ContactForm";
import Footer from "./components/shared/Footer";
import NavBar from "./components/shared/NavBar/NavBar";
import GradienteBG from "./components/utils/GradienteBG";
import HorizontalBar from "./components/utils/HorizontalBar";

export default function Home() {
  return (
    <main>
      <div className="main-container">
        <div className="content-container">
          <GradienteBG />
          <NavBar />
          <HorizontalBar />
          <div className="hero-container">
            <Hero />
            <MainSkills />
          </div>
          <Work />
          <ContactForm />
          <Footer />
        </div>
        
        <div className="external-links-container">
          <ExternalLinks />
        </div>
      </div>
    </main>
  );
}
