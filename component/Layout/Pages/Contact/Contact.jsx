"use client";

import Image from "next/image";
import { Map, Phone, Mail, Clock3, Star, Wifi, Car, Coffee, UtensilsCrossed, Waves } from "lucide-react";

const Instagram = ({ size = 16, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const Facebook = ({ size = 16, fill, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const Twitter = ({ size = 16, fill, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.7 5.5 4.4 9 4.5-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.7z" />
  </svg>
);

const inputCls = "w-full h-14 bg-white/5 border border-white/10 px-5 text-sm outline-none text-white placeholder:text-white/25 rounded-lg focus:border-[#d99a58] transition-all duration-300";

const InfoCard = ({ icon: Icon, label, children }) => (
  <div className="flex gap-4 items-start p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#d99a58]/50 hover:bg-white/[0.07] transition-all duration-300 group">
    <div className="p-2.5 rounded-lg bg-[#d99a58]/15 group-hover:bg-[#d99a58]/30 transition-colors shrink-0">
      <Icon className="text-[#d99a58]" size={18} strokeWidth={1.6} />
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-[3px] text-[#d99a58]/70 font-bold mb-1">{label}</p>
      <p className="text-sm text-[#d8d0cb] leading-6">{children}</p>
    </div>
  </div>
);

const SocialBtn = ({ children }) => (
  <button className="p-3 rounded-full bg-white/5 border border-white/10 text-[#d99a58] hover:bg-[#d99a58] hover:text-[#1a0f08] hover:border-[#d99a58] transition-all duration-300">
    {children}
  </button>
);

const Amenity = ({ icon: Icon, label }) => (
  <div className="flex flex-col items-center gap-3 group">
    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#d99a58]/50 group-hover:bg-[#d99a58]/10 transition-all duration-300">
      <Icon className="text-[#d99a58]" size={20} strokeWidth={1.5} />
    </div>
    <p className="text-[10px] uppercase tracking-[3px] text-white/50 font-bold">{label}</p>
  </div>
);

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#1a0a0a] text-white overflow-hidden">
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
        .float { animation: float 6s ease-in-out infinite; }
        .float-d { animation: float 6s ease-in-out infinite 2.5s; }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative h-[560px] flex items-center justify-center overflow-hidden">
        <Image src="/images/home/hero/bg.jpg" alt="Om Hotel" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a0a]/60 via-[#1a0a0a]/50 to-[#1a0a0a]" />
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "linear-gradient(#d99a58 1px,transparent 1px),linear-gradient(90deg,#d99a58 1px,transparent 1px)", backgroundSize: "80px 80px" }} />

        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d99a58]" />
            <p className="text-[#d99a58] text-[11px] tracking-[6px] uppercase font-bold">Om Hotel · Bali</p>
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d99a58]" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-[6px] bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent leading-none mb-5">
            Contact Us
          </h1>
          <p className="text-white/40 text-sm tracking-[4px] uppercase">We'd love to hear from you</p>

          {/* star rating */}
          <div className="flex items-center justify-center gap-1 mt-6">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-[#d99a58] fill-[#d99a58]" />)}
            <span className="text-white/30 text-xs ml-2 tracking-widest">5-Star Luxury Hotel</span>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="bg-[#d99a58] py-5">
        <div className="max-w-[1250px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-[#1a0a0a]">
          {[["48+", "Luxury Rooms"], ["12+", "Years of Service"], ["4.9★", "Guest Rating"], ["24/7", "Concierge"]].map(([num, label]) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-black">{num}</p>
              <p className="text-[10px] uppercase tracking-[3px] font-bold opacity-70">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CONTACT + FORM ── */}
      <section className="relative px-6 md:px-16 lg:px-24 py-20 bg-[#1a0a0a]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#d99a58]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1250px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* LEFT */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-[1px] bg-[#d99a58]" />
              <p className="text-[#d99a58] text-[11px] tracking-[5px] uppercase font-bold">Keep Close</p>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-5 leading-tight">
              Get In <span className="text-[#d99a58]">Touch</span>
            </h2>
            <p className="text-white/40 text-sm leading-7 mb-10">
              We are always ready to welcome you. Reach out for reservations, private events, or any questions — our concierge team is here around the clock.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              <InfoCard icon={Map} label="Address">Om Hotel, Jl. Raya<br />Canggu, Badung, Bali.</InfoCard>
              <InfoCard icon={Phone} label="Phone">(+62) 81 224 557 900<br />(+62) 82 222 577 912</InfoCard>
              <InfoCard icon={Mail} label="Email">reservation@omhotel.com<br />bookings@omhotel.com</InfoCard>
              <InfoCard icon={Clock3} label="Hours">Check-in: 2:00 PM<br />Check-out: 12:00 PM</InfoCard>
            </div>

            {/* photo strip */}
            <div className="grid grid-cols-3 gap-2 mb-10 rounded-xl overflow-hidden">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="relative h-28 overflow-hidden group">
                  <Image src="/images/home/hero/bg.jpg" alt="Om Hotel" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#1a0a0a]/30 group-hover:bg-[#1a0a0a]/10 transition-all duration-300" />
                </div>
              ))}
            </div>

            <div className="border-t border-white/8 pt-7 mt-auto">
              <p className="text-[10px] tracking-[5px] uppercase font-bold text-white/40 mb-5">Follow Us</p>
              <div className="flex gap-3">
                <SocialBtn><Facebook size={15} fill="currentColor" /></SocialBtn>
                <SocialBtn><Instagram size={15} /></SocialBtn>
                <SocialBtn><Twitter size={15} fill="currentColor" /></SocialBtn>
                <SocialBtn><span className="text-xs font-bold leading-none">in</span></SocialBtn>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-[#d99a58]/20 via-transparent to-[#d99a58]/10 rounded-2xl blur-xl pointer-events-none" />
            <div className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-10">
              <h2 className="text-4xl md:text-5xl font-black mb-2">Your <span className="text-[#d99a58]">Details</span></h2>
              <p className="text-white/35 text-sm mb-8">Let us know how to get back to you.</p>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[5px] font-bold text-white/40 mb-2">Name <span className="text-[#d99a58]">*</span></label>
                    <input type="text" placeholder="John Doe" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[5px] font-bold text-white/40 mb-2">Email <span className="text-[#d99a58]">*</span></label>
                    <input type="email" placeholder="email@example.com" className={inputCls} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[5px] font-bold text-white/40 mb-2">Phone</label>
                    <input type="tel" placeholder="+62 000 0000" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[5px] font-bold text-white/40 mb-2">Subject <span className="text-[#d99a58]">*</span></label>
                    <input type="text" placeholder="How can we help?" className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[5px] font-bold text-white/40 mb-2">Check-in / Check-out</label>
                  <div className="grid grid-cols-2 gap-5">
                    <input type="date" className={inputCls + " text-white/40"} />
                    <input type="date" className={inputCls + " text-white/40"} />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[5px] font-bold text-white/40 mb-2">Message <span className="text-[#d99a58]">*</span></label>
                  <textarea placeholder="Write your message here..." rows="4"
                    className="w-full bg-white/5 border border-white/10 px-5 py-4 text-sm outline-none text-white placeholder:text-white/25 rounded-lg focus:border-[#d99a58] transition-all duration-300 resize-none" />
                </div>
                <button type="button"
                  className="group relative w-full h-14 bg-[#d99a58] hover:bg-[#c88745] transition-all duration-300 text-[#1a0f08] text-[11px] uppercase tracking-[4px] font-black rounded-lg overflow-hidden">
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c88745] to-[#e8aa68] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>

              {/* trust badges */}
              <div className="flex items-center justify-center gap-6 mt-8 pt-7 border-t border-white/8">
                {["🔒 Secure", "✓ Instant Reply", "★ 5-Star Service"].map(t => (
                  <p key={t} className="text-[10px] text-white/30 tracking-widest uppercase">{t}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AMENITIES STRIP ── */}
      <section className="px-6 md:px-16 lg:px-24 py-12 bg-[#0f0404] border-y border-white/5">
        <div className="max-w-[1250px] mx-auto">
          <p className="text-center text-[10px] uppercase tracking-[6px] text-[#d99a58]/60 font-bold mb-10">What We Offer</p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            <Amenity icon={Wifi} label="Free Wi-Fi" />
            <Amenity icon={Car} label="Valet Parking" />
            <Amenity icon={Coffee} label="Breakfast" />
            <Amenity icon={UtensilsCrossed} label="Restaurant" />
            <Amenity icon={Waves} label="Pool & Spa" />
            <Amenity icon={Star} label="Concierge" />
          </div>
        </div>
      </section>

      {/* ── MAP + LOCATION INFO ── */}
      <section className="px-6 md:px-16 lg:px-24 py-20 bg-[#1a0a0a]">
        <div className="max-w-[1250px] mx-auto">
          <div className="flex items-center gap-4 mb-3">
            <span className="w-10 h-[1px] bg-[#d99a58]" />
            <p className="text-[#d99a58] text-[11px] tracking-[5px] uppercase font-bold">Find Us</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-10">
            Our <span className="text-[#d99a58]">Location</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* map embed */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-white/10 h-[420px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15769.936553018986!2d115.1282!3d-8.6478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2470f8d4f4a1f%3A0x1234567890abcdef!2sCanggu%2C%20Badung%2C%20Bali!5e0!3m2!1sen!2sid!4v1700000000000"
                width="100%" height="100%" style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.7)" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Om Hotel Location"
              />
            </div>

            {/* location details */}
            <div className="flex flex-col gap-4">
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6 flex-1">
                <p className="text-[10px] uppercase tracking-[4px] text-[#d99a58] font-bold mb-3">Getting Here</p>
                <ul className="space-y-3 text-sm text-white/50 leading-6">
                  <li className="flex gap-3"><span className="text-[#d99a58] shrink-0">✈</span> 45 min from Ngurah Rai Airport</li>
                  <li className="flex gap-3"><span className="text-[#d99a58] shrink-0">🚗</span> Free valet parking on-site</li>
                  <li className="flex gap-3"><span className="text-[#d99a58] shrink-0">🛺</span> Shuttle service available</li>
                  <li className="flex gap-3"><span className="text-[#d99a58] shrink-0">📍</span> Jl. Raya Canggu, Badung, Bali 80351</li>
                </ul>
              </div>
              <div className="bg-[#d99a58]/10 border border-[#d99a58]/20 rounded-xl p-6">
                <p className="text-[10px] uppercase tracking-[4px] text-[#d99a58] font-bold mb-2">Opening Hours</p>
                <p className="text-sm text-white/60 leading-6">Front Desk<br /><span className="text-white font-bold">Open 24 Hours</span></p>
                <div className="mt-3 pt-3 border-t border-white/10">
                  <p className="text-sm text-white/60 leading-6">Restaurant<br /><span className="text-white font-bold">7:00 AM – 11:00 PM</span></p>
                </div>
              </div>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 h-12 bg-white/5 border border-white/10 rounded-xl text-[11px] uppercase tracking-[3px] font-bold text-[#d99a58] hover:bg-[#d99a58]/10 hover:border-[#d99a58]/40 transition-all duration-300">
                <Map size={14} /> Open in Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY STRIP ── */}
      <section className="px-6 md:px-16 lg:px-24 pb-0 bg-[#1a0a0a]">
        <div className="max-w-[1250px] mx-auto">
          <div className="grid grid-cols-4 gap-3 h-[220px]">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`relative overflow-hidden rounded-xl group ${i === 0 ? "col-span-2" : ""}`}>
                <Image src="/images/home/hero/bg.jpg" alt="Om Hotel" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESERVE ── */}
      <section className="relative flex items-center justify-center text-center overflow-hidden py-28 mt-16">
        <Image src="/images/home/hero/bg.jpg" alt="Reserve" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a0a]/80 via-[#1a0a0a]/70 to-[#1a0a0a]/80" />
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "linear-gradient(#d99a58 1px,transparent 1px),linear-gradient(90deg,#d99a58 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 px-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-10 h-[1px] bg-[#d99a58]" />
            <p className="text-[#d99a58] text-[11px] tracking-[5px] uppercase font-bold">Book Now</p>
            <span className="w-10 h-[1px] bg-[#d99a58]" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Reserve A Room
          </h2>
          <p className="text-white/40 text-sm mb-10 tracking-widest uppercase">Experience luxury like never before</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#d99a58] hover:bg-[#c88745] transition-all duration-300 text-[#1a0f08] text-[11px] uppercase tracking-[4px] font-black px-12 py-5 rounded-lg">
              Make A Reservation
            </button>
            <button className="border border-white/20 hover:border-[#d99a58]/60 text-white/60 hover:text-[#d99a58] transition-all duration-300 text-[11px] uppercase tracking-[4px] font-black px-12 py-5 rounded-lg">
              View Rooms
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0a0303] pt-16 pb-10 border-t border-white/5">
        <div className="max-w-[1250px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-[1px] bg-[#d99a58]" />
                <h2 className="text-2xl font-black tracking-[6px]">OM HOTEL</h2>
              </div>
              <p className="text-white/30 text-sm leading-6">A luxury retreat nestled in the heart of Canggu, Bali. Where elegance meets serenity.</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[4px] text-[#d99a58]/70 font-bold mb-4">Quick Links</p>
              <ul className="space-y-2 text-sm text-white/40">
                {["Home", "Rooms", "Dining", "Spa", "Contact"].map(l => (
                  <li key={l}><a href="#" className="hover:text-[#d99a58] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[4px] text-[#d99a58]/70 font-bold mb-4">Contact</p>
              <ul className="space-y-2 text-sm text-white/40">
                <li>Jl. Raya Canggu, Bali</li>
                <li>(+62) 81 224 557 900</li>
                <li>reservation@omhotel.com</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
            <p className="text-white/20 text-xs tracking-widest">© 2024 Om Hotel. All Rights Reserved.</p>
            <div className="flex gap-3">
              <SocialBtn><Facebook size={13} fill="currentColor" /></SocialBtn>
              <SocialBtn><Instagram size={13} /></SocialBtn>
              <SocialBtn><Twitter size={13} fill="currentColor" /></SocialBtn>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
