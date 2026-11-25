import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">Лого</div>
      <nav className="header__nav">
        <a href="#about" className="header__link">О нас</a>
        <a href="#how" className="header__link">Как это работает</a>
        <a href="#reviews" className="header__link">Отзывы</a>
        <a href="#contacts" className="header__link">Контакты</a>
      </nav>
    </header>
  );
}

export default Header;