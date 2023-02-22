import Head from "next/head";
import { useEffect, useRef } from "react";
import { Inter } from "@next/font/google";
import { gsap } from "gsap";
const ScrollTrigger = require("gsap/ScrollTrigger");

import styles from "@/styles/Home.module.css";

import Landing from "./components/Landing";
import Summary from "./components/Summary";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let sections = gsap.utils.toArray(".panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + container.current.offsetWidth,
        },
      });
    }, container.current); // <- Scope!

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={`container ${styles.container}`} ref={container}>
          <Header />
          <Landing className={`panel ${styles.landing}`} />
          <Summary className={`panel ${styles.summary}`} />
          <Projects className={`panel ${styles.projects}`} />
          <Contact className={`panel ${styles.contact}`} />
          <Footer />
        </div>
      </main>
    </>
  );
}
