'use client';

const menuItems = [
  {
    name: 'Seared Wagyu Tenderloin',
    desc: 'Prime cut with truffle jus, roasted bone marrow & micro herbs',
    // price: '$68',
    tag: 'Chef\'s Special',
    img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Lobster Bisque Royale',
    desc: 'Velvety bisque, poached lobster claw, cognac cream & caviar',
    // price: '$42',
    tag: 'Signature',
    img: 'https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Truffle Risotto',
    desc: 'Arborio rice, black truffle shavings, aged parmesan & gold leaf',
    // price: '$38',
    tag: 'Vegetarian',
    img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Pan Seared Sea Bass',
    desc: 'Atlantic sea bass, saffron velouté, fennel confit & citrus oil',
    // price: '$52',
    tag: 'Seasonal',
    img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Duck Confit à l\'Orange',
    desc: 'Slow-cooked duck leg, orange gastrique & dauphinoise potatoes',
    // price: '$48',
    tag: 'Classic',
    img: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Dark Chocolate Fondant',
    desc: 'Valrhona 72% fondant, salted caramel, Madagascar vanilla bean ice cream',
    // price: '$22',
    tag: 'Dessert',
    img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Dining() {
  return (
    <main className="min-h-screen bg-[#1a0e05] text-white">

      {/* HERO */}
      <section
        className="relative h-[620px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="relative z-10 flex h-full items-center px-8 md:px-20">
          <div className="max-w-[560px]">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-[#d8a160]" />
              <p className="text-[11px] tracking-[5px] uppercase text-[#d8a160]">
                Fine Dining Experience
              </p>
            </div>

            <h1 className="font-serif text-[58px] leading-[1.05] font-bold text-white drop-shadow-lg">
              A Symphony of<br />
              <span className="text-[#d8a160]">Taste</span> & Elegance
            </h1>

            <p className="mt-6 text-[14px] leading-7 text-gray-300 max-w-[440px]">
              From hand-selected seasonal ingredients to premium gourmet creations,
              every dish is a masterpiece crafted with passion and artistry.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-full bg-[#d8a160] px-8 py-3.5 text-[13px] font-semibold tracking-wide text-white hover:bg-[#b8872a] transition">
                View Full Menu
              </button>
              <button className="rounded-full border border-white/40 px-8 py-3.5 text-[13px] font-semibold tracking-wide text-white hover:border-[#d8a160] hover:text-[#d8a160] transition">
                Reserve a Table
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          <span className="w-6 h-1.5 rounded-full bg-[#d8a160]" />
          <span className="w-2 h-1.5 rounded-full bg-white/40" />
          <span className="w-2 h-1.5 rounded-full bg-white/40" />
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#d8a160] py-5 text-white">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-8 px-4 text-center font-serif text-[20px] font-bold md:justify-between md:text-[24px]">
          <p>Open 7 Days a Week</p>
          <span className="opacity-60">✦</span>
          <p>Breakfast · Lunch · Dinner</p>
          <span className="opacity-60">✦</span>
          <p>Private Dining Available</p>
          <span className="opacity-60">✦</span>
          <p>Award-Winning Cuisine</p>
        </div>
      </section>

      {/* CHEF SECTION */}
      <section className="mx-auto max-w-[1080px] px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=900&auto=format&fit=crop"
            alt="Chef at work"
            className="w-full h-[460px] object-cover rounded-t-[120px] rounded-br-[120px]"
          />
          <div className="absolute -bottom-6 -right-6 hidden md:flex bg-[#d8a160] text-white rounded-2xl p-5 flex-col items-center shadow-2xl">
            <span className="font-serif text-[38px] font-bold leading-none">15+</span>
            <span className="text-[11px] tracking-widest uppercase mt-1">Years Experience</span>
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-[#d8a160]" />
            <p className="text-[11px] tracking-[5px] uppercase text-[#d8a160]">Meet the Artisan</p>
          </div>

          <h2 className="font-serif text-[40px] leading-tight font-bold text-white">
            Chef's Signature<br />Creations
          </h2>

          <p className="mt-6 text-[14px] leading-7 text-gray-400">
            Our head chef brings 15 years of Michelin-starred experience to every plate.
            Using only the finest locally sourced and imported ingredients, each dish
            tells a story of flavour, texture, and artistry.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {['Seasonal Menu', 'Farm-to-Table', 'Sommelier Curated', 'Live Cooking'].map((feat) => (
              <div key={feat} className="flex items-center gap-2 text-[13px] text-gray-300">
                <span className="text-[#d8a160] text-lg">✦</span>
                {feat}
              </div>
            ))}
          </div>

          <button className="mt-10 rounded-full bg-[#d8a160] px-8 py-3.5 text-[13px] font-semibold text-white hover:bg-[#b8872a] transition">
            Explore Menu
          </button>
        </div>
      </section>

      {/* MENU SHOWCASE */}
      <section className="bg-[#110a03] py-24 px-6">
        <div className="mx-auto max-w-[1080px]">
          <div className="text-center mb-14">
            <div className="mx-auto mb-3 h-[20px] w-[82px] text-[#d8a160]">
              <svg viewBox="0 0 120 25" fill="none">
                <path d="M5 15C25 0 42 27 60 12C78 27 95 0 115 15" stroke="currentColor" strokeWidth="3" />
                <circle cx="60" cy="12" r="3" fill="currentColor" />
              </svg>
            </div>
            <p className="mb-2 text-[13px] tracking-[5px] uppercase text-[#d8a160]">Our Menu</p>
            <h2 className="font-serif text-[42px] font-bold text-white">Culinary Highlights</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-2xl bg-[#1e1208] border border-white/5 hover:border-[#d8a160]/40 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(216,161,96,0.15)]"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#d8a160] text-white text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-[18px] font-bold text-white leading-tight">{item.name}</h3>
                    <span className="text-[#d8a160] font-bold text-[18px] whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-[12px] leading-5 text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DINING EXPERIENCE SPLIT */}
      <section className="mx-auto max-w-[1080px] px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-[#d8a160]" />
            <p className="text-[11px] tracking-[5px] uppercase text-[#d8a160]">The Ambience</p>
          </div>

          <h2 className="font-serif text-[40px] leading-tight font-bold text-white">
            An Unforgettable<br />Culinary Journey
          </h2>

          <p className="mt-6 text-[14px] leading-7 text-gray-400">
            Dine in our candlelit restaurant overlooking serene gardens. Our intimate
            setting, paired with impeccable service and world-class cuisine, creates
            memories that last a lifetime.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { time: 'Breakfast', hours: '7:00 AM – 11:00 AM' },
              { time: 'Lunch', hours: '12:30 PM – 3:00 PM' },
              { time: 'Dinner', hours: '7:00 PM – 11:00 PM' },
            ].map((slot) => (
              <div key={slot.time} className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[14px] text-white font-semibold">{slot.time}</span>
                <span className="text-[13px] text-[#d8a160]">{slot.hours}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=900&auto=format&fit=crop"
            alt="Restaurant ambience"
            className="w-full h-[460px] object-cover rounded-t-[120px] rounded-bl-[120px]"
          />
        </div>
      </section>

      {/* RESERVATION CTA */}
      <section
        className="relative py-28 px-6 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1600&auto=format&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10">
          <div className="mx-auto mb-3 h-[20px] w-[82px] text-[#d8a160]">
            <svg viewBox="0 0 120 25" fill="none">
              <path d="M5 15C25 0 42 27 60 12C78 27 95 0 115 15" stroke="currentColor" strokeWidth="3" />
              <circle cx="60" cy="12" r="3" fill="currentColor" />
            </svg>
          </div>
          <p className="mb-3 text-[12px] tracking-[5px] uppercase text-[#d8a160]">Book Your Table</p>
          <h2 className="mx-auto max-w-[600px] font-serif text-[42px] font-bold leading-tight text-white">
            Reserve Your Perfect Dining Experience
          </h2>
          <p className="mt-4 text-[14px] text-gray-300 max-w-[480px] mx-auto">
            Celebrate special occasions or simply indulge in an extraordinary evening with the finest cuisine.
          </p>
          <button className="mt-10 rounded-full bg-[#d8a160] px-12 py-4 text-[14px] font-semibold text-white shadow-lg hover:bg-[#b8872a] transition">
            Book a Table
          </button>
        </div>
      </section>

    </main>
  );
}
