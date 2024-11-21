import Image from "next/image";
import "./QuoteSection.css";

export default function QuoteSection() {
  return (
    <section className="quote">
      <h1>+500 companies use Greenscope</h1>
      <div className="section-quote">
        <Image
          src="/assets/quote/person1.png"
          alt="person1"
          width={192}
          height={236}
        />
        <Image
          src="/assets/quote/person2.png"
          alt="person2"
          width={192}
          height={236}
        />
        <Image
          src="/assets/quote/person3.png"
          alt="person3"
          width={192}
          height={236}
        />
        <Image
          src="/assets/quote/person4.png"
          alt="person4"
          width={192}
          height={236}
        />
        <article className="article">
          <p>
            ”La plateforme Greenscope nous a permis de mener une campagne de
            collecte efficace auprès de l’ensemble de nos participations, avec
            le soutien d’une équipe réactive et de qualité. La plateforme est
            intuitive, et les questionnaires sont fluides.”
          </p>
          <div>
            <div>
              <Image
                src="/logo-graphik-white.svg"
                alt="logo-graphik-white"
                width={16}
                height={16}
              />
              <h2>Philippe</h2>
            </div>
            <h3>Chef projet ESG</h3>
          </div>
        </article>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Fermentum nulla in laoreet
          elit lectus id porttitor arcu gravida. Eu elementum convallis enim
          eget vitae fusce. In aenean eget risus tortor.
        </p>
        <div>
          <button type="btn">
            <Image
              src="/arrow-left-dark-green.svg"
              alt="arrow-left-dark-green"
              width={11.2}
              height={8}
            />
          </button>
          <button type="btn">
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
