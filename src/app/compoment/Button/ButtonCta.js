import Image from "next/image";
import "./ButtonCta.css";

export default function ButtonCta() {
  return (
    <button type="cta" className="buttonCta">
      Get a Demo
      <Image
        src="arrow/arrow-right-purple.svg"
        alt="arrow-rigth-purple"
        width={16}
        height={16}
      />
    </button>
  );
}
