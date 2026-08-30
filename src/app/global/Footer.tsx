"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
    FaArrowRight,
    FaArrowUp,
    FaGithub,
    FaHeart,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const links = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
];

const Footer = () => {
    const footerRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const footer = footerRef.current;

        if (!footer) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.15,
            }
        );

        observer.observe(footer);

        return () => observer.disconnect();
    }, []);

    return (
        <footer
            ref={footerRef}
            className="relative overflow-hidden border-t border-white/10 bg-black"
        >
            {/* Background Glow */}

            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/[0.04] blur-[120px]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-500/[0.025] blur-[110px]"
            />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                {/* Main Footer */}

                <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-20">

                    {/* Logo / About */}

                    <div
                        className={`transition-all duration-1000 ease-out ${
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-10 opacity-0"
                        }`}
                    >
                        <Link
                            href="#home"
                            aria-label="Go to homepage"
                            className="group relative block h-12 w-36"
                        >
                            <Image
                                src="/logo/husnain.png"
                                alt="Husnain Logo"
                                fill
                                sizes="144px"
                                className="object-contain object-left transition-transform duration-500 group-hover:scale-105"
                            />
                        </Link>

                        <p className="mt-6 max-w-md text-sm leading-7 text-gray-500">
                            Frontend Developer and Web Designer creating
                            modern, responsive and user-friendly digital
                            experiences with clean code and thoughtful design.
                        </p>

                        {/* Social Icons */}

                        <div className="mt-7 flex gap-3">
                            {/* GitHub */}

                            <a
                                href="https://github.com/Syed-husnain-shah"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)]"
                            >
                                <FaGithub
                                    size={17}
                                    className="transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                                />
                            </a>

                            {/* LinkedIn */}

                            <a
                                href="https://www.linkedin.com/in/syed-husnain-shah/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)]"
                            >
                                <FaLinkedinIn
                                    size={16}
                                    className="transition-transform duration-500 group-hover:scale-110"
                                />
                            </a>

                            {/* Instagram */}

                            <a
                                href="https://www.instagram.com/syed_husnain_157?igsi=czhnZGg3b2Ezb3ps"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-500 hover:-translate-y-1.5 hover:border-pink-400/40 hover:bg-pink-500/10 hover:text-white hover:shadow-[0_10px_30px_rgba(236,72,153,0.12)]"
                            >
                                <FaInstagram
                                    size={17}
                                    className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}

                    <div
                        className={`transition-all delay-150 duration-1000 ease-out ${
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-10 opacity-0"
                        }`}
                    >
                        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                            Quick Links
                        </h3>

                        <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4">
                            {links.map((link, index) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="group flex items-center gap-2 text-sm text-gray-500 transition-all duration-300 hover:translate-x-1 hover:text-white"
                                    style={{
                                        transitionDelay: isVisible
                                            ? `${index * 60 + 250}ms`
                                            : "0ms",
                                    }}
                                >
                                    <span className="h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-3" />

                                    <span className="transition-colors duration-300 group-hover:text-blue-100">
                                        {link.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}

                    <div
                        className={`transition-all delay-300 duration-1000 ease-out ${
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-10 opacity-0"
                        }`}
                    >
                        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                            Let&apos;s Work Together
                        </h3>

                        <p className="mt-6 text-sm leading-7 text-gray-500">
                            Have an idea or project? Let&apos;s create
                            something modern and professional together.
                        </p>

                        {/* CTA Button */}

                        <Link
                            href="#contact"
                            className="group relative mt-6 inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-500/10 hover:shadow-[0_15px_40px_rgba(59,130,246,0.18)]"
                        >
                            {/* Hover Background */}

                            <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100" />

                            {/* Shine */}

                            <span className="absolute inset-y-0 left-[-100%] w-1/2 skew-x-[-20deg] bg-white/10 transition-all duration-700 group-hover:left-[140%]" />

                            <span className="relative z-10 transition-colors duration-500 group-hover:text-blue-100">
                                Get In Touch
                            </span>

                            <span className="relative z-10 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-white text-black transition-all duration-500 group-hover:-rotate-45 group-hover:scale-110 group-hover:bg-black group-hover:text-white">
                                <FaArrowRight
                                    size={12}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                                />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Bottom */}

                <div
                    className={`flex flex-col gap-5 border-t border-white/10 py-6 transition-all duration-1000 sm:flex-row sm:items-center sm:justify-between ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-6 opacity-0"
                    }`}
                    style={{
                        transitionDelay: "500ms",
                    }}
                >
                    {/* Copyright */}

                    <p className="flex items-center gap-1.5 text-xs text-gray-600">
                        © {new Date().getFullYear()} Husnain. Made with

                        <FaHeart
                            size={10}
                            className="animate-pulse text-red-500"
                        />

                        and clean code.
                    </p>

                    {/* Back To Top */}

                    <Link
                        href="#home"
                        aria-label="Back to top"
                        className="group flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-gray-600 transition-colors duration-300 hover:text-white"
                    >
                        <span>Back to top</span>

                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-blue-400/40 group-hover:bg-blue-500/10 group-hover:text-blue-400">
                            <FaArrowUp
                                size={11}
                                className="transition-transform duration-500 group-hover:-translate-y-0.5"
                            />
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;