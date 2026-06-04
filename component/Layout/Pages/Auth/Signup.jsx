"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";

const inputCls =
  "w-full h-14 bg-white/5 border border-white/10 pl-12 pr-5 text-sm outline-none text-white placeholder:text-white/25 rounded-lg focus:border-[#d99a58] transition-all duration-300";

export default function Signup() {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <main className="min-h-screen bg-[#1a0a0a] text-white flex">
      {/* Left — Image Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <Image
          src="/images/home/hero/bg.jpg"
          alt="Om Hotel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a0a]/20 via-[#1a0a0a]/40 to-[#1a0a0a]" />

        <div className="absolute bottom-14 left-12 z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d99a58] bg-black/40 text-xl font-bold text-[#d99a58] backdrop-blur">
              OM
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold tracking-[0.15em] text-white">
                OM HOTEL
              </h2>
              <p className="text-xs tracking-[0.22em] text-[#d99a58]">LUXURY STAY</p>
            </div>
          </div>
          <p className="text-white/50 text-sm leading-7 max-w-xs">
            Join us and experience unparalleled luxury in the heart of Canggu, Bali.
          </p>
          <div className="flex items-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#d99a58] text-sm">★</span>
            ))}
            <span className="text-white/30 text-xs ml-2 tracking-widest">5-Star Experience</span>
          </div>
        </div>
      </div>

      {/* Right — Form Panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d99a58]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-10 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d99a58] bg-black/40 text-lg font-bold text-[#d99a58]">
              OM
            </div>
            <div>
              <h2 className="font-serif text-xl font-semibold tracking-[0.15em] text-white">OM HOTEL</h2>
              <p className="text-[10px] tracking-[0.22em] text-[#d99a58]">LUXURY STAY</p>
            </div>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#d99a58]" />
              <p className="text-[#d99a58] text-[11px] tracking-[5px] uppercase font-bold">Get Started</p>
            </div>
            <h1 className="text-4xl font-black">
              Create <span className="text-[#d99a58]">Account</span>
            </h1>
            <p className="text-white/35 text-sm mt-2">Join Om Hotel for exclusive benefits.</p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-[10px] uppercase tracking-[5px] font-bold text-white/40 mb-2">
                Full Name <span className="text-[#d99a58]">*</span>
              </label>
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
                <input type="text" placeholder="John Doe" className={inputCls} />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-[10px] uppercase tracking-[5px] font-bold text-white/40 mb-2">
                Email <span className="text-[#d99a58]">*</span>
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
                <input type="email" placeholder="email@example.com" className={inputCls} />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[10px] uppercase tracking-[5px] font-bold text-white/40 mb-2">
                Phone
              </label>
              <div className="relative">
                <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
                <input type="tel" placeholder="+1 000 000 0000" className={inputCls} />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-[10px] uppercase tracking-[5px] font-bold text-white/40 mb-2">
                Password <span className="text-[#d99a58]">*</span>
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
                <input
                  type={show ? "text" : "password"}
                  placeholder="••••••••"
                  className={inputCls + " pr-12"}
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 hover:text-[#d99a58] transition-colors"
                >
                  {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-[10px] uppercase tracking-[5px] font-bold text-white/40 mb-2">
                Confirm Password <span className="text-[#d99a58]">*</span>
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="••••••••"
                  className={inputCls + " pr-12"}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 hover:text-[#d99a58] transition-colors"
                >
                  {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="accent-[#d99a58] w-4 h-4 mt-0.5 shrink-0" />
              <span className="text-xs text-white/40 leading-5">
                I agree to the{" "}
                <Link href="#" className="text-[#d99a58] hover:text-[#e8aa68] transition-colors">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-[#d99a58] hover:text-[#e8aa68] transition-colors">
                  Privacy Policy
                </Link>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="group relative w-full h-14 bg-[#d99a58] hover:bg-[#c88745] transition-all duration-300 text-[#1a0f08] text-[11px] uppercase tracking-[4px] font-black rounded-lg overflow-hidden mt-2"
            >
              <span className="relative z-10">Create Account</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#c88745] to-[#e8aa68] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-7">
            <span className="flex-1 h-[1px] bg-white/8" />
            <span className="text-[10px] uppercase tracking-[4px] text-white/20 font-bold">or</span>
            <span className="flex-1 h-[1px] bg-white/8" />
          </div>

          {/* Sign in link */}
          <p className="text-center text-sm text-white/35">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-[#d99a58] font-bold hover:text-[#e8aa68] transition-colors">
              Sign in
            </Link>
          </p>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-6 mt-10 pt-7 border-t border-white/8">
            {["🔒 Secure", "✓ Private", "★ 5-Star"].map((t) => (
              <p key={t} className="text-[10px] text-white/20 tracking-widest uppercase">{t}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
