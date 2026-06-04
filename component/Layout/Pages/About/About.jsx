"use client";

import Image from "next/image";
import { Award, Heart, Star, Users } from "lucide-react";

const team = [
  {
    name: "Arjun Sharma",
    role: "General Manager",
    img: "https://api.dicebear.com/8.x/personas/svg?seed=Arjun&backgroundColor=b6e3f4",
    bio: "20+ years crafting unforgettable luxury hospitality experiences.",
  },
  {
    name: "Priya Thapa",
    role: "Head of Hospitality",
    img: "https://api.dicebear.com/8.x/personas/svg?seed=Priya&backgroundColor=ffd5dc",
    bio: "Ensures every guest feels at home from arrival to departure.",
  },
  {
    name: "Rohan Karki",
    role: "Executive Chef",
    img: "https://api.dicebear.com/8.x/personas/svg?seed=Rohan&backgroundColor=d1fadf",
    bio: "Award-winning chef blending Nepali flavours with global cuisine.",
  },
  {
    name: "Sita Rai",
    role: "Events Coordinator",
    img: "https://api.dicebear.com/8.x/personas/svg?seed=Sita&backgroundColor=fde8c8",
    bio: "Transforms special occasions into timeless memories.",
  },
];

const stats = [
  { icon: <Star size={18} />, value: "15+", label: "Years of Excellence" },
  { icon: <Users size={18} />, value: "50k+", label: "Happy Guests" },
  { icon: <Award size={18} />, value: "30+", label: "Awards Won" },
  { icon: <Heart size={18} />, value: "100%", label: "Guest Satisfaction" },
];

const values = [
  {
    title: "Warm Hospitality",
    desc: "Every guest is treated like family with personalised attention.",
  },
  {
    title: "Timeless Luxury",
    desc: "Premium amenities and elegant spaces for ultimate comfort.",
  },
  {
    title: "Cultural Heritage",
    desc: "Rooted in Nepali tradition, blended with modern refinement.",
  },
  {
    title: "Culinary Excellence",
    desc: "World-class dining experiences crafted from local ingredients.",
  },
];

