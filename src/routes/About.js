import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import PcaHero from "../components/pcaHero";

const About = () => {
  return (
    <div>
      <Navbar />
      <PcaHero
        heading="ABOUT ME"
        text="I am a Full-Stack Developer, Videographer, and Video Editor"
      />
      <Footer />
    </div>
  );
};

export default About;
