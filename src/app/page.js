import Image from "next/image";
import styles from "./page.module.css";
import Header from "./compoment/Header/Header";
import Footer from "./compoment/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next.js</h1>
      </main>
      <Footer />
    </div>
  );
}
