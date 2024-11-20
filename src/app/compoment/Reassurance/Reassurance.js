import Image from "next/image";
import "./Reassurance.css";
import Link from "next/link";

const links = [
  { href: "", src: "/assets/reassurance/spendesk.svg", alt: "Spendesk" },
  { href: "", src: "/assets/reassurance/doctolib.svg", alt: "Doctolib" },
  { href: "", src: "/assets/reassurance/slack.svg", alt: "Slack" },
  { href: "", src: "/assets/reassurance/payfit.svg", alt: "PayFit" },
  { href: "", src: "/assets/reassurance/natixis.svg", alt: "Natixis" },
  { href: "", src: "/assets/reassurance/slack.svg", alt: "Slack" },
];

export default function Reassurance() {
  const repeatedLinks = [...links];

  return (
    <section className="reassurance">
      <div className="carousel">
        <div className="carousel__track">
          {repeatedLinks.map((link, index) => (
            <div className="carousel__item" key={index}>
              <Link href={link.href}>
                <Image src={link.src} alt={link.alt} width={100} height={100} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