export default function About() {
  return (
    <div className="bg-[#fdf8f2] text-gray-800">
      {/* Hero */}
      <section className="relative flex h-[70vh] min-h-[480px] items-center justify-center overflow-hidden">
        <Image
          src="/images/home/hero/bg.jpg"
          alt="OM Hotel"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center px-6">
          <p className="mb-3 text-sm tracking-[0.3em] text-[#d6aa55] uppercase">
            Our Story
          </p>
          <h1 className="font-serif text-5xl font-bold text-white md:text-7xl">
            About OM Hotel
          </h1>
          <div className="mx-auto mt-6 h-px w-24 bg-[#d6aa55]" />
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            A sanctuary of comfort and culture in the heart of Kathmandu.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:flex lg:items-center lg:gap-16">
        <div className="lg:w-1/2">
          <p className="text-xs tracking-[0.3em] text-[#d6aa55] uppercase">
            Since 2009
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold leading-tight md:text-5xl">
            Where Every Stay<br />Becomes a Story
          </h2>
          <div className="mt-5 h-1 w-16 bg-[#d6aa55]" />
          <p className="mt-6 leading-8 text-gray-600">
            Nestled beside the sacred Boudhanath Stupa, OM Hotel was founded
            with a single dream — to offer guests an authentic Nepali experience
            wrapped in world-class luxury. Over 15 years, we have welcomed
            travellers from over 80 countries, offering not just rooms, but
            memories that last a lifetime.
          </p>
          <p className="mt-4 leading-8 text-gray-600">
            From our handcrafted décor celebrating Newari artistry to our
            rooftop restaurant serving Himalayan-inspired cuisine, every detail
            at OM Hotel reflects our passion for hospitality and heritage.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:mt-0 lg:w-1/2">
          <div className="relative h-64 overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/home/hero/bg.jpg"
              alt="Hotel interior"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative mt-8 h-64 overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/home/hero/hero.PNG"
              alt="Hotel view"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Bridge 1 – image + quote */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <Image src="/images/home/hero/bg.jpg" alt="bridge" fill className="object-cover brightness-40" />
        <div className="relative z-10 text-center px-6">
          <p className="font-serif text-2xl md:text-3xl italic text-white/90">&ldquo;Luxury is not a place, it&rsquo;s a feeling — and at OM Hotel, we make you feel it.&rdquo;</p>
          <div className="mx-auto mt-4 h-px w-20 bg-[#d6aa55]" />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-br from-[#7a0000] via-[#8b0000] to-[#5c0000] py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center py-4 px-4 text-center group">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#d6aa55] ring-1 ring-[#d6aa55]/30 group-hover:bg-[#d6aa55]/20 transition">
                  {s.icon}
                </div>
                <p className="font-serif text-3xl font-bold text-[#f2c14e] leading-none">
                  {s.value}
                </p>
                <div className="my-2 h-px w-6 bg-[#d6aa55]/50" />
                <p className="text-xs tracking-widest uppercase text-white/70">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridge 2 – image + text side by side */}
      <section className="relative overflow-hidden">
        <div className="lg:flex">
          <div className="relative h-64 lg:h-80 lg:w-1/2">
            <Image src="/images/home/hero/hero.PNG" alt="Hotel view" fill className="object-cover" />
          </div>
          <div className="flex items-center bg-[#8b0000] lg:w-1/2 px-10 py-12">
            <div>
              <p className="text-xs tracking-[0.3em] text-[#d6aa55] uppercase">Our Promise</p>
              <h3 className="mt-2 font-serif text-3xl font-bold text-white">Crafted for Those Who Seek the Extraordinary</h3>
              <div className="mt-4 h-1 w-12 bg-[#d6aa55]" />
              <p className="mt-4 text-white/75 leading-7">From the moment you arrive, every detail is designed to exceed your expectations — blending Nepali heritage with contemporary luxury.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] text-[#d6aa55] uppercase">
            What We Stand For
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl">
            Our Core Values
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-[#d6aa55]" />
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="group rounded-2xl border border-[#e8d5b0] bg-white p-8 shadow-sm transition hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#8b0000] font-serif text-lg font-bold text-[#f2c14e]">
                {i + 1}
              </div>
              <h3 className="font-serif text-xl font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-7 text-gray-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bridge 3 – full-width image banner */}
      <section className="relative h-56 flex items-center justify-center overflow-hidden">
        <Image src="/images/home/hero/bg.jpg" alt="ambience" fill className="object-cover brightness-30" />
        <div className="relative z-10 text-center px-6">
          <p className="text-xs tracking-[0.3em] text-[#d6aa55] uppercase">Our People</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl font-bold text-white">The Heart Behind Every Experience</h2>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#fff8ee] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="text-center">
            <p className="text-xs tracking-[0.3em] text-[#d6aa55] uppercase">
              The People Behind OM
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl">
              Meet Our Team
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-[#d6aa55]" />
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-[#8b0000]">
                    {member.role}
                  </p>
                  <div className="my-3 h-px bg-[#e8d5b0]" />
                  <p className="text-sm leading-6 text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 text-center">
        <Image
          src="/images/home/hero/bg.jpg"
          alt="Hotel ambience"
          fill
          className="object-cover brightness-30"
        />
        <div className="relative z-10 px-6">
          <p className="text-xs tracking-[0.3em] text-[#d6aa55] uppercase">
            Experience OM Hotel
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-white md:text-5xl">
            Ready for an Unforgettable Stay?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Book your room today and let us create memories that will last a
            lifetime.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/Rooms"
              className="rounded-full bg-[#d6aa55] px-10 py-4 text-sm font-semibold tracking-widest text-white transition hover:bg-[#b8902e]"
            >
              EXPLORE ROOMS
            </a>
            <a
              href="/contact"
              className="rounded-full border border-white px-10 py-4 text-sm font-semibold tracking-widest text-white transition hover:bg-white hover:text-gray-900"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
