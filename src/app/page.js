import styles from "./page.module.css";
import Header from "./compoment/Header/Header";
import Footer from "./compoment/Footer/Footer";
import HeroSection from "./compoment/Section/HeroSection/HeroSection";
import ConsultantSection from "./compoment/Section/ConsultantSection/ConsultantSection";
import SolutionSection from "./compoment/Section/SolutionSection/SolutionSection";
import ConsultantSectionBis from "./compoment/Section/ConsultantSectionBis/ConsultantSectionBis";
import QuoteSection from "./compoment/Section/QuoteSection/QuoteSection";
import ConversionSection from "./compoment/Section/ConversionSection/ConversionSection";
import Reassurance from "./compoment/Reassurance/Reassurance";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className="">
        <HeroSection />
        <Reassurance />
        <ConsultantSection />
        <SolutionSection />
        <ConsultantSectionBis />
        <QuoteSection />
        <ConversionSection />
      </main>
      <Footer />
    </div>
  );
}
