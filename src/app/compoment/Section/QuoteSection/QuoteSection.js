"use client";
import { useState } from "react";
import Image from "next/image";
import "./QuoteSection.css";

const data = [
  {
    imgLogo: "/logo-graphik-light-green.svg",
    img: "/assets/quote/person1.png",
    description: "Benjamin - Manager",
    text: `"La plateforme Greenscope 
nous a permis de mener une campagne de collecte efficace auprès de l’ensemble de nos participations, avec le soutien d’une équipe réactive et de qualité. La plateforme est intuitive, et les questionnaires sont fluides.”`,
    className: "quote-article-dark-green",
    classNameFooter: "quote-article-footer-dark-green",
    classNameFooterSubtitle: "quote-article-footer-subtitle-dark-green",
  },
  {
    imgLogo: "/logo-graphik.svg",
    img: "/assets/quote/person2.png",
    description: "Romain - Manager RH",
    text: "”Un outil puissant et simple pour nos évaluations internes.”",
    className: "quote-article-light-green",
    classNameFooter: "quote-article-footer-light-green",
    classNameFooterSubtitle: "quote-article-footer-subtitle-light-green",
  },
  {
    imgLogo: "/logo-graphik-light-green.svg",
    img: "/assets/quote/person5.png",
    description: "Philippe - Chef projet ESG",
    text: `"La plateforme Greenscope 
nous a permis de mener une campagne de collecte efficace auprès de l’ensemble de nos participations, avec le soutien d’une équipe réactive et de qualité. La plateforme est intuitive, et les questionnaires sont fluides.”`,
    className: "quote-article-dark-green",
    classNameFooter: "quote-article-footer-dark-green",
    classNameFooterSubtitle: "quote-article-footer-subtitle-dark-green",
  },
  {
    imgLogo: "/logo-graphik.svg",
    img: "/assets/quote/person3.png",
    description: "Cassandra - Cheffe projet ESG",
    text: `"Greenscope nous a permis de mettre en place un nouveau processus de collecte et d\'analyse des données ESG. Ce processus est plus efficace et plus fiable. 
    Nous sommes très satisfaits de l'outil et apprécions le soutien des experts de Greenscope."`,
    className: "quote-article-light-green",
    classNameFooter: "quote-article-footer-light-green",
    classNameFooterSubtitle: "quote-article-footer-subtitle-light-green",
  },
  {
    imgLogo: "/logo-graphik-light-green.svg",
    img: "/assets/quote/person4.png",
    description: "Rémy - Manager RH",
    text: "”Un outil puissant et simple pour nos évaluations internes.”",
    className: "quote-article-dark-green",
    classNameFooter: "quote-article-footer-dark-green",
    classNameFooterSubtitle: "quote-article-footer-subtitle-dark-green",
  },
  {
    imgLogo: "/logo-graphik.svg",
    img: "/assets/quote/person2.png",
    description: "Romain - Manager RH",
    text: "”Un outil puissant et simple pour nos évaluations internes.”",
    className: "quote-article-light-green",
    classNameFooter: "quote-article-footer-light-green",
    classNameFooterSubtitle: "quote-article-footer-subtitle-light-green",
  },
  {
    imgLogo: "/logo-graphik-light-green.svg",
    img: "/assets/quote/person1.png",
    description: "Benjamin - Manager",
    text: `"La plateforme Greenscope 
nous a permis de mener une campagne de collecte efficace auprès de l’ensemble de nos participations, avec le soutien d’une équipe réactive et de qualité. La plateforme est intuitive, et les questionnaires sont fluides.”`,
    className: "quote-article-dark-green",
    classNameFooter: "quote-article-footer-dark-green",
    classNameFooterSubtitle: "quote-article-footer-subtitle-dark-green",
  },
  {
    imgLogo: "/logo-graphik-light-green.svg",
    img: "/assets/quote/person5.png",
    description: "Philippe - Chef projet ESG",
    text: `"La plateforme Greenscope 
nous a permis de mener une campagne de collecte efficace auprès de l’ensemble de nos participations, avec le soutien d’une équipe réactive et de qualité. La plateforme est intuitive, et les questionnaires sont fluides.”`,
    className: "quote-article-dark-green",
    classNameFooter: "quote-article-footer-dark-green",
    classNameFooterSubtitle: "quote-article-footer-subtitle-dark-green",
  },
  {
    imgLogo: "/logo-graphik.svg",
    img: "/assets/quote/person3.png",
    description: "Cassandra - Cheffe projet ESG",
    text: `"Greenscope nous a permis de mettre en place un nouveau processus de collecte et d\'analyse des données ESG. Ce processus est plus efficace et plus fiable. 
    Nous sommes très satisfaits de l'outil et apprécions le soutien des experts de Greenscope."`,
    className: "quote-article-light-green",
    classNameFooter: "quote-article-footer-light-green",
    classNameFooterSubtitle: "quote-article-footer-subtitle-light-green",
  },
  {
    imgLogo: "/logo-graphik-light-green.svg",
    img: "/assets/quote/person4.png",
    description: "Rémy - Manager RH",
    text: "”Un outil puissant et simple pour nos évaluations internes.”",
    className: "quote-article-dark-green",
    classNameFooter: "quote-article-footer-dark-green",
    classNameFooterSubtitle: "quote-article-footer-subtitle-dark-green",
  },
];

export default function QuoteSection() {
  const [currentSelection, setCurrentSelection] = useState(0);

  const handleClick = (index) => {
    setCurrentSelection(index);
  };
  return (
    <section className="quote">
      <h2 className="quote-title">+500 companies use Greenscope</h2>
      <div className="quote-section">
        {data.map((item, index) => (
          <div
            key={index}
            className={`item-container ${
              index === currentSelection ? "selected" : ""
            }`}
          >
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
          >
            <Image
              src="/arrow-left-dark-green.svg"
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
          >
            <Image
              src="/arrow-right-dark-green.svg"
              alt="arrow-right-dark-green"
              width={11.2}
              height={8}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
