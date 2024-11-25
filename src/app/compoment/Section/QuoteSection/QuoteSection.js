"use client";
import { useState } from "react";
import Image from "next/image";
import "./QuoteSection.css";

const data = [
  {
    imgLogo: "logo/logo-graphik-light-green.svg",
    img: "/assets/quote/person1.png",
    description: "Benjamin - Manager",
    text: `"La plateforme Greenscope 
nous a permis de mener une campagne de collecte efficace auprès de l’ensemble de nos participations, avec le soutien d’une équipe réactive et de qualité. La plateforme est intuitive, et les questionnaires sont fluides.”`,
    className: "quote-article-dark-green",
    classNameFooter: "quote-article-footer-dark-green",
    classNameFooterSubtitle: "quote-article-footer-subtitle-dark-green",
  },
  {
    imgLogo: "logo/logo-graphik-dark-green.svg",
    img: "/assets/quote/person2.png",
    description: "Romain - Manager RH",
    text: `"Greenscope nous a permis de mettre en place un nouveau processus de collecte et d\'analyse des données ESG. Ce processus est plus efficace et plus fiable. 
    Nous sommes très satisfaits de l'outil et apprécions le soutien des experts de Greenscope."`,
    className: "quote-article-medium-green",
    classNameFooter: "quote-article-footer-light-green",
    classNameFooterSubtitle: "quote-article-footer-subtitle-light-green",
  },
  {
    imgLogo: "logo/logo-graphik-light-green.svg",
    img: "/assets/quote/person5.png",
    description: "Philippe - Chef projet ESG",
    text: `"La plateforme Greenscope 
nous a permis de mener une campagne de collecte efficace auprès de l’ensemble de nos participations, avec le soutien d’une équipe réactive et de qualité. La plateforme est intuitive, et les questionnaires sont fluides.”`,
    className: "quote-article-dark-green",
    classNameFooter: "quote-article-footer-dark-green",
    classNameFooterSubtitle: "quote-article-footer-subtitle-dark-green",
  },
  {
    imgLogo: "logo/logo-graphik-dark-green.svg",
    img: "/assets/quote/person3.png",
    description: "Cassandra - Cheffe projet ESG",
    text: `"Greenscope nous a permis de mettre en place un nouveau processus de collecte et d\'analyse des données ESG. Ce processus est plus efficace et plus fiable. 
    Nous sommes très satisfaits de l'outil et apprécions le soutien des experts de Greenscope."`,
    className: "quote-article-light-green",
    classNameFooter: "quote-article-footer-light-green",
    classNameFooterSubtitle: "quote-article-footer-subtitle-light-green",
  },
  {
    imgLogo: "logo/logo-graphik-dark-green.svg",
    img: "/assets/quote/person4.png",
    description: "Rémy - Manager RH",
    text: `"La plateforme Greenscope 
    nous a permis de mener une campagne de collecte efficace auprès de l’ensemble de nos participations, avec le soutien d’une équipe réactive et de qualité. La plateforme est intuitive, et les questionnaires sont fluides.”`,
    className: "quote-article-medium-green",
    classNameFooter: "quote-article-footer-light-green",
    classNameFooterSubtitle: "quote-article-footer-subtitle-light-green",
  },
  {
    imgLogo: "logo/logo-graphik-light-green.svg",
    img: "/assets/quote/person2.png",
    description: "Romain - Manager RH",
    text: `"Greenscope nous a permis de mettre en place un nouveau processus de collecte et d\'analyse des données ESG. Ce processus est plus efficace et plus fiable. 
    Nous sommes très satisfaits de l'outil et apprécions le soutien des experts de Greenscope."`,
    className: "quote-article-dark-green",
    classNameFooter: "quote-article-footer-dark-green",
    classNameFooterSubtitle: "quote-article-footer-subtitle-dark-green",
  },
  {
    imgLogo: "logo/logo-graphik-dark-green.svg",
    img: "/assets/quote/person1.png",
    description: "Benjamin - Manager",
    text: `"La plateforme Greenscope 
nous a permis de mener une campagne de collecte efficace auprès de l’ensemble de nos participations, avec le soutien d’une équipe réactive et de qualité. La plateforme est intuitive, et les questionnaires sont fluides.”`,
    className: "quote-article-light-green",
    classNameFooter: "quote-article-footer-light-green",
    classNameFooterSubtitle: "quote-article-footer-subtitle-light-green",
  },
];

export default function QuoteSection() {
  const [currentSelection, setCurrentSelection] = useState(2);
  const [isHoveredPrev, setIsHoveredPrev] = useState(false);
  const [isHoveredNext, setIsHoveredNext] = useState(false);

  const handleClick = (index) => {
    setCurrentSelection(index);
  };

  return (
    <section className="quote">
      <h2 className="quote-title">+500 companies use Greenscope</h2>
      <div
        className="quote-section"
        style={{
          transform:
            currentSelection === 0
              ? "translateX(5rem)"
              : currentSelection === 6
              ? "translateX(-9rem)"
              : "none",
        }}
      >
        {data.map((item, index) => (
          <div key={index} className="item-container">
            {index === currentSelection ? (
              <article className={item.className}>
                <Image
                  className="quote-vector"
                  src="/assets/quote/vector.svg"
                  alt="quote-vector"
                  width={200}
                  height={14}
                />
                <p className="quote-article-text">{item.text}</p>
                <div className={item.classNameFooter}>
                  <Image
                    className="quote-article-footer-logo"
                    src={item.imgLogo}
                    alt={item.imgLogo}
                    width={16}
                    height={16}
                    style={{ width: "auto", height: "auto" }}
                  />
                  <h4 className="quote-article-footer-title">
                    {item.description.split(" - ")[0]}
                  </h4>
                  <h3 className={item.classNameFooterSubtitle}>
                    {item.description.split(" - ")[1]}
                  </h3>
                </div>
              </article>
            ) : (
              <Image
                className="item"
                src={item.img}
                alt={`person${index + 1}`}
                width={192}
                height={236}
                onClick={() => handleClick(index)}
              />
            )}
          </div>
        ))}
      </div>
      <div>
        <p className="quote-text">
          Lorem ipsum dolor sit amet consectetur. Fermentum nulla in laoreet
          elit lectus id porttitor arcu gravida. Eu elementum convallis enim
          eget vitae fusce. In aenean eget risus tortor.
        </p>
        <div className="quote-carroussel">
          <button
            type="btn"
            className="quote-button"
            onClick={() =>
              setCurrentSelection((prevIndex) =>
                prevIndex === 0 ? data.length - 1 : prevIndex - 1
              )
            }
            onMouseEnter={() => setIsHoveredPrev(true)}
            onMouseLeave={() => setIsHoveredPrev(false)}
          >
            <Image
              src={
                isHoveredPrev
                  ? "arrow/arrow-left.svg"
                  : "arrow/arrow-left-dark-green.svg"
              }
              alt="arrow-left-dark-green"
              width={11.2}
              height={8}
            />
          </button>
          <button
            type="btn"
            className="quote-button"
            onClick={() =>
              setCurrentSelection((prevIndex) =>
                prevIndex === data.length - 1 ? 0 : prevIndex + 1
              )
            }
            onMouseEnter={() => setIsHoveredNext(true)}
            onMouseLeave={() => setIsHoveredNext(false)}
          >
            <Image
              src={
                isHoveredNext
                  ? "arrow/arrow-right.svg"
                  : "arrow/arrow-right-green.svg"
              }
              alt="arrow-right-green"
              width={11.2}
              height={8}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
