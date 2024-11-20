import Image from "next/image";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Image src="/logo.svg" alt="logo" width={250} height={25} />
      </div>
      <div className="header__nav">
        <nav className="nav">
          <ul className="nav__ul">
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Platform</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <button type="button" className="header__button">
          Demander une démo
        </button>
      </div>
    </header>
  );
}
