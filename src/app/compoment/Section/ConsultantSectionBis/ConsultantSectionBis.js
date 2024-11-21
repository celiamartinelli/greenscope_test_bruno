import Image from "next/image";
import "./ConsultantSectionBis.css";

export default function ConsultantSection() {
  return (
    <section className="consultantbis">
      <h1 className="consultantbis-title">Designed with the best technology</h1>
      <div className="consultantbis-section">
        <section className="consultantbis-section-data">
          <Image
            className="consultantbis-section-data-icon"
            src="/assets/consultantsbis/icon-data.svg"
            alt="icon-data"
            width={48}
            height={48}
          />

          <button className="consultantbis-section-data-button" type="cta">
            Learn more
            <Image
              src="assets/consultantsbis/arrow-right-dark-green.svg"
              alt="arrow-right-solid"
              width={16}
              height={16}
            />
          </button>

          <h3 className="consultantbis-section-data-title">Data integration</h3>
          <div className="consultantbis-section-data-text">
            <p>
              Lorem ipsum dolor sit amet consectetur. Sagittis sed congue semper
              sapien pulvinar. Tellus fames velit leo vel
            </p>
          </div>
        </section>
        <section className="consultantbis-section-security">
          <Image
            className="consultantbis-section-security-icon"
            src="/assets/consultantsbis/icon-lock.svg"
            alt="icon-lock"
            width={48}
            height={48}
          />

          <button className="consultantbis-section-security-button" type="cta">
            Learn more
            <Image
              src="assets/consultantsbis/arrow-right-white.svg"
              alt="arrow-right-white"
              width={16}
              height={16}
            />
          </button>

          <h3 className="consultantbis-section-security-title">Security</h3>
          <div className="consultantbis-section-security-text">
            <p>
              Lorem ipsum dolor sit amet consectetur. Sagittis sed congue semper
              sapien pulvinar. Tellus fames velit leo vel
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
