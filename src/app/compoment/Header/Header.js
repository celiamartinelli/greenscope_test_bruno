"use client";
import { useState } from "react";
import Image from "next/image";
import "./Header.css";
import ButtonCtaOutline from "../Button/ButtonCtaOutline";

export default function Header() {
  const [isHoveredSolutions, setIsHoveredSolutions] = useState(false);
  const [isHoveredPlatform, setIsHoveredPlatform] = useState(false);
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo-primary">
          <Image
            className="logo-primary-header"
            src="logo/logo.svg"
            alt="logo"
            width={213}
            height={23}
          />
        </div>
        <div className="header-nav">
          <nav className="navbar-container">
            <ul className="navbar-links">
              <li
                className="link-with-icone"
                onMouseEnter={() => setIsHoveredSolutions(true)}
                onMouseLeave={() => setIsHoveredSolutions(false)}
              >
                <a className="link-navbar" href="#">
                  Solutions
                </a>
                <Image
                  src="arrow/arrow-down.svg"
                  alt="arrow-down"
                  width={10}
                  height={10}
                  style={{ width: "auto", height: "auto" }}
                  className={isHoveredSolutions ? "rotate" : ""}
                />
                {isHoveredSolutions && (
                  <div className="dropdown-section">
                    <p>Section content appears here.</p>
                  </div>
                )}
              </li>
              <li
                className="link-with-icone"
                onMouseEnter={() => setIsHoveredPlatform(true)}
                onMouseLeave={() => setIsHoveredPlatform(false)}
              >
                <a className="link-navbar" href="#">
                  Platform
                </a>
                <Image
                  src="arrow/arrow-down.svg"
                  alt="arrow-down"
                  width={10}
                  height={10}
                  className={isHoveredPlatform ? "rotate" : ""}
                  style={{ width: "auto", height: "auto" }}
                />
                {isHoveredPlatform && (
                  <div className="dropdown-section">
                    <p>Section content for Platform appears here.</p>
                  </div>
                )}
              </li>
              <li className="link-without-icone">
                <a className="link-navbar underline" href="#">
                  Resources
                </a>
              </li>
              <li className="link-without-icone">
                <a className="link-navbar underline" href="#">
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
