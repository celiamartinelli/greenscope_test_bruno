"use client";
import "./ConversionSection.css";
import ButtonCta from "../../Button/ButtonCta";

export default function ConversionSection() {
  return (
    <section className="conversion">
      <div>
        <h1 className="conversion-title">
          Notre équipe d&apos;experts vous
          <br /> accompagne dans votre <br /> démarche ESG.
        </h1>

        <div className="conversion-block">
          <p className="conversion-text">
            Nos experts vous accompagnent sur toute la verticale ESG/RSE de
            votre fonds d&apos;investissement ou de votre entreprise : 
          </p>
          <div>
            <ButtonCta />
          </div>
        </div>
      </div>
    </section>
  );
}
