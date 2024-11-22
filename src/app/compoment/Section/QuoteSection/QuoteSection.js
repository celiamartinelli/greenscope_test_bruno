import Image from "next/image";
import "./QuoteSection.css";

export default function QuoteSection() {
  return (
    <section className="quote">
      <h2 className="quote-title">+500 companies use Greenscope</h2>
      <div className="section-quote">
        <Image
          className="quote-person"
          src="/assets/quote/person1.png"
          alt="person1"
          width={192}
          height={236}
        />
        <Image
          className="quote-person"
          src="/assets/quote/person2.png"
          alt="person2"
          width={192}
          height={236}
        />
        <Image
          className="quote-person"
          src="/assets/quote/person5.png"
          alt="person3"
          width={192}
          height={236}
        />
        <article className="quote-article">
          <Image
            className="quote-vector"
            src="/assets/quote/vector.svg"
            alt="quote-vector"
            width={200}
            height={14}
          />
          <p className="quote-article-text">
            ”La plateforme Greenscope nous a permis de mener une campagne de
            collecte efficace auprès de l’ensemble de nos participations, avec
            le soutien d’une équipe réactive et de qualité. La plateforme est
            intuitive, et les questionnaires sont fluides.”
          </p>
          <div className="quote-article-footer">
            <Image
              className="quote-article-footer-logo"
              src="/logo-graphik-light-green.svg"
              alt="logo-graphik-light-green"
              width={16}
              height={16}
            />
            <h4 className="quote-article-footer-title">Philippe</h4>
            <h3 className="quote-article-footer-subtitle">Chef projet ESG</h3>
          </div>
        </article>
        <Image
          className="quote-person"
          src="/assets/quote/person3.png"
          alt="person3"
          width={192}
          height={236}
        />

        <Image
          className="quote-person"
          src="/assets/quote/person4.png"
          alt="person4"
          width={192}
          height={236}
        />
        <Image
          className="quote-person"
          src="/assets/quote/person2.png"
          alt="person2"
          width={192}
          height={236}
        />
        <Image
          className="quote-person"
          src="/assets/quote/person1.png"
          alt="person1"
          width={192}
          height={236}
        />
      </div>
      <div>
        <p className="quote-text">
          Lorem ipsum dolor sit amet consectetur. Fermentum nulla in laoreet
          elit lectus id porttitor arcu gravida. Eu elementum convallis enim
          eget vitae fusce. In aenean eget risus tortor.
        </p>
        <div className="quote-carroussel">
          <button type="btn" className="quote-button">
            <Image
              src="/arrow-left-dark-green.svg"
              alt="arrow-left-dark-green"
              width={11.2}
              height={8}
            />
          </button>
          <button type="btn" className="quote-button">
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
