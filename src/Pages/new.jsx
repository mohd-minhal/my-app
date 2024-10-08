import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import Hero from "../Components/hero";
import Preload from "../Components/preload";
import NavBar from "../Components/navbar";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const scrollerRef = useRef(null);
  const bodyScrollBarRef = useRef(null);

  useEffect(() => {
    const bodyScrollBar = Scrollbar.init(scrollerRef.current, {
      damping: 0.1,
      delegateTo: scrollerRef.current,
    });
    bodyScrollBarRef.current = bodyScrollBar;

    ScrollTrigger.scrollerProxy(scrollerRef.current, {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    const panels = gsap.utils.toArray(".panel");
    const texts = gsap.utils.toArray(".panel-text");

    panels.forEach((panel, i) => {
      const start = `top -${window.innerHeight * i}`;
      const end = `+=${window.innerHeight}`;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "section.black",
          scroller: scrollerRef.current,
          start: start,
          end: end,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        },
      });

      timeline
        .fromTo(
          panel,
          { height: "100%", opacity: 1 },
          { height: 0, opacity: 0, duration: 1, ease: "none" }
        )
        .fromTo(
          texts[i],
          { height: "100%", opacity: 1 },
          { height: 0, opacity: 0, duration: 1, ease: "none" },
          0
        );
    });

    ScrollTrigger.create({
      trigger: "section.black",
      scroller: scrollerRef.current,
      scrub: true,
      markers: false,
      pin: true,
      start: "top top",
      end: `+=${(panels.length - 1) * window.innerHeight}`,
      invalidateOnRefresh: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      if (bodyScrollBarRef.current) {
        bodyScrollBarRef.current.destroy();
        bodyScrollBarRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <NavBar />
      <Hero />
      <div className="scroller h-[100vh]" ref={scrollerRef}>
        <Preload />
        <section className="bg-blue-500 h-[100vh]"></section>
      </div>
    </>
  );
};

export default ScrollAnimation;
