"use client";
import { useState } from "react";
import Image from "next/image";
import "./SolutionSection.css";

const data = [
  {
    id: 1,
    name: "solution",
    title: "ESG Data Solution",
    tags: ["Mot clé associé", "Mot clé associé"],
    description:
      "Automatically collect data, launch campaigns, establish quality processes, and build an organization that mirrors your own, all within our platform. Benchmark best practices, set scoring rules, and track performance with custom dashboards.",
    imgSrc: "/assets/solutions/group-esg.svg",
    className: "solution-navbar-cta-solution",
    colorBtn: "dark-purple",
    bgGraphik: "black",
  },
  {
    id: 2,
    name: "assessment",
    title: "Carbon Assessment",
    tags: ["Mot clé associé", "Mot clé associé"],
    description:
      "Choose a Carbon module from our options, estimate emissions across Scopes 1, 2, and 3, generate footprint reports, receive recommendations, and build your decarbonization strategy.",
    imgSrc: "/assets/solutions/group-carbon.svg",
    className: "solution-navbar-cta-assessment",
    colorBtn: "light-green",
    bgGraphik: "white",
  },
  {
    id: 3,
    name: "csrd",
    title: "CSRD",
    tags: ["Mot clé associé", "Mot clé associé"],
    description:
      "Leverage our expertise and tools to demystify CSRD and unlock opportunities. Conduct your double materiality assessments, perform gap analyses, collect data, and prepare audit-ready reports.",
    imgSrc: "/assets/solutions/group-crd.svg",
    className: "solution-navbar-cta-csrd",
    colorBtn: "dark-green",
    bgGraphik: "black",
  },
  {
    id: 4,
    name: "impact",
    title: "Impact Analysis & Compliance",
    titleWithBreak: (
      <>
        Impact Analysis <br /> & Compliance
      </>
    ),
    tags: ["Mot clé associé", "Mot clé associé"],
    description:
      "Analyze your biodiversity impact and dependencies, achieve Taxonomy alignment, conduct SFDR and PAI analysis, and stay updated on regulatory news",
    imgSrc: "/assets/solutions/group-impact.svg",
    className: "solution-navbar-cta-impact",
    colorBtn: "white",
    bgGraphik: "white",
  },
];

export default function SolutionSection() {
  const [currentSection, setCurrentSection] = useState(1);

  const handleSectionChange = (id) => {
    setCurrentSection(id);
  };

  const currentData = data.find((item) => item.id === currentSection);

  return (
    <section className="solution">
      <h2 className="solution-title">
        All your ESG journey <br />
        needs in one platform
      </h2>
      <nav>
        <ul className="solution-navbar">
          {data.map((item) => (
            <li
              key={item.id}
              className={`solution-navbar-cta ${item.className}  ${
                currentSection === item.id ? "active" : ""
              }`}
              onClick={() => handleSectionChange(item.id)}
            >
              <button type="cta">{item.title}</button>
            </li>
          ))}
        </ul>
      </nav>

      <section
        className={`solution-section bg-${currentData.name} ${
          currentSection === currentData.id ? "active" : ""
        }`}
      >
        {data
          .filter((item) => item.id === currentSection)
          .map((item) => (
            <div key={item.id}>
              <div className="section-left">
                <div
                  className={`section-left-container ${
                    currentSection === 4 ? "section-left-container-impact" : ""
                  }`}
                >
                  <h3 className="section-left-title">
                    {currentData.titleWithBreak || item.title}
                  </h3>
                  <div className="section-left-container-tag">
                    {item.tags.map((keyword, index) => (
                      <span
                        className={`section-left-tag tag-${currentData.name} `}
                        key={index}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="section-text text-opacity">{item.description}</p>
              </div>

              <div className="section-right">
                <div
                  className={`section-graphik-container bg-${item.bgGraphik}`}
                >
                  <Image
                    className="section-graphik-logo"
                    src={`/logo/logo-graphik-${item.colorBtn}.svg`}
                    alt={item.title}
                    width={32}
                    height={32}
                  />
                  <Image
                    className="section-graphik-thumbnail"
                    src={`assets/solutions/thumbnail-${item.name}.svg`}
                    alt={`thumnail-${item.name}`}
                    width={137}
                    height={68}
                  />
                  <div className="section-graphik-block">
                    <Image
                      className="section-graphik-image"
                      src="/assets/solutions/graphik.svg"
                      alt="graphik"
                      width={493}
                      height={264}
                    />
                  </div>
                </div>
                <button className="solution-btn" type="cta">
                  Learn more
                  <Image
                    src={`arrow/arrow-right-${item.colorBtn}.svg`}
                    alt={`arrow-right-${item.colorBtn}`}
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </div>
          ))}
      </section>
    </section>
  );
}
