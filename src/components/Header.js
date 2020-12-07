import logo from '../images/Vector.svg';

function Header() {
  return (
    <header className="header">
        <a className="header__link" href="#"><img className="header__logo" src={logo} alt="Место Россия"/></a>
    </header>
  )
}

export default Header;