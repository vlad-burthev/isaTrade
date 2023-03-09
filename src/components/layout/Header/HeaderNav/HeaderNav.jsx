import "./HeaderNav.scss";

const HeaderNav = () => {
  return (
    <nav className="header-nav">
      <a href="/" className="header-nav-item">
        Головна
      </a>
      <a href="/#about" className="header-nav-item">
        Про нас
      </a>
      <a href="/catalog" className="header-nav-item">
        Каталог
      </a>
      <a href="#footer" className="header-nav-item">
        Контакти
      </a>
    </nav>
  );
};

export default HeaderNav;
