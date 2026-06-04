"use client";

import React from "react";
import Link from "next/link";
import { Menu, X, UserCircle2 } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/Rooms" },
    { name: "Dining", href: "/Dining" },
    { name: "About", href: "/About" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="absolute top-0 left-0 z-30 w-full px-8 py-6 lg:px-20">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d6aa55] bg-black/40 text-xl font-bold text-[#d6aa55] backdrop-blur">
            OM
          </div>
          <div>
            <h1 className="font-serif text-2xl font-semibold tracking-[0.15em] text-white">
              OM HOTEL
            </h1>
            <p className="text-xs tracking-[0.22em] text-[#d6aa55]">
              LUXURY STAY
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold tracking-[0.18em] text-white/90 transition hover:text-[#d6aa55]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full border border-[#d6aa55] px-7 py-3 text-sm font-semibold tracking-wide text-[#d6aa55] transition hover:bg-[#d6aa55] hover:text-white">
            RESERVE NOW
          </button>
          <Link href="/auth/login" className="text-white/80 transition hover:text-[#d6aa55]">
            <UserCircle2 size={32} />
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="mt-5 rounded-3xl border border-white/15 bg-black/80 p-6 backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-[0.18em] text-white/90 transition hover:text-[#d6aa55]"
              >
                {link.name}
              </Link>
            ))}
            <button className="mt-3 rounded-full bg-[#d6aa55] px-7 py-4 text-sm font-semibold tracking-wide text-white">
              RESERVE NOW
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
