import Image from "next/image";
import "./ConsultantSection.css";

export default function ConsultantSection() {
  return (
    <section className="consultant">
      <div>
        <h1>A solution for everyone</h1>
        <div>
          <button>
            <Image
              src="/arrow-left.svg"
              alt="arrow-left"
              width={11}
              height={8}
            />
          </button>
          <button>
            <Image
              src="/arrow-right.svg"
              alt="arrow-right"
              width={11}
              height={8}
            />
          </button>
        </div>
      </div>
      <div>
        <section>
          <div>
            <Image
              src="/assets/consultants/person1.jpeg"
              alt="consultant"
              width={1017}
              height={679}
            />
          </div>
          <div>
            <div>
              <Image
                src="/logo-graphik.svg"
                alt="logo"
                width={32}
                height={32}
              />
              <h2>For Companies</h2>
            </div>
            <div>
              <p>
                Elevate your ESG strategy to its full potential: measure all
                your impacts, lead CSRD initiatives, assess your risks and shape
                your sustainable strategy
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <Image
              src="/assets/consultants/person2.jpeg"
              alt="consultant"
              width={1593}
              height={874}
            />
          </div>
          <div>
            <div>
              <Image
                src="/logo-graphik.svg"
                alt="logo"
                width={32}
                height={32}
              />
              <h2>For Investors</h2>
            </div>
            <div>
              <p>
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
