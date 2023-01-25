import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.scss";
import { Navbar } from "../Components/general/Navbar/Navbar";
import { Hero } from "./Section/Hero/Hero";
import { About } from "./Section/About/About";
import { Review } from "./Section/Reviews/Review";
import { Footer } from "./Section/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Navbar />
        <Hero />
        <About />
        <Review />
        <Footer />
      </main>
    </>
  );
}
