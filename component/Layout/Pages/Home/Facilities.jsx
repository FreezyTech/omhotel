"use client";
import { useEffect, useRef, useState } from "react";
import {
  Wifi,
  Utensils,
  Car,
  ConciergeBell,
  Clock,
  ShowerHead,
  Snowflake,
  CalendarCheck,
} from "lucide-react";

const facilities = [
  { title: "FREE WIFI", icon: Wifi, desc: "High-speed internet throughout" },
  { title: "RESTAURANT", icon: Utensils, desc: "Fine dining, world cuisine" },
  { title: "PARKING", icon: Car, desc: "Secure valet & self-parking" },
  { title: "ROOM SERVICE", icon: ConciergeBell, desc: "At your doorstep, anytime" },
  { title: "24/7 RECEPTION", icon: Clock, desc: "Always here to assist you" },
  { title: "HOT & COLD SHOWER", icon: ShowerHead, desc: "Relaxing shower experience" },
  { title: "AIR CONDITIONING", icon: Snowflake, desc: "Perfect climate, every room" },
  { title: "ONLINE BOOKING", icon: CalendarCheck, desc: "Reserve instantly online" },
];

function FacilityCard({ item, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = item.icon;

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.92)",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
      }}
      className="group relative cursor-pointer"
    >
      {/* Glow halo behind card */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#ffd66b]/30 via-[#c99432]/20 to-[#7a0707]/30 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

      {/* Card border shimmer */}
      <div className="relative overflow-hidden rounded-3xl p-[1.5px]"
        style={{
          background: "linear-gradient(135deg, #ffd66b, #c99432, #7a0707, #c99432, #ffd66b)",
          backgroundSize: "300% 300%",
          animation: "shimmerBorder 4s linear infinite",
        }}
      >
        <div className="relative flex min-h-[220px] flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl bg-gradient-to-b from-[#8a0505] via-[#5c0303] to-[#280101] px-4 py-8 text-center">

          {/* Animated sweep shine */}
          <div className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-none group-hover:animate-sweep" />

          {/* Floating particles */}
          <div className="absolute top-3 left-4 h-1 w-1 rounded-full bg-[#ffd66b]/40 animate-float1" />
          <div className="absolute top-8 right-5 h-1.5 w-1.5 rounded-full bg-[#c99432]/50 animate-float2" />
          <div className="absolute bottom-6 left-6 h-1 w-1 rounded-full bg-[#ffd66b]/30 animate-float3" />

          {/* Icon with pulse ring */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-20 w-20 rounded-full border border-[#ffd66b]/30 animate-ping-slow" />
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#e0b85c] bg-gradient-to-br from-[#7a0707] to-[#3a0202] shadow-[0_0_20px_rgba(199,148,50,0.3)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(255,214,107,0.5)]">
              <Icon size={34} strokeWidth={1.6} className="text-[#ffd66b] transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#ffd66b] transition-all duration-300 group-hover:text-white">
            {item.title}
          </h3>

          {/* Description — slides up on hover */}
          <p className="max-h-0 overflow-hidden text-xs text-[#f5c96a]/70 transition-all duration-500 group-hover:max-h-10">
            {item.desc}
          </p>

          {/* Bottom decor */}
          <div className="flex items-center gap-2 pt-1">
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#c99432]" />
            <span className="h-1.5 w-1.5 rotate-45 border border-[#ffd66b]/60" />
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#c99432]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Facilities() {
  const [headingVisible, setHeadingVisible] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeadingVisible(true); },
      { threshold: 0.3 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes shimmerBorder {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pingSlow {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes sweep {
          0% { transform: translateX(-150%) skewX(-12deg); opacity: 1; }
          100% { transform: translateX(250%) skewX(-12deg); opacity: 1; }
        }
        @keyframes bgDrift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float1 { animation: float1 3s ease-in-out infinite; }
        .animate-float2 { animation: float2 4s ease-in-out infinite 0.5s; }
        .animate-float3 { animation: float3 3.5s ease-in-out infinite 1s; }
        .animate-ping-slow { animation: pingSlow 2.5s ease-out infinite; }
        .group:hover .animate-sweep { animation: sweep 0.7s ease forwards; }
      `}</style>

      <section
        className="relative overflow-hidden py-24 px-4"
        style={{
          background: "linear-gradient(135deg, #0a0000, #1a0000, #0d0000, #120000)",
          backgroundSize: "400% 400%",
          animation: "bgDrift 10s ease infinite",
        }}
      >
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#c99432]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#7a0707]/20 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffd66b]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* Heading */}
          <div
            ref={headingRef}
            className="mb-10 text-center"
            style={{
              opacity: headingVisible ? 1 : 0,
              transform: headingVisible ? "translateY(0)" : "translateY(-30px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <p className="mb-1 text-sm font-semibold uppercase tracking-[0.4em] text-[#c99432]">
              ✦ Premium Amenities ✦
            </p>
            <h2 className="font-serif text-5xl font-bold tracking-[0.15em] text-[#ffd66b] md:text-6xl"
              style={{ textShadow: "0 2px 20px rgba(122,7,7,0.15)" }}
            >
              OUR FACILITIES
            </h2>
            <div className="mt-3 flex items-center justify-center gap-4">
              <span className="h-px w-28 bg-gradient-to-r from-transparent via-[#c99432] to-[#c99432]" />
              <span className="text-xl text-[#c99432]" style={{ filter: "drop-shadow(0 0 6px #c99432)" }}>◆</span>
              <span className="h-px w-28 bg-gradient-to-l from-transparent via-[#c99432] to-[#c99432]" />
            </div>
            <p className="mt-2 text-sm text-[#c99432]/70 tracking-wide">
              Everything you need for a perfect stay
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8">
            {facilities.map((item, index) => (
              <FacilityCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
