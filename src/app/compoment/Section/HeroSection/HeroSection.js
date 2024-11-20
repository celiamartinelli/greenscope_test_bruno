import Image from "next/image";
import "./HeroSection.css";

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <div>
          <Image
            src="/assets/hero/Stocksy.png"
            alt="Stocksy"
            width={594}
            height={440}
          />
          <Image
            src="/assets/hero/Group.png"
            alt="Stocksy"
            width={594}
            height={440}
          />
        </div>
        <div>
          <h2>Where ESG can be leveraged</h2>
          <Image
            src="/logo-graphik.svg"
            alt="logo-graphic"
            width={64}
            height={64}
          />
          <div>
            <a href="#">+500 companies use Greenscope</a>
            <button type="cta">Get a demo</button>
          </div>
        </div>
      </div>
    </section>
  );
}
