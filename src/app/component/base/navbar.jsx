"use client";
import {
  MapPin,
  Menu,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronDown, // Import ChevronDown icon for the indicator
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "../../../enum";

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setIsDropdownOpen(!isDropdownOpen);
    setOpenDropdownIndex(index);
  };

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
          <nav className="w-full bg-white rounded-lg shadow-lg px-6 py-4 text-center md:bg-transparent md:shadow-none md:px-0 md:py-0">
            <ul className="md:flex items-center justify-between">
              {NAV_LINKS.map((item, index) => (
                <li
                  key={item.label}
                  className={`${index !== 0 ? "md:ml-6" : ""} ${
                    item.label === "Blog" ? "md:hidden lg:block" : ""
                  }`}
                >
                  {item.sub_link ? (
                    <div className="relative group">
                      <button
                        className="py-2 inline-block md:text-white md:px-4 font-semibold flex items-center"
                        onClick={() => toggleDropdown(index)}
                      >
                        {item.label}
                        <ChevronDown
                          className={`ml-2 transition-transform ${
                            isDropdownOpen && openDropdownIndex === index
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        />
                      </button>
                      {isDropdownOpen && openDropdownIndex === index && (
                        <div className="absolute bg-white shadow-lg text-left w-100 rounded-lg p-2 mt-2 z-10 md:block group-hover:block">
                          {item.sub_link.map((subLink) => (
                            <Link
                              key={subLink.label}
                              href={subLink.path}
                              className="block p-2 hover:bg-gray-100 rounded-md"
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      className="py-2 inline-block md:text-white md:px-4 font-semibold"
                      href={item.path}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
