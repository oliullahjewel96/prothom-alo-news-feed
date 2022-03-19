import "../styles/header.scss";
import logo from "../images/logo.svg";
const Header = () => {
  return (
    <header className="header-logo">
      <img src={logo} alt="প্রথম আলো" />

      <hr />
    </header>
  );
};

export default Header;
