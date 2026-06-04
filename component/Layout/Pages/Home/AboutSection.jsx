"use client";
import Image from "next/image";
import { useState } from "react";

const TABS = ["Our Story", "Our Vision", "Our Promise"];

const TAB_CONTENT = {
  "Our Story":
    "Born from a dream to redefine hospitality, OM Hotel has stood as a symbol of grace and warmth since its founding. Every corridor, every room, every meal carries the soul of our heritage.",
  "Our Vision":
    "We envision a sanctuary where luxury meets mindfulness. A place where guests don't just stay — they restore, reconnect, and leave transformed.",
  "Our Promise":
    "From the moment you arrive to the moment you depart, every detail is crafted with intention. Your comfort is not our job — it is our devotion.",
};

const STATS = [
  { value: "25+", label: "Suites & Rooms", symbol: "❖" },
  { value: "15", label: "Years of Legacy", symbol: "❖" },
  { value: "4.9", label: "Guest Rating", symbol: "❖" },
  { value: "24/7", label: "Concierge Care", symbol: "❖" },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("Our Story");

  return (
    <section className="relative w-full overflow-hidden bg-[#1a0000] font-sans">
      {/* ── MAIN SPLIT LAYOUT ── */}
      <div className="flex min-h-screen flex-col lg:flex-row">

        {/* ════ LEFT PANEL ════ */}
        <div className="relative flex w-full flex-col justify-center overflow-hidden bg-[#1a0000] px-10 py-16 lg:w-[52%] lg:px-16 lg:py-0">

          {/* Large faint watermark OM */}
          <div className="pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 select-none text-[340px] font-bold leading-none text-white/[0.025]">
            ॐ
          </div>

          {/* Vertical rule */}
          <div className="absolute right-0 top-[10%] hidden h-[80%] w-[1px] bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent lg:block" />

          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-3">
            <span className="h-[1px] w-10 bg-[#d4af37]" />
            <span className="text-xs font-semibold uppercase tracking-[6px] text-[#d4af37]">
              Est. 2009 · Rajasthan, India
            </span>
          </div>

          {/* Headline stack */}
          <div className="mb-10 space-y-1">
            <p className="font-serif text-[15px] font-light italic text-white/50">
              The art of
            </p>
            <h2 className="font-serif text-[64px] font-bold leading-[1.05] text-white lg:text-[72px]">
              Timeless
              <br />
              <span className="text-[#d4af37]">Luxury.</span>
            </h2>
            <p className="font-serif text-[15px] font-light italic text-white/50">
              — redefined for you.
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-6 flex gap-0 border-b border-white/10">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-3 pr-6 text-[13px] font-semibold uppercase tracking-widest transition-colors duration-200 ${
                  activeTab === tab ? "text-[#d4af37]" : "text-white/30 hover:text-white/60"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#d4af37]" />
                )}
              </button>
            ))}
          </div>

          {/* Tab body */}
          <p className="mb-10 max-w-[480px] text-[17px] leading-[1.8] text-white/65">
            {TAB_CONTENT[activeTab]}
          </p>

          {/* CTA row */}
          <div className="flex items-center gap-6">
            <button className="group flex items-center gap-4 rounded-full bg-[#d4af37] px-8 py-4 text-[14px] font-bold uppercase tracking-[3px] text-[#1a0000] shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all duration-300 hover:bg-[#e8c84a] hover:shadow-[0_0_50px_rgba(212,175,55,0.55)]">
              Explore Hotel
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1a0000]/20 text-sm transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
            <button className="text-[13px] font-semibold uppercase tracking-[3px] text-white/40 underline underline-offset-4 transition-colors hover:text-white/70">
              View Gallery
            </button>
          </div>

          {/* Stats row */}
          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-10 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-serif text-[36px] font-bold text-[#d4af37]">
                  {s.value}
                </span>
                <span className="mt-1 text-[12px] uppercase tracking-[2px] text-white/40">
                  {s.label}
                </span>
                <span className="mt-2 text-[10px] text-[#d4af37]/40">{s.symbol}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ════ RIGHT PANEL ════ */}
        <div className="relative w-full overflow-hidden lg:w-[48%]">

          {/* Full-bleed image */}
          <div className="relative h-[60vh] w-full lg:h-full">
            <Image
              src="/images/home/hero/bg.jpg"
              alt="OM Hotel"
              fill
              priority
              className="object-cover"
            />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a0000]/85 via-[#1a0000]/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0000] via-transparent to-transparent" />

            {/* Floating OM badge */}
            <div className="absolute left-8 top-8 flex flex-col items-center gap-1">
              <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border border-[#d4af37]/60 bg-[#1a0000]/70 text-4xl text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.3)] backdrop-blur-sm">
                ॐ
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[4px] text-[#d4af37]/80">
                Om Hotel
              </span>
            </div>

            {/* Floating review card */}
            <div className="absolute bottom-10 right-8 w-[200px] overflow-hidden rounded-2xl border border-[#d4af37]/20 bg-[#1a0000]/85 p-5 shadow-2xl backdrop-blur-md">
              <div className="flex gap-[3px] text-[#d4af37]">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="text-sm">{s}</span>
                ))}
              </div>
              <p className="mt-3 text-[13px] italic leading-snug text-white/70">
                "An experience unlike any other — pure serenity."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-[#d4af37]/20 text-center text-[11px] leading-7 text-[#d4af37]">
                  A
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white/80">Arjun M.</p>
                  <p className="text-[10px] text-white/30">Verified Guest</p>
                </div>
              </div>
            </div>

            {/* Vertical label */}
            <div className="absolute right-5 top-1/2 -translate-y-1/2 rotate-90 text-[10px] uppercase tracking-[6px] text-white/20 select-none">
              Luxury · Heritage · Peace
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM STRIP ── */}
      <div className="relative border-t border-white/5 bg-[#130000]">
        {/* Gold top rule */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />

        <div className="flex items-stretch overflow-x-auto">
          {[
            { icon: "🛏️", title: "Luxury Suites", desc: "Handcrafted interiors with heritage touches." },
            { icon: "🍽️", title: "Fine Dining", desc: "Authentic flavours, modern elegance." },
            { icon: "🧘", title: "Wellness Spa", desc: "Ayurvedic therapies for mind & body." },
            { icon: "🎪", title: "Event Spaces", desc: "Intimate halls for every occasion." },
          ].map((item, i) => (
            <div
              key={i}
              className="group flex min-w-[220px] flex-1 flex-col gap-3 border-r border-white/5 px-8 py-8 transition-colors duration-300 last:border-r-0 hover:bg-white/[0.03]"
            >
              <span className="text-3xl">{item.icon}</span>
              <h5 className="text-[15px] font-bold uppercase tracking-[2px] text-white/80 transition-colors group-hover:text-[#d4af37]">
                {item.title}
              </h5>
              <p className="text-[13px] leading-relaxed text-white/35">{item.desc}</p>
              <span className="mt-auto text-[11px] font-semibold uppercase tracking-widest text-[#d4af37]/50 transition-all duration-200 group-hover:text-[#d4af37]">
                Learn More →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
