import Container from "../../UI/Container/Container";
import "./Partners.scss";
import PartnersCard from "./PartnersCard/PartnersCardList";

const Partners = () => {
  return (
    <div className="partners">
      <Container>
        <section className="partners-section">
          <h2 className="partners-title title">Партнери</h2>
          <PartnersCard />
        </section>
      </Container>
    </div>
  );
};

export default Partners;
