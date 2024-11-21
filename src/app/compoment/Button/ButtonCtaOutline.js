import Image from "next/image";
import "./ButtonCtaOutline.css";

export default function ButtonCtaOutline() {
  return (
    <button type="cta" className="buttonCtaOutline">
      Demander une démo
      <Image
        src="/arrow-right-purple.svg"
        alt="arrow-rigth-purple"
        width={16}
        height={16}
      />
    </button>
  );
}
