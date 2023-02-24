import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import useWindowSize from "./components/useWindowSize";
import { Inter } from "@next/font/google";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import Draggable from "gsap/dist/Draggable";

import styles from "@/styles/Home.module.css";

import Landing from "./components/Landing";
import Summary from "./components/Summary";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ThemeChooser from "./components/ThemeChooser";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [width, setWidth] = useState(769);
  const size = useWindowSize();
  const container = useRef(null);

  useEffect(() => {
    setWidth(size.width);
  }, [size]);

  useEffect(() => {
    setWidth(window.innerWidth);
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, Draggable);
      let sections = gsap.utils.toArray(".panel");

      // Horizontal scroll
      let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
      });

      let horizontalScroll = ScrollTrigger.create({
        animation: scrollTween,
        trigger: container.current,
        pin: true,
        scrub: 1,
        // snap: 1 / (sections.length - 1),
        end: () => "+=" + container.current.offsetWidth,
      });

      /* Navbar link event listeners */
      document.querySelectorAll(".navLink").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          let targetElem = document.querySelector(
              e.target.getAttribute("href")
            ),
            y = targetElem;
          if (
            targetElem &&
            container.current.isSameNode(targetElem.parentElement)
          ) {
            let totalScroll = horizontalScroll.end - horizontalScroll.start,
              totalMovement = (sections.length - 1) * targetElem.offsetWidth;
            y = Math.round(
              horizontalScroll.start +
                (targetElem.offsetLeft / totalMovement) * totalScroll - 1
            );
          }
          gsap.to(window, {
            scrollTo: {
              y: y,
              autoKill: false,
            },
            duration: 1,
          });
        });
      });

      // Enable dragging on mobile devices.
      if (window.innerWidth <= 768) {
        let clamp, dragRatio;
        let drag = Draggable.create(document.querySelector(".proxy"), {
          trigger: container.current,
          type: "x",
          onPress() {
            clamp || ScrollTrigger.refresh();
            this.startScroll = horizontalScroll.scroll();
          },
          onDrag() {
            horizontalScroll.scroll(
              clamp(this.startScroll - (this.x - this.startX) * dragRatio)
            );
            // if you don't want it to lag at all while dragging (due to the 1-second scrub), uncomment the next line:
            horizontalScroll.getTween().progress(1);
          },
        })[0];

        ScrollTrigger.addEventListener("refresh", () => {
          clamp = gsap.utils.clamp(
            horizontalScroll.start + 1,
            horizontalScroll.end - 3
          ); // don't let the drag-scroll hit the very start or end so that it doesn't unpin
          // total scroll amount divided by the total distance that the sections move gives us the ratio we can apply to the pointer movement so that it fits.
          dragRatio =
            container.current.offsetWidth /
            (window.innerWidth * (sections.length - 1));
        });
      }
    }, container.current); // <- Scope!

    return () => ctx.revert();
  }, []);

  const navLinkHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Martin Morales</title>
        <meta name="description" content="Hi. I'm Martin." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main}>
        <div className={`container ${styles.container}`} ref={container}>
          <Header />
          {width > 700 && <ThemeChooser />}
          <Navbar clickHandler={navLinkHandler} />
          <Landing className={`panel ${styles.landing}`} />
          <Summary className={`panel ${styles.summary}`} />
          <Contact className={`panel ${styles.contact}`} />
          <Projects className={`panel ${styles.projects}`} />
          <Footer />
        </div>
        <div className="proxy"></div>
      </main>
    </>
  );
}
