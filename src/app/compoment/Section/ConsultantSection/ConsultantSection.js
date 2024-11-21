"use client";
import { useState } from "react";
import Image from "next/image";
import "./ConsultantSection.css";

export default function ConsultantSection() {
  const [currentSection, setCurrentSection] = useState(1);

  const handleNext = () => {
    setCurrentSection((prevSection) => (prevSection === 1 ? 2 : 1));
  };

  const handlePrev = () => {
    setCurrentSection((prevSection) => (prevSection === 1 ? 2 : 1));
  };

  return (
    <section className="consultant">
      <div className="consultant-container">
        <h2 className="consultant-title">A solution for everyone</h2>
        <div className="consultant-caroussel">
          <button className="consultant-button" onClick={handlePrev}>
            <Image
              src="/arrow-left.svg"
              alt="arrow-left"
              width={19.2}
              height={19.2}
            />
          </button>
          <button className="consultant-button" onClick={handleNext}>
            <Image
              src="/arrow-right.svg"
              alt="arrow-right"
              width={19.2}
              height={19.2}
            />
          </button>
        </div>
      </div>
      <div className="consultant-section">
        <Image
          className="consultant-vector"
          src="/assets/consultants/vector.svg"
          alt="consultant-vector"
          width={394}
          height={16}
        />

        <section
          className={`consultant-section1 ${
            currentSection === 1 ? "active" : "inactive"
          }`}
        >
          <div className="consultant-photo-container">
            <Image
              className="consultant-photo"
              src="/assets/consultants/person1.jpeg"
              alt="consultant"
              width={392}
              height={500}
            />
          </div>
          <div className="consultant-block">
            <div className="consultant-header">
              <Image
                src="/logo-graphik-light-green.svg"
                alt="logo"
                width={32}
                height={32}
              />
              <h3 className="consultant-header-title">For Companies</h3>
            </div>
            <div className="consultant-footer">
              <p className="consultant-text1">
                Elevate your ESG strategy to its full potential: measure all
                your impacts, lead CSRD initiatives, assess your risks and shape
                your sustainable strategy
              </p>
            </div>
          </div>
        </section>
        <section
          className={`consultant-section2 ${
            currentSection === 2 ? "active" : "inactive"
          }`}
        >
          <div>
            <Image
              className="consultant-photo"
              src="/assets/consultants/person2.jpeg"
              alt="consultant"
              width={392}
              height={500}
            />
          </div>
          <div className="consultant-block">
            <div className="consultant-header">
              <Image
                className="consultant-header-logo"
                src="/logo-graphik-light-green.svg"
                alt="logo"
                width={32}
                height={32}
              />
              <h3 className="consultant-header-title">For Investors</h3>
            </div>
            <div className="consultant-footer">
              <p className="consultant-text2">
                Maximize your investments and impact: evaluate ESG risk exposure
                and opportunities, measure impacts & dependancies, develop a
                sustainable strategy and enhance your holdings ESG journey
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
