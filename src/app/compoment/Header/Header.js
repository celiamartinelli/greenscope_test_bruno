import Image from "next/image";
import "./Header.css";
import ButtonCtaOutline from "../Button/ButtonCtaOutline";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo-primary">
          <Image
            className="logo-primary"
            src="/logo.svg"
            alt="logo"
            width={200}
            height={10}
          />
        </div>
        <div className="header-nav">
          <nav className="navbar-container">
            <ul className="navbar-links">
              <li className="link-with-icone">
                <a className="link-navbar" href="#">
                  Solutions
                </a>
                <Image
                  src="/arrow-down.svg"
                  alt="arrow-down"
                  width={10}
                  height={10}
                />
              </li>
              <li className="link-with-icone">
                <a className="link-navbar" href="#">
                  Platform
                </a>
                <Image
                  src="/arrow-down.svg"
                  alt="arrow-down"
                  width={10}
                  height={10}
                />
              </li>
              <li className="link-without-icone">
                <a className="link-navbar" href="#">
                  Resources
                </a>
              </li>
              <li className="link-without-icone">
                <a className="link-navbar" href="#">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <ButtonCtaOutline />
        </div>
      </div>
    </header>
  );
}
