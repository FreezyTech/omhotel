import React from "react";
import {
  Crown,
  User,
  Wifi,
  Coffee,
  Car,
  BedDouble,
  Bath,
  Tv,
  Wind,
  Sparkles,
} from "lucide-react";

const rooms = [
  {
    type: "room",
    title: "Deluxe Room",
    subtitle: "Classic Elegance",
    price: 5000,
    size: "32 m²",
    capacity: "2 Guests",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1400&auto=format&fit=crop",
    icon: Crown,
    badge: null,
    amenities: [BedDouble, Wifi, Coffee, Tv, Bath],
  },
  {
    type: "room",
    title: "Suite Room",
    subtitle: "Ultimate Luxury",
    price: 8000,
    size: "68 m²",
    capacity: "2 Guests",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1400&auto=format&fit=crop",
    icon: Sparkles,
    badge: "Most Popular",
    amenities: [BedDouble, Wifi, Coffee, Car, Bath],
  },
  {
    type: "room",
    title: "Standard Room",
    subtitle: "Smart & Stylish",
    price: 4000,
    size: "24 m²",
    capacity: "1 Guest",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop",
    icon: User,
    badge: "Best Value",
    amenities: [BedDouble, Wifi, Coffee, Tv, Wind],
  },
  {
    type: "photoFrame",
  },
];

export default function RoomsSuites() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0e0000] px-5 py-16 md:px-10 lg:px-14">
      {/* Deep layered background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,#5a0505_0%,#1a0000_55%,#080000_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_90%,rgba(180,110,10,.18)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_10%,rgba(180,110,10,.12)_0%,transparent_70%)]" />

      {/* Animated diagonal shimmer */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg,#d4a520 0px,#d4a520 1px,transparent 1px,transparent 60px)",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Corner ornaments */}
      {["tl", "tr", "bl", "br"].map((pos) => (
        <div
          key={pos}
          className={`absolute h-20 w-20
            ${pos.includes("t") ? "top-0" : "bottom-0"}
            ${pos.includes("l") ? "left-0" : "right-0"}
            ${pos.includes("t") ? "border-t-2" : "border-b-2"}
            ${pos.includes("l") ? "border-l-2" : "border-r-2"}
            border-[#c89322] opacity-60
            ${
              pos === "tl"
                ? "rounded-tl-2xl"
                : pos === "tr"
                ? "rounded-tr-2xl"
                : pos === "bl"
                ? "rounded-bl-2xl"
                : "rounded-br-2xl"
            }
          `}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-[1840px]">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-sans text-[11px] uppercase tracking-[6px] text-[#c89322]">
            ✦ Curated Accommodations ✦
          </p>

          <h1
            className="font-serif text-[44px] font-black uppercase leading-none tracking-[3px] md:text-[66px] lg:text-[82px]"
            style={{
              background:
                "linear-gradient(135deg,#ffe07a 0%,#f4c040 35%,#c8880a 65%,#f0d060 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "none",
              filter: "drop-shadow(0 6px 18px rgba(0,0,0,.9))",
            }}
          >
            Rooms &amp; Suites
          </h1>

          <div className="mx-auto mt-5 flex items-center justify-center gap-4">
            <span className="h-px w-32 bg-gradient-to-r from-transparent to-[#c89322]" />
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#f4c040">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            <span className="h-px w-32 bg-gradient-to-l from-transparent to-[#c89322]" />
          </div>

          <p className="mt-4 font-sans text-sm tracking-[2px] text-[#b08020] uppercase">
            Where Every Stay Becomes a Memory
          </p>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {rooms.map((room, index) => {
            if (room.type === "photoFrame") {
              return <PhotoFrameCard key={index} />;
            }

            const MainIcon = room.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_70px_rgba(0,0,0,.8),0_0_40px_rgba(200,147,34,.25)]"
                style={{
                  background:
                    "linear-gradient(160deg,#3a0a0a 0%,#200000 60%,#0e0000 100%)",
                  border: "1px solid rgba(180,110,10,.35)",
                  boxShadow: "0 20px 50px rgba(0,0,0,.6)",
                }}
              >
                {/* Gold border glow on hover */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ boxShadow: "inset 0 0 0 1.5px #f4c04088" }}
                />

                {/* Badge */}
                {room.badge && (
                  <div className="absolute left-4 top-4 z-20 flex items-center gap-1 rounded-full bg-gradient-to-r from-[#d4a520] to-[#f0c840] px-3 py-1 shadow-lg">
                    <Sparkles size={11} className="text-black" />
                    <span className="text-[10px] font-black uppercase tracking-[1.5px] text-black">
                      {room.badge}
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-[150px] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#200000] via-[#20000066] to-transparent" />

                  <div className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 backdrop-blur-sm">
                    <span className="text-[11px] font-semibold tracking-widest text-[#f4c040]">
                      {room.size}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative px-4 pb-4 pt-7 text-center">
                  {/* Floating icon */}
                  <div
                    className="absolute left-1/2 top-0 flex h-[42px] w-[42px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background:
                        "linear-gradient(135deg,#5a1010 0%,#2a0000 100%)",
                      border: "2px solid #f4c040",
                      boxShadow:
                        "0 0 0 4px rgba(244,192,64,.12), 0 8px 20px rgba(0,0,0,.6)",
                    }}
                  >
                    <MainIcon size={17} className="text-[#f4c040]" />
                  </div>

                  {/* Title */}
                  <p className="mb-0.5 text-[8px] uppercase tracking-[2px] text-[#c89322]">
                    {room.subtitle}
                  </p>

                  <h2
                    className="font-serif text-[16px] font-black uppercase leading-tight tracking-[1px]"
                    style={{
                      background:
                        "linear-gradient(135deg,#ffe07a 0%,#f4c040 50%,#c8880a 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      filter: "drop-shadow(0 2px 6px rgba(0,0,0,.8))",
                    }}
                  >
                    {room.title}
                  </h2>

                  {/* Thin rule */}
                  <div className="mx-auto mt-1.5 flex items-center gap-2">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c89322]" />
                    <span className="text-[#f4c040] text-xs">✦</span>
                    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c89322]" />
                  </div>

                  {/* Price + capacity */}
                  <div className="mt-2 flex items-end justify-center gap-1">
                    <span className="self-start mt-0.5 text-[9px] text-[#c89322]">
                      NPR
                    </span>

                    <span className="font-serif text-[20px] font-black leading-none text-white">
                      {room.price.toLocaleString()}
                    </span>

                    <span className="mb-0.5 self-end text-[10px] text-[#888]">
                      / night
                    </span>
                  </div>

                  <p className="mt-0.5 text-[9px] tracking-widest text-[#a06820] uppercase">
                    {room.capacity}
                  </p>

                  {/* Amenity icons */}
                  <div className="mx-auto mt-2 flex items-center justify-center gap-2">
                    {room.amenities.map((Icon, i) => (
                      <div
                        key={i}
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3a0a0a]"
                        style={{
                          border: "1px solid rgba(200,147,34,.3)",
                        }}
                      >
                        <Icon
                          size={11}
                          className="text-[#f4c040]"
                          strokeWidth={2}
                        />
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    className="mt-3 h-[34px] w-full max-w-[180px] rounded-lg text-[11px] font-black uppercase tracking-[2px] text-black transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                      background:
                        "linear-gradient(135deg,#ffe07a 0%,#f0c030 40%,#c88010 100%)",
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,.4), 0 8px 24px rgba(200,140,10,.4)",
                    }}
                  >
                    Reserve Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom tagline */}
        <p className="mt-12 text-center text-[11px] uppercase tracking-[4px] text-[#6a4010]">
          ✦ &nbsp; Complimentary Breakfast · 24/7 Butler Service · Valet Parking
          &nbsp; ✦
        </p>
      </div>
    </section>
  );
}

