"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    FaArrowRight,
    FaBars,
    FaTimes,
} from "react-icons/fa";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);

            const sections = navLinks
                .map((link) => document.getElementById(link.href.substring(1)))
                .filter(Boolean);

            let currentSection = "home";

            sections.forEach((section) => {
                if (!section) return;

                const rect = section.getBoundingClientRect();

                if (rect.top <= 150 && rect.bottom >= 150) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handleNavClick = (href: string) => {
        setIsOpen(false);

        const target = document.querySelector(href);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <header
            className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
                isScrolled
                    ? "py-3"
                    : "py-5"
            }`}
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                <nav
                    className={`relative flex h-[68px] items-center justify-between rounded-2xl border px-4 transition-all duration-500 sm:px-6 ${
                        isScrolled
                            ? "border-white/10 bg-[#0b0c0e]/85 shadow-[0_15px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                            : "border-transparent bg-transparent"
                    }`}
                >
                    {/* Logo */}

                    <Link
                        href="#home"
                        onClick={() => handleNavClick("#home")}
                        aria-label="Husnain home"
                        className="group relative z-20 flex h-11 w-32 items-center"
                    >
                        <Image
                            src="/logo/husnain.png"
                            alt="Husnain Logo"
                            fill
                            sizes="128px"
                            className="object-contain object-left transition-all duration-500 group-hover:scale-105"
                        />

                        {/* Logo Glow */}

                        <span className="pointer-events-none absolute left-0 top-1/2 h-8 w-20 -translate-y-1/2 rounded-full bg-blue-500/0 blur-xl transition-all duration-500 group-hover:bg-blue-500/20" />
                    </Link>

                    {/* Desktop Navigation */}

                    <div className="hidden items-center gap-1 lg:flex">
                        {navLinks.map((link) => {
                            const sectionId = link.href.substring(1);
                            const isActive = activeSection === sectionId;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        handleNavClick(link.href);
                                    }}
                                    className={`group relative px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
                                        isActive
                                            ? "text-white"
                                            : "text-gray-500 hover:text-white"
                                    }`}
                                >
                                    <span className="relative z-10">
                                        {link.name}
                                    </span>

                                    {/* Active Indicator */}

                                    <span
                                        className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-blue-400 transition-all duration-300 ${
                                            isActive
                                                ? "w-5 opacity-100"
                                                : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
                                        }`}
                                    />

                                    {/* Hover Glow */}

                                    <span
                                        className={`pointer-events-none absolute inset-x-2 bottom-0 -z-10 h-8 rounded-full bg-blue-500/10 blur-xl transition-opacity duration-300 ${
                                            isActive
                                                ? "opacity-100"
                                                : "opacity-0 group-hover:opacity-100"
                                        }`}
                                    />
                                </Link>
                            );
                        })}
                    </div>

                    {/* Desktop CTA */}

                    <Link
                        href="#contact"
                        onClick={(event) => {
                            event.preventDefault();
                            handleNavClick("#contact");
                        }}
                        className="group relative hidden items-center gap-2 overflow-hidden rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-xs font-semibold text-white transition-all duration-500 hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-blue-500/10 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] lg:inline-flex"
                    >
                        {/* Hover Background */}

                        <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-blue-500/20 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                        <span className="relative z-10">
                            Let&apos;s Talk
                        </span>

                        <span className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-white text-black transition-all duration-500 group-hover:-rotate-45 group-hover:bg-blue-400">
                            <FaArrowRight size={9} />
                        </span>
                    </Link>

                    {/* Mobile Menu Button */}

                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={
                            isOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={isOpen}
                        className="group relative z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-300 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white lg:hidden"
                    >
                        <span
                            className={`absolute transition-all duration-300 ${
                                isOpen
                                    ? "rotate-90 opacity-0"
                                    : "rotate-0 opacity-100"
                            }`}
                        >
                            <FaBars size={18} />
                        </span>

                        <span
                            className={`absolute transition-all duration-300 ${
                                isOpen
                                    ? "rotate-0 opacity-100"
                                    : "-rotate-90 opacity-0"
                            }`}
                        >
                            <FaTimes size={19} />
                        </span>
                    </button>
                </nav>

                {/* Mobile Menu */}

                <div
                    className={`overflow-hidden transition-all duration-500 lg:hidden ${
                        isOpen
                            ? "mt-3 max-h-[600px] opacity-100"
                            : "pointer-events-none max-h-0 opacity-0"
                    }`}
                >
                    <div className="rounded-2xl border border-white/10 bg-[#0b0c0e]/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                        {navLinks.map((link, index) => {
                            const sectionId = link.href.substring(1);
                            const isActive =
                                activeSection === sectionId;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        handleNavClick(link.href);
                                    }}
                                    className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300 ${
                                        isActive
                                            ? "bg-blue-500/10 text-white"
                                            : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                                    }`}
                                    style={{
                                        transitionDelay: isOpen
                                            ? `${index * 50}ms`
                                            : "0ms",
                                    }}
                                >
                                    <span className="flex items-center gap-3">
                                        <span
                                            className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                                                isActive
                                                    ? "bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                                                    : "bg-gray-700 group-hover:bg-blue-400"
                                            }`}
                                        />

                                        {link.name}
                                    </span>

                                    <FaArrowRight
                                        size={11}
                                        className={`transition-all duration-300 ${
                                            isActive
                                                ? "translate-x-0 text-blue-400"
                                                : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                                        }`}
                                    />
                                </Link>
                            );
                        })}

                        {/* Mobile CTA */}

                        <div className="mt-2 border-t border-white/10 pt-3">
                            <Link
                                href="#contact"
                                onClick={(event) => {
                                    event.preventDefault();
                                    handleNavClick("#contact");
                                }}
                                className="group flex w-full items-center justify-between rounded-xl bg-blue-500/10 px-4 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500/15"
                            >
                                <span>Let&apos;s Work Together</span>

                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-400 text-black transition-transform duration-300 group-hover:-rotate-45">
                                    <FaArrowRight size={11} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;  