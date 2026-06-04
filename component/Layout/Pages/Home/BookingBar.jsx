"use client";

import { useState } from "react";
import { CalendarDays, UserRound, BedDouble, Search } from "lucide-react";

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [rooms, setRooms] = useState("1");

  const today = new Date().toISOString().split("T")[0];

  const formatDate = (date) => {
    if (!date) return "Select Date";

    return new Date(date).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleSearch = () => {
    if (!checkIn) {
      alert("Please select Check In date");
      return;
    }

    if (!checkOut) {
      alert("Please select Check Out date");
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      alert("Check Out date must be after Check In date");
      return;
    }

    alert(
      `Booking Details:\n\nCheck In: ${formatDate(checkIn)}\nCheck Out: ${formatDate(
        checkOut
      )}\nGuests: ${guests} Guest${Number(guests) > 1 ? "s" : ""}\nRooms: ${rooms} Room${
        Number(rooms) > 1 ? "s" : ""
      }`
    );
  };

  const fieldClass =
    "group relative flex min-h-[88px] cursor-pointer items-center gap-4 rounded-2xl border border-[#f4c84a]/25 bg-white/[0.08] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#f4c84a]/60 hover:bg-white/[0.13] hover:shadow-[0_16px_35px_rgba(0,0,0,0.25)]";

  const iconBoxClass =
    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#f4c84a]/35 bg-gradient-to-br from-[#fff1a6]/20 to-[#d7a72f]/10 text-[#ffd95a] shadow-[0_0_24px_rgba(244,200,74,0.18)]";

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#250000] via-[#670000] to-[#180000] px-4 py-8 md:px-8 lg:py-10">
      {/* Luxury glow background */}
      <div className="pointer-events-none absolute left-10 top-0 h-40 w-40 rounded-full bg-[#d7a72f]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-48 w-48 rounded-full bg-[#ffdf6e]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="mb-4 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f4c84a]">
            Luxury Stay
          </p>
          <h2 className="mt-1 text-2xl font-black text-white md:text-3xl">
            Book Your Perfect Room
          </h2>
        </div>

        <div className="rounded-[28px] border border-[#f4c84a]/35 bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-black/20 p-3 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-4">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-[1.1fr_1.1fr_0.9fr_0.9fr_1.25fr]">
            
            {/* Check In */}
            <label className={fieldClass}>
              <span className={iconBoxClass}>
                <CalendarDays className="h-6 w-6" />
              </span>

              <div className="min-w-0">
                <h4 className="text-xs font-black uppercase tracking-[0.22em] text-[#f4c84a]">
                  Check In
                </h4>
                <p className="mt-1 truncate text-xl font-bold text-white">
                  {formatDate(checkIn)}
                </p>
                <p className="mt-1 text-xs text-[#ffd7d7]/80">
                  Arrival date
                </p>

                <input
                  type="date"
                  value={checkIn}
                  min={today}
                  onChange={(e) => {
                    setCheckIn(e.target.value);
                    if (checkOut && new Date(checkOut) <= new Date(e.target.value)) {
                      setCheckOut("");
                    }
                  }}
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                />
              </div>
            </label>

            {/* Check Out */}
            <label className={fieldClass}>
              <span className={iconBoxClass}>
                <CalendarDays className="h-6 w-6" />
              </span>

              <div className="min-w-0">
                <h4 className="text-xs font-black uppercase tracking-[0.22em] text-[#f4c84a]">
                  Check Out
                </h4>
                <p className="mt-1 truncate text-xl font-bold text-white">
                  {formatDate(checkOut)}
                </p>
                <p className="mt-1 text-xs text-[#ffd7d7]/80">
                  Departure date
                </p>

                <input
                  type="date"
                  value={checkOut}
                  min={checkIn || today}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                />
              </div>
            </label>

            {/* Guests */}
            <div className={fieldClass}>
              <span className={iconBoxClass}>
                <UserRound className="h-6 w-6" />
              </span>

              <div className="min-w-0">
                <h4 className="text-xs font-black uppercase tracking-[0.22em] text-[#f4c84a]">
                  Guests
                </h4>

                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="mt-1 w-full cursor-pointer bg-transparent text-xl font-bold text-white outline-none"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} className="text-black" value={num}>
                      {num} Guest{num > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>

                <p className="mt-1 text-xs text-[#ffd7d7]/80">
                  Total person
                </p>
              </div>
            </div>

            {/* Rooms */}
            <div className={fieldClass}>
              <span className={iconBoxClass}>
                <BedDouble className="h-6 w-6" />
              </span>

              <div className="min-w-0">
                <h4 className="text-xs font-black uppercase tracking-[0.22em] text-[#f4c84a]">
                  Rooms
                </h4>

                <select
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  className="mt-1 w-full cursor-pointer bg-transparent text-xl font-bold text-white outline-none"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} className="text-black" value={num}>
                      {num} Room{num > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>

                <p className="mt-1 text-xs text-[#ffd7d7]/80">
                  Room quantity
                </p>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={handleSearch}
              className="group relative min-h-[88px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#fff3a3] via-[#e7b32f] to-[#a86600] px-7 py-4 text-base font-black uppercase tracking-[0.16em] text-[#190b00] shadow-[0_18px_45px_rgba(215,166,38,0.42)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(215,166,38,0.62)] active:scale-[0.98] md:col-span-2 xl:col-span-1"
            >
              <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

              <span className="relative flex items-center justify-center gap-3">
                <Search className="h-5 w-5" />
                Check Availability
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}