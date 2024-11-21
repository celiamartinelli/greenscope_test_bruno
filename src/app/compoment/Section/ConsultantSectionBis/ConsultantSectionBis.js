import Image from "next/image";
import "./ConsultantSectionBis.css";

export default function ConsultantSection() {
  return (
    <section className="consultantbis">
      <h1>Designed with the best technology</h1>
      <div>
        <section>
          <div>
            <Image
              src="/assets/consultantsbis/icon-data.svg"
              alt="icon-data"
              width={48}
              height={48}
            />

            <button type="cta">
              Learn more
              <Image
                src="assets/consultantsbis/arrow-right-dark-green.svg"
                alt="arrow-right-solid"
                width={16}
                height={16}
              />
            </button>
          </div>
          <div>
            <h2>Data integration</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sagittis sed congue semper
              sapien pulvinar. Tellus fames velit leo vel
            </p>
          </div>
        </section>
        <section>
          <div>
            <Image
              src="/assets/consultantsbis/icon-lock.svg"
              alt="icon-lock"
              width={48}
              height={48}
            />

            <button type="cta">
              Learn more
              <Image
                src="assets/consultantsbis/arrow-right-white.svg"
                alt="arrow-right-white"
                width={16}
                height={16}
              />
            </button>
          </div>
          <div>
            <h2>Security</h2>
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
