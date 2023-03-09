import Container from "../../UI/Container/Container";
import "./About.scss";
import AboutUs from "./AboutUs/AboutUs";
import CardBlock from "./CardBlock/CardBlock";

const About = () => {
  return (
    <div className="about" id="about">
      <Container>
        <section className="about-section">
          <h2 className="about-title title">Про нас</h2>
          <div className="about-content">
            <CardBlock />
            <AboutUs />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default About;
