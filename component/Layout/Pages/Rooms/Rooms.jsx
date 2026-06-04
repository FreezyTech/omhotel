'use client';

import React from 'react';
import {
  Phone,
  Mail,
  MapPin,

  Star,
  BedDouble,
  Bath,
  Move3D,
  Play,
} from 'lucide-react';

const rooms = [
  {
    title: 'Standard Rooms',
    price: '$150',
    rating: '4.9',
    tag: 'Luxury Room',
    img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop',
    bed: '1 Bed',
    bath: '1 Bath',
    size: '300 sqft',
  },
  {
    title: 'Deluxe Rooms',
    price: '$250',
    rating: '5.0',
    tag: 'Luxury Room',
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop',
    bed: '1 Bed',
    bath: '2 Bath',
    size: '400 sqft',
  },
  {
    title: 'The Pearl Suite',
    price: '$450',
    rating: '4.9',
    tag: 'Luxury Suites',
    img: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1200&auto=format&fit=crop',
    bed: '2 Bed',
    bath: '2 Bath',
    size: '700 sqft',
  },
  {
    title: 'Golden Horizon Suite',
    price: '$550',
    rating: '4.9',
    tag: 'Luxury Suites',
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop',
    bed: '3 Bed',
    bath: '3 Bath',
    size: '800 sqft',
  },
  {
    title: 'The Haven Room',
    price: '$300',
    rating: '5.0',
    tag: 'Luxury Room',
    img: 'https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=1200&auto=format&fit=crop',
    bed: '2 Bed',
    bath: '2 Bath',
    size: '750 sqft',
  },
  {
    title: 'The Executive Deluxe',
    price: '$450',
    rating: '5.0',
    tag: 'Luxury Room',
    img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1200&auto=format&fit=crop',
    bed: '4 Bed',
    bath: '3 Bath',
    size: '950 sqft',
  },
  {
    title: 'The Prestige Room',
    price: '$550',
    rating: '5.0',
    tag: 'Luxury Rooms',
    img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
    bed: '5 Bed',
    bath: '4 Bath',
    size: '1200 sqft',
  },
  {
    title: 'Royal Suite',
    price: '$600',
    rating: '5.0',
    tag: 'Luxury Suites',
    img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop',
    bed: '4 Bed',
    bath: '3 Bath',
    size: '825 sqft',
  },
  {
    title: 'Family Suites',
    price: '$750',
    rating: '5.0',
    tag: 'Luxury Suites',
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
    bed: '5 Bed',
    bath: '4 Bath',
    size: '850 sqft',
  },
];

export default function Rooms() {
  return (
    <main className="min-h-screen bg-[#320202] text-[#222]">
      {/* Top Bar */}
     

      {/* Hero */}
      <section
        className="relative h-[165px] bg-cover bg-center md:h-[200px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
       
         
        </div>
      </section>

      {/* Rooms Section */}
      <section className="relative mx-auto max-w-[1040px] px-4 pb-20 pt-24">
       
        <div className="relative z-10 text-center">
          <div className="mx-auto mb-3 h-[20px] w-[82px] text-[#d8a160]">
            <svg viewBox="0 0 120 25" fill="none">
              <path
                d="M5 15C25 0 42 27 60 12C78 27 95 0 115 15"
                stroke="currentColor"
                strokeWidth="3"
              />
              <circle cx="60" cy="12" r="3" fill="currentColor" />
            </svg>
          </div>

          <p className="mb-2 text-[14px] font-semibold uppercase tracking-[0.35em] text-[#d8a160]">
            Rooms & Suites
          </p>

          <h2 className="mb-12 font-serif text-[40px] font-bold leading-tight text-white md:text-[48px]">
            Luxury Rooms & Suites
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-t-[16px] rounded-b-[10px] bg-white shadow-[0_8px_26px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
            >
              <div className="relative h-[185px] overflow-hidden rounded-t-[16px]">
                <img
                  src={room.img}
                  alt={room.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                {index === 0 && (
                  <button className="absolute left-1/2 top-1/2 grid h-[42px] w-[42px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 shadow-lg">
                    <Play size={16} className="fill-[#d8a160] text-[#d8a160]" />
                  </button>
                )}

                <span className="absolute bottom-0 left-0 bg-[#d8a160] px-6 py-3 text-[13px] font-medium text-white">
                  {room.tag}
                </span>
              </div>

              <div className="px-6 pb-5 pt-5">
                <div className="mb-2 flex items-center justify-between">
                  <p className="font-serif text-[30px] font-bold text-[#d8a160]">
                    {room.price}
                    <span className="ml-1 font-sans text-[13px] font-normal text-[#777]">
                      /night
                    </span>
                  </p>

                  <div className="flex items-center gap-1 text-[15px] font-semibold">
                    <Star size={18} className="fill-[#e2a45c] text-[#e2a45c]" />
                    {room.rating}
                  </div>
                </div>

                <h3 className="mb-6 font-serif text-[20px] font-bold">
                  {room.title}
                </h3>

                <div className="h-px w-full bg-[#eeeeee]" />

                <div className="mt-5 flex items-center justify-between text-[13px] text-[#555]">
                  <span className="flex items-center gap-1">
                    <BedDouble size={15} className="text-[#c99652]" />
                    {room.bed}
                  </span>

                  <span className="flex items-center gap-1">
                    <Bath size={15} className="text-[#c99652]" />
                    {room.bath}
                  </span>

                  <span className="flex items-center gap-1">
                    <Move3D size={15} className="text-[#c99652]" />
                    {room.size}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facility Bar */}
      <section className="bg-[#d8a160] py-5 text-white">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-8 px-4 text-center font-serif text-[22px] font-bold md:justify-between md:text-[26px]">
          <p>Breakfast Included</p>
          <span className="text-[#d8a160]">✦</span>
          <p>Swimming Pool</p>
          <span className="text-[#d8a160]">✦</span>
          <p>High Speed Wifi</p>
          <span className="text-[#d8a160]">✦</span>
          <p>Spa & Wellness</p>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="relative overflow-hidden bg-[#420303] px-4 py-24 text-center">
    
        <div className="relative z-10">
          <div className="mx-auto mb-3 h-[20px] w-[82px] text-[#d8a160]">
            <svg viewBox="0 0 120 25" fill="none">
              <path
                d="M5 15C25 0 42 27 60 12C78 27 95 0 115 15"
                stroke="currentColor"
                strokeWidth="3"
              />
              <circle cx="60" cy="12" r="3" fill="currentColor" />
            </svg>
          </div>

          <h2 className="mx-auto max-w-[650px] font-serif text-[38px] font-bold leading-[1.22] text-white md:text-[48px]">
            Book Your Stay and Enjoy Exceptional Comfort
          </h2>

          <button className="mt-10 rounded-full bg-[#d8a160] px-10 py-4 text-[14px] font-semibold text-white shadow-md hover:bg-[#b8872a]">
            Book Now
          </button>
        </div>
      </section>
    </main>
  );
}