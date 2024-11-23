"use client";
import Image from "next/image";
import "./HeroSection.css";
import ButtonCta from "../../Button/ButtonCta";

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <div className="hero-container-photo">
          <video
            className="hero-video"
            src="/assets/hero/video.mp4"
            alt="clip-video"
            width={784}
            height={440}
            controls
            autoPlay
            loop
            muted
          />
          <Image
            className="hero-photo"
            src="/assets/hero/Group.png"
            alt="Stocksy"
            width={592}
            height={441}
          />
        </div>
        <div>
          <h1 className="hero-title">
            Where ESG
            <br />
            can be leveraged
          </h1>
          <Image
            className="hero-logo-graphik"
            src="logo/logo-graphik-dark-green.svg"
            alt="logo-graphik"
            width={64}
            height={64}
          />
          <a className="hero-link" href="#">
            +500 companies use Greenscope
          </a>
          <div className="hero-cta">
            <ButtonCta />
          </div>
        </div>
      </div>
    </section>
  );
}
