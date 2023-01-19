import "./HeroImg.css";
import IntroImg from "../assets/intro-bg.jpeg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={IntroImg} alt="Introimg" className="intro-img" />
      </div>
      <div className="content">
        <p>Hi, I'm a Fullstack Developer</p>
        <h1>Banny Walia</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
