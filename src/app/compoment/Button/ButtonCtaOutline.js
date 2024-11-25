"use client";
import { useState } from "react";
import Image from "next/image";
import "./ButtonCtaOutline.css";

export default function ButtonCtaOutline() {
  const [isHovered, setIsHovered] = useState(false);
  const [showHoverIcon, setShowHoverIcon] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTimeout(() => setShowHoverIcon(true), 400);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowHoverIcon(false);
  };

  return (
    <button
      type="cta"
      className="buttonCtaOutline"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Demander une démo
      <Image
        src={
          showHoverIcon
            ? "arrow/arrow-right-white.svg"
            : "arrow/arrow-right-purple.svg"
        }
        alt="arrow-right-purple"
        width={16}
        height={16}
        style={{ width: "auto", height: "auto" }}
      />
    </button>
  );
}
