"use client";

import Image from "next/image";
import Link from "next/link";
import {
    FaArrowRight,
    FaArrowUp,
    FaGithub,
    FaHeart,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
    const links = [
        { name: "Home", href: "#home" },
        { name: "About Me", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Resume", href: "#resume" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-black">
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/4 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-20">

                    {/* Logo / About */}
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
                        <div className="mt-7 flex gap-3">

                            {/* GitHub */}
                            <a
                                href="https://github.com/Syed-husnain-shah"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/3 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
                            >
                                <FaGithub size={17} />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/syed-husnain-shah/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/3 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
                            >
                                <FaLinkedinIn size={16} />
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/syed_husnain_157?igsi=czhnZGg3b2Ezb3ps"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/3 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/40 hover:bg-pink-500/10 hover:text-white"
                            >
                                <FaInstagram size={17} />
                            </a>

                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                            Quick Links
                        </h3>

                        <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4">
                            {links.map((link) => (
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

                    {/* CTA */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                            Let&apos;s Work Together
                        </h3>

                        <p className="mt-6 text-sm leading-7 text-gray-500">
                            Have an idea or project? Let&apos;s create something
                            modern and professional together.
                        </p>
                        <Link
                            href="#contact"
                            className="group relative inline-flex mt-4 items-center justify-center gap-3 overflow-hidden rounded-full border border-white/15 bg-white/3 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-500/10 hover:shadow-[0_10px_35px_rgba(59,130,246,0.18)]"
                        >
                            <span className="absolute inset-0 origin-left scale-x-0 bg-linear-to-r from-blue-500/20 via-blue-400/10 to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100" />

                            <span className="relative z-10 transition-colors duration-500 group-hover:text-blue-100">
                                Get In Touch
                            </span>

                            <span className="relative z-10 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-white text-black transition-all duration-500 group-hover:-rotate-45 group-hover:scale-110 group-hover:bg-black group-hover:text-white">
                                <FaArrowRight />
                            </span>
                        </Link>
                        
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col gap-5 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">

                    <p className="flex items-center gap-1.5 text-xs text-gray-600">
                        © {new Date().getFullYear()} Husnain. Made with
                        <FaHeart
                            size={10}
                            className="text-red-500"
                        />
                        and clean code.
                    </p>

                    <Link
                        href="#home"
                        className="group flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-gray-600 transition-colors duration-300 hover:text-white"
                    >
                        Back to top

                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/3 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-400/40 group-hover:text-blue-400">
                            <FaArrowUp size={11} />
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;