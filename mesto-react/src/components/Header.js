import headerLogo from '../images/header__logo.svg';

function Header() {
  return (
    <header class="header">
          <img src={headerLogo} alt="Логотип" className="header__logo" />
    </header>
  )
}

export default Header;
