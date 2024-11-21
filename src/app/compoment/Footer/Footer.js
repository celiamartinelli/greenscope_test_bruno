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
  { href: "#", text: "Overview" },
  { href: "#", text: "Features" },
  { href: "#", text: "Pricing" },
  { href: "#", text: "Integrations" },
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
    <footer className="footer">
      <div>
        <Image src="/logo.svg" alt="logo" width={332} height={32} />
        <Image
          src="/assets/footer/logo-reward.svg"
          alt="reward"
          width={130}
          height={98}
        />
      </div>
      <div>
        <section>
          <h5>Solutions</h5>
          <ul>
            {solutionsLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h5>Platform</h5>
          <ul>
            {platformLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h5>Company</h5>
          <ul>
            {companyLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div>
        <div>
          <Link href="#">Terms of use</Link>
          <p>and</p>
          <Link href="#">Privacy policy</Link>
        </div>
        <div>
          <ul>
            {socialMediaLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>
                  <Image src={link.src} alt={link.alt} width={20} height={20} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>Copyright © 2024. Greenscope. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
