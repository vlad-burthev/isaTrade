import Container from "../../UI/Container/Container";
import "./Header.scss";
import HeaderNav from "./HeaderNav/HeaderNav";

const Header = ({ showModal }) => {
  return (
    <header className="header">
      <Container>
        <div className="header-content">
          <a href="/" className="header-logo">
            <img src="./img/header/header-logo.png" alt="logo" />
            <span className="header-logo-name">ISATRADE</span>
          </a>

          <HeaderNav />

          <button onClick={() => showModal(true)} className="header-btn">
            Консультація
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
