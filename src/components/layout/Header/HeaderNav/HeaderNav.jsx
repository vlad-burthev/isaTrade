import { Link } from "react-router-dom";
import "./HeaderNav.scss";

const HeaderNav = () => {
  return (
    <nav className="header-nav">
      <Link href="/" className="header-nav-item">
        Головна
      </Link>
      <Link href="/#about" className="header-nav-item">
        Про нас
      </Link>
      <Link href="/catalog" className="header-nav-item">
        Каталог
      </Link>
      <Link href="#footer" className="header-nav-item">
        Контакти
      </Link>
    </nav>
  );
};

export default HeaderNav;
