import Hero from "../Components/hero";
import RotatingTextCircle from "../Components/rotateText";

import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { useEffect } from "react";
import Respo from "../Components/respo";
import NavBar from "../Components/navbar";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  useEffect(() => {
    const panels = document.querySelectorAll('.panel');
    let scrollTween;

    const touchStartHandler = (e) => {
      if (scrollTween) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    };

    document.addEventListener('touchstart', touchStartHandler, { capture: true, passive: false });

    function goToSection(i) {
      scrollTween = gsap.to(window, {
        scrollTo: { y: i * window.innerHeight, autoKill: false },
        duration: 1,
        onComplete: () => (scrollTween = null),
        overwrite: true,
      });
    }

    const triggers = [...panels].map((panel, i) => {
      return ScrollTrigger.create({
        trigger: panel,
        start: 'top bottom',
        end: '+=100%',
        onToggle: (self) => {
          console.log(`Panel ${i} is ${self.isActive ? "active" : "inactive"}`);
          if (self.isActive && !scrollTween) goToSection(i);
        },
      });
    });

    ScrollTrigger.create({
      start: 0,
      end: 'max',
      snap: 1 / (panels.length - 1),
    });

    return () => {
      triggers.forEach(trigger => trigger.kill());
      document.removeEventListener('touchstart', touchStartHandler);
    };
  }, []);

  return (
    <>
      <NavBar />
      <RotatingTextCircle />
      <section className="panel"><Hero /></section>
      {/* <section className="panel"><Projects /></section> */}
      <Respo/>
    </>
  );
}