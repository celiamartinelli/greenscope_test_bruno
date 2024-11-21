import Image from "next/image";
import "./Footer.css";
import Link from "next/link";

const solutionsLinks = [
  { href: "#", text: "For Enterprises" },
  { href: "#", text: "For Investors" },
  { href: "#", text: "For Banks & Insurers" },
  { href: "#", text: "Become a partner" },
];

const platformLinks = [
  { href: "#", text: "Collecte & Reporting ESG" },
  { href: "#", text: "Bilan Carbone" },
  { href: "#", text: "Conformité CSRD" },
  { href: "#", text: "Analyse de la biodiversité" },
  { href: "#", text: "Analyse des risques et de la double matérialité" },
];

const companyLinks = [
  { href: "#", text: "About Us" },
  { href: "#", text: "Careers" },
  { href: "#", text: "Press" },
  { href: "#", text: "Resources" },
];

const socialMediaLinks = [
  {
    href: "#",
    src: "/assets/footer/social-media/instagram.svg",
    alt: "instagram",
  },
  { href: "#", src: "/assets/footer/social-media/twitter.svg", alt: "twitter" },
  { href: "#", src: "/assets/footer/social-media/youtube.svg", alt: "youtube" },
  {
    href: "#",
    src: "/assets/footer/social-media/linkedin.svg",
    alt: "linkedin",
  },
];

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-logo-primary">
        <Image
          className="logo-primary"
          src="/logo.svg"
          alt="logo"
          width={332}
          height={32}
        />
      </div>
      <Image
        className="footer-logo-reward"
        src="/assets/footer/logo-reward.svg"
        alt="reward"
        width={130}
        height={98}
      />

      <div className="footer-links">
        <section className="links-section1">
          <h5 className="link-title">Solutions</h5>
          <ul className="link-container">
            {solutionsLinks.map((link, index) => (
              <li className="link-subtitle" key={index}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="links-section2">
          <h5 className="link-title">Platform</h5>
          <ul className="link-container">
            {platformLinks.map((link, index) => (
              <li className="link-subtitle" key={index}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="links-section3">
          <h5 className="link-title">Company</h5>
          <ul className="link-container">
            {companyLinks.map((link, index) => (
              <li className="link-subtitle" key={index}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="footer-footer">
        <div className="footer-legal-term">
          <Link className="legal-term" href="#">
            Terms of Use
          </Link>
          <Link className="legal-privacy" href="#">
            {" "}
            and<span className="legal-privacy-span">Privacy policy</span>
          </Link>
        </div>
        <div className="footer-social">
          <ul className="social-media">
            {socialMediaLinks.map((link, index) => (
              <li className="social-media-link" key={index}>
                <Link href={link.href}>
                  <Image src={link.src} alt={link.alt} width={36} height={36} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-copyright">
          <p className="copyright">
            Copyright © 2024. Greenscope. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
