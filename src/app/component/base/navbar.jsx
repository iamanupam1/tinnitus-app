import { NAV_LINKS } from "@/enum";
import {
  MapPin,
  Menu,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
      <div
        className="hidden md:flex justify-between items-center py-2 border-b text-sm py-3"
        style={{ borderColor: "rgba(255,255,255,.25)" }}
      >
        <div className="">
          <ul className="flex text-white">
            <li>
              <div className="flex items-center">
                <MapPin className="w-6 h-6" />
                <span className="ml-2">Vermillion, South Dakota, USA</span>
              </div>
            </li>
            <li className="ml-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6" />
                <span className="ml-2">+1 XXX-XXX-XXXX</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="">
          <ul className="flex justify-end text-white">
            {[
              { icon: Facebook, name: "Facebook" },
              { icon: Twitter, name: "Twitter" },
              { icon: Instagram, name: "Instagram" },
              { icon: Youtube, name: "YouTube" },
            ].map(({ icon: Icon, name }, index) => (
              <li key={name} className={index !== 0 ? "ml-6" : ""}>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                >
                  <Icon className="w-6 h-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between py-6">
        <div className="w-1/2 md:w-auto">
          <Link href="/" className="text-white font-bold text-2xl">
            Tinnitus Counseling Tool
          </Link>
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
          <Menu className="text-white" />
        </label>

        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden md:block w-full md:w-auto" id="menu">
          <nav className="w-full bg-white md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
            <ul className="md:flex items-center">
              {NAV_LINKS.map(
                (item, index) => (
                  <li
                    key={item.label}
                    className={`${index !== 0 ? "md:ml-4" : ""} ${
                      item.label === "Blog" ? "md:hidden lg:block" : ""
                    }`}
                  >
                    <Link
                      className="py-2 inline-block md:text-white md:px-2 font-semibold"
                      href={item.path}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