function PhotoFrameCard() {
  const photos = [
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=900&auto=format&fit=crop",
  ];

  return (
    <div className="relative min-h-[390px] overflow-visible px-2">
      {/* Top Text */}
      <div className="relative z-50 text-center">
        <p className="text-[9px] uppercase tracking-[4px] text-[#c89322]">
          Luxury Gallery
        </p>

        <h2
          className="mt-1 font-serif text-[22px] font-black uppercase leading-none"
          style={{
            background:
              "linear-gradient(135deg,#ffe07a 0%,#f4c040 45%,#c8880a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 3px 10px rgba(0,0,0,.8))",
          }}
        >
          Hotel Moments
        </h2>

        <p className="mx-auto mt-2 max-w-[220px] text-[10px] leading-relaxed tracking-[1px] text-[#9b7428]">
          A glimpse of comfort, elegance and unforgettable stays.
        </p>
      </div>

      {/* Only soft glow, no card background */}
      <div className="absolute left-1/2 top-[95px] h-[260px] w-[190px] -translate-x-1/2 rounded-full bg-[#f4c040]/10 blur-3xl" />

      {/* Curved glowing line */}
      <svg
        className="absolute left-1/2 top-[88px] h-[310px] w-[145px] -translate-x-1/2"
        viewBox="0 0 145 310"
        fill="none"
      >
        <path
          d="M76 5 C18 58 122 100 62 152 C20 190 120 230 66 305"
          stroke="url(#photoGoldLine)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#photoGlow)"
        />

        <defs>
          <linearGradient id="photoGoldLine" x1="0" y1="0" x2="0" y2="310">
            <stop stopColor="#ffffff" />
            <stop offset="0.45" stopColor="#f4c040" />
            <stop offset="1" stopColor="#ffffff" />
          </linearGradient>

          <filter id="photoGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Photo Frames */}
      <FramePhoto
        src={photos[0]}
        className="absolute left-8 top-[98px] z-40 rotate-[6deg]"
      />

      <FramePhoto
        src={photos[1]}
        className="absolute right-1 top-[148px] z-30 -rotate-[7deg]"
      />

      <FramePhoto
        src={photos[2]}
        className="absolute left-1 top-[198px] z-40 rotate-[6deg]"
      />

      <FramePhoto
        src={photos[3]}
        className="absolute right-8 top-[248px] z-30 -rotate-[5deg]"
      />

      <FramePhoto
        src={photos[4]}
        className="absolute left-10 top-[300px] z-40 rotate-[4deg]"
      />
    </div>
  );
}

function FramePhoto({ src, className }) {
  return (
    <div
      className={`
        ${className}
        h-[78px] w-[118px]
        overflow-hidden
        rounded-[18px]
        border-[4px] border-white
        bg-white
        p-[3px]
        shadow-[0_0_16px_rgba(255,255,255,0.85),0_12px_24px_rgba(0,0,0,0.7)]
        transition-all duration-500
        hover:z-50 hover:scale-110
        sm:h-[88px] sm:w-[132px]
      `}
    >
      <img
        src={src}
        alt="Luxury hotel frame"
        className="h-full w-full rounded-[13px] object-cover"
      />
    </div>
  );
}