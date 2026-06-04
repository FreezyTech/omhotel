import Link from "next/link";
import {
  Globe,
  Mail,
  MapPin,
  Phone,
  Send,
  Share2,
  Heart,
  Video,
} from "lucide-react";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Rooms", href: "/Rooms" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-r from-[#760000] via-[#950000] to-[#6b0000] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#d6a733] text-2xl font-serif font-bold text-[#f2c14e]">
              OM
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#f2c14e]">
                OM HOTEL
              </h2>
              <p className="text-[10px] uppercase tracking-widest text-[#f2c14e]">
                Comfort | Luxury | Hospitality
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-xs leading-7 text-white/90">
            Comfortable stay with quality service and warm hospitality.
          </p>

          <div className="mt-5 flex gap-4 text-[#f2c14e]">
            <Share2 />
            <Heart />
            <Video />
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl font-bold uppercase text-[#f2c14e]">
            Quick Links
          </h3>

          <ul className="mt-5 space-y-3">
            {links.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-2 text-sm hover:text-[#f2c14e]"
                >
                  <span className="text-[#f2c14e]">›</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-xl font-bold uppercase text-[#f2c14e]">
            Contact Info
          </h3>

          <div className="mt-5 space-y-4 text-sm">
            <p className="flex items-center gap-3">
              <MapPin className="text-[#f2c14e]" size={20} />
              Boudha, Kathmandu, Nepal
            </p>

            <p className="flex items-center gap-3">
              <Phone className="text-[#f2c14e]" size={20} />
              +977 980-1234567
            </p>

            <p className="flex items-center gap-3">
              <Mail className="text-[#f2c14e]" size={20} />
              info@omhotel.com
            </p>

            <p className="flex items-center gap-3">
              <Globe className="text-[#f2c14e]" size={20} />
              www.omhotel.com
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl font-bold uppercase text-[#f2c14e]">
            Newsletter
          </h3>

          <p className="mt-5 text-sm leading-7 text-white/90">
            Subscribe to get updates and special offers.
          </p>

          <form className="mt-6 flex border border-[#d6a733]">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/60"
            />

            <button
              type="button"
              className="bg-[#8b0000] px-4 text-[#f2c14e]"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-[#d6a733]/70 py-4 text-center text-sm">
        © 2024 Om Hotel. All Rights Reserved.
      </div>
    </footer>
  );
}