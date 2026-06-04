import ExternalLinks from "./components/ExternalLinks";
import Hero from "./components/Hero";
import MainSkills from "./components/MainSkills";
import ProjectsPage from "./components/projects/page";
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
          <Hero />
          <MainSkills />
          <MainSkills />
          <MainSkills />
          <MainSkills />
          <MainSkills />
          <MainSkills />
          <Footer />
        </div>
        
        <div className="external-links-container">
          <ExternalLinks />
        </div>
      </div>
    </main>
  );
}
