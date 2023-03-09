import Container from "../../UI/Container/Container";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <section className="footer-section">
          <div className="footer-content">
            <div className="footer-contact">
              <h3 className="footer-title">Контакти</h3>
              <h4>Для замовлення</h4>
              <a href="tel:+380968508500">+380968508500</a>
              <h4>Для співробітництва</h4>
              <a href="tel:+380938086128">+380938086128</a>
            </div>
            <div className="footer-soclink">
              <h3 className="footer-title">Coц. мережі</h3>
              <a href="https://www.instagram.com/isa_trademark/?next=%2F">
                Instagram
              </a>
              <a href="https://t.me/isatrade77">Telegram</a>
            </div>
            <div className="footer-logo">
              <img src="./img/header/header-logo.png" alt="" />
            </div>
          </div>

          <div className="me">
            <a href="https://t.me/h_rtful">
              Designed & Built by Burtsev Vlad @burthev04@gmail.com
            </a>
          </div>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
