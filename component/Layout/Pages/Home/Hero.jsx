"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";
import Navbar from "../../Navbar/Navbar";

const slides = [
  {
    tag: "EXPERIENCE TIMELESS LUXURY",
    heading: (
      <>
        WHERE COMFORT <br /> MEETS{" "}
        <span className="text-[#d6aa55]">ELEGANCE</span>
      </>
    ),
    desc: "Discover a sanctuary of luxury and serenity. Unwind in exquisite surroundings, indulge in world-class hospitality, and create memories that last a lifetime.",
    bigImg:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1400&auto=format&fit=crop",
    bigAlt: "Luxury room",
    topImg:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=900&auto=format&fit=crop",
    topAlt: "Dining",
    botImg:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900&auto=format&fit=crop",
    botAlt: "Hotel pool",
  },
  {
    tag: "INDULGE IN WORLD-CLASS DINING",
    heading: (
      <>
        SAVOUR EVERY <br /> MOMENT WITH{" "}
        <span className="text-[#d6aa55]">FLAVOUR</span>
      </>
    ),
    desc: "Experience an extraordinary culinary journey crafted by our award-winning chefs. From sunrise breakfasts to candlelit dinners, every meal is a celebration.",
    bigImg:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1400&auto=format&fit=crop",
    bigAlt: "Fine Dining",
    topImg:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=900&auto=format&fit=crop",
    topAlt: "Chef special",
    botImg:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=900&auto=format&fit=crop",
    botAlt: "Dining ambiance",
  },
  {
    tag: "REJUVENATE BODY & SOUL",
    heading: (
      <>
        ESCAPE INTO <br /> PURE{" "}
        <span className="text-[#d6aa55]">SERENITY</span>
      </>
    ),
    desc: "Immerse yourself in our world-class spa and wellness retreats. Let expert therapists guide you to a state of complete relaxation and inner peace.",
    bigImg:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1400&auto=format&fit=crop",
    bigAlt: "Luxury bedroom",
    topImg:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=900&auto=format&fit=crop",
    topAlt: "Fine dining",
    botImg:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900&auto=format&fit=crop",
    botAlt: "Resort pool",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 350);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  const changeSlide = (index) => {
    setFade(false);

    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 350);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/home/hero/bg.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black/90 lg:bg-gradient-to-r lg:from-black/95 lg:via-black/80 lg:to-black/45" />
      <div className="absolute inset-0 bg-black/25" />

      <Navbar />

      <main className="relative z-10 flex min-h-screen items-center px-4 pb-10 pt-24 sm:px-6 sm:pt-28 lg:px-12 lg:pb-16 lg:pt-20 xl:px-16">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-8 xl:gap-12">
          {/* Left Content */}
          <div className="order-2 mx-auto max-w-2xl text-center lg:order-1 lg:mx-0 lg:text-left">
            <div
              className="mb-4 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#d6aa55] transition-opacity duration-500 sm:text-xs md:text-sm lg:justify-start"
              style={{ opacity: fade ? 1 : 0 }}
            >
              <span className="h-[3px] w-7 bg-[#d6aa55] sm:w-9" />
              <span>{slide.tag}</span>
            </div>

            <h1
              className="font-serif text-[30px] font-bold uppercase leading-[1.12] tracking-[0.05em] text-white transition-opacity duration-500 sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[62px]"
              style={{ opacity: fade ? 1 : 0 }}
            >
              {slide.heading}
            </h1>

            <p
              className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/85 transition-opacity duration-500 sm:text-base md:text-[17px] lg:mx-0"
              style={{ opacity: fade ? 1 : 0 }}
            >
              {slide.desc}
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <button className="flex w-full items-center justify-center gap-3 rounded-full bg-[#d6aa55] px-7 py-4 text-xs font-bold uppercase tracking-wide text-white shadow-[0_18px_40px_rgba(214,170,85,0.25)] transition hover:bg-[#c4933f] sm:w-auto sm:text-sm">
                BOOK YOUR STAY
                <ArrowRight size={18} />
              </button>

              <button className="flex w-full items-center justify-center gap-3 text-xs font-bold uppercase tracking-wide text-white sm:w-auto sm:text-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-black/20 backdrop-blur-md">
                  <Play size={16} fill="white" />
                </span>
                WATCH VIDEO
              </button>
            </div>

            {/* Slider Dots */}
            <div className="mt-8 flex justify-center gap-3 lg:justify-start">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => changeSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-10 bg-[#d6aa55]" : "w-2 bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Image Collage */}
          <div className="order-1 mx-auto flex w-full justify-center lg:order-2 lg:justify-end">
            <div className="relative h-[330px] w-full max-w-[360px] sm:h-[420px] sm:max-w-[460px] md:h-[470px] md:max-w-[520px] lg:h-[560px] lg:max-w-[610px] xl:h-[620px]">
              {/* Decorative Golden Circle */}
              <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d6aa55]/25 sm:h-[340px] sm:w-[340px] lg:h-[470px] lg:w-[470px]" />

              {/* Main Big Image */}
              <div
                className="absolute left-1/2 top-10 h-[240px] w-[240px] -translate-x-1/2 overflow-hidden rounded-[28px] border-[4px] border-[#d6aa55] bg-white shadow-2xl transition-opacity duration-500 sm:top-12 sm:h-[315px] sm:w-[315px] sm:rounded-[34px] md:h-[360px] md:w-[360px] lg:left-[90px] lg:top-[70px] lg:h-[430px] lg:w-[365px] lg:translate-x-0 lg:rounded-[38px] xl:left-[100px] xl:h-[465px] xl:w-[405px]"
                style={{ opacity: fade ? 1 : 0 }}
              >
                <img
                  src={slide.bigImg}
                  alt={slide.bigAlt}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Top Small Image */}
              <div
                className="absolute right-3 top-2 z-20 h-[92px] w-[92px] overflow-hidden rounded-[20px] border-[3px] border-white bg-white shadow-2xl transition-opacity duration-500 sm:right-6 sm:top-5 sm:h-[125px] sm:w-[125px] sm:rounded-[24px] md:h-[145px] md:w-[145px] lg:right-2 lg:top-[45px] lg:h-[170px] lg:w-[170px] xl:right-0 xl:h-[185px] xl:w-[185px]"
                style={{ opacity: fade ? 1 : 0 }}
              >
                <img
                  src={slide.topImg}
                  alt={slide.topAlt}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Bottom Small Image */}
              <div
                className="absolute bottom-3 left-3 z-20 h-[92px] w-[92px] overflow-hidden rounded-[20px] border-[3px] border-[#d6aa55] bg-white shadow-2xl transition-opacity duration-500 sm:bottom-5 sm:left-6 sm:h-[125px] sm:w-[125px] sm:rounded-[24px] md:h-[145px] md:w-[145px] lg:bottom-[45px] lg:left-5 lg:h-[170px] lg:w-[170px] xl:h-[185px] xl:w-[185px]"
                style={{ opacity: fade ? 1 : 0 }}
              >
                <img
                  src={slide.botImg}
                  alt={slide.botAlt}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Golden Badge */}
              <div className="absolute bottom-8 right-6 z-30 hidden rounded-2xl border border-[#d6aa55]/50 bg-black/55 px-5 py-4 text-left shadow-2xl backdrop-blur-md sm:block lg:bottom-16 lg:right-8">
                <p className="text-2xl font-bold text-[#d6aa55]">5★</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                  Luxury Stay
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}