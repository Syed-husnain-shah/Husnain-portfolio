"use client";

import Image from "next/image";
import Link from "next/link";
import {
    FaGithub,
    FaLinkedinIn,
    FaArrowUp,
    FaHeart,
} from "react-icons/fa";

const Footer = () => {
    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About Me", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Resume", href: "#resume" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-black">
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/[0.05] blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                {/* Main Footer */}
                <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-20">

                    {/* Brand */}
                    <div>
                        <Link
                            href="#home"
                            className="relative block h-12 w-36"
                        >
                            <Image
                                src="/logo/husnain.png"
                                alt="Husnain Logo"
                                fill
                                sizes="144px"
                                className="object-contain object-left"
                            />
                        </Link>

                        <p className="mt-6 max-w-md text-sm leading-7 text-gray-500">
                            Frontend Developer and Web Designer creating modern,
                            responsive and user-friendly digital experiences with
                            clean code and thoughtful design.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-7 flex items-center gap-3">
                            <a
                                href="https://github.com/Syed-husnain-shah"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
                            >
                                <FaGithub size={17} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/syed-husnain-shah/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
                            >
                                <FaLinkedinIn size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                            Navigation
                        </h3>

                        <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="group flex items-center gap-2 text-sm text-gray-500 transition-colors duration-300 hover:text-white"
                                >
                                    <span className="h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-3" />
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Let's Work Together */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                            Let&apos;s Work Together
                        </h3>

                        <p className="mt-6 text-sm leading-7 text-gray-500">
                            Have a project in mind? Let&apos;s build something
                            modern, professional and meaningful together.
                        </p>

                        <Link
                            href="#contact"
                            className="group mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10"
                        >
                            Get In Touch

                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black transition-all duration-300 group-hover:rotate-[-45deg]">
                                →
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col gap-5 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">

                    <p className="flex items-center gap-1.5 text-xs text-gray-600">
                        © {new Date().getFullYear()} Husnain. Made with
                        <FaHeart className="text-red-500" size={10} />
                        and clean code.
                    </p>

                    <Link
                        href="#home"
                        className="group flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-gray-600 transition-colors duration-300 hover:text-white"
                    >
                        Back to top

                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-400/40 group-hover:text-blue-400">
                            <FaArrowUp size={11} />
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;