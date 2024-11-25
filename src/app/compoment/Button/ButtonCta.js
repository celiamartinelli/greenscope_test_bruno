"use client";
import { useState } from "react";
import Image from "next/image";
import "./ButtonCta.css";

export default function ButtonCta() {
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
      className="buttonCta"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Get a Demo
      <Image
        src={
          showHoverIcon
            ? "arrow/arrow-right-white.svg"
            : "arrow/arrow-right-purple.svg"
        }
        alt="arrow-rigth-purple"
        width={16}
        height={16}
      />
    </button>
  );
}
