"use client";
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
  return (
    <section className="reassurance">
      <div className="carousel">
        <div className="carousel-track">
          {links.map((link, index) => (
            <div className="carousel-item" key={index}>
              <Link href={link.href}>
                <Image
                  src={link.src}
                  alt={link.alt}
                  width={100}
                  height={100}
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
