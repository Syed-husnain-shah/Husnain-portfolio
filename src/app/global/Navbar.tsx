"use client";

import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Resume", href: "#resume" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="relative block h-10 w-[120px]"
        >
          <Image
            src="/logo/husnain.png"
            alt="Husnain Logo"
            fill
            priority
            sizes="120px"
            className="object-contain object-left"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-300 transition-colors duration-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {/* Top line */}
          <span
            className={`absolute h-0.5 w-5 bg-white transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          />

          {/* Bottom line */}
          <span
            className={`absolute h-0.5 w-5 bg-white transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`grid transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden border-t border-white/10 bg-black/95">
          <div className="px-6 py-5">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  }}
                  className={`rounded-lg px-4 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 ease-out hover:bg-white/5 hover:text-white ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  }`}
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile CTA */}
              <a
                href="#contact"
                onClick={closeMenu}
                style={{
                  transitionDelay: isOpen ? `${navLinks.length * 50}ms` : "0ms",
                }}
                className={`mt-3 rounded-full bg-white px-5 py-3 text-center text-sm font-bold text-black transition-all duration-300 ease-out hover:bg-gray-200 ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
