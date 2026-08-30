"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";

const words = ["Frontend Developer", "Web Designer"];

const HeroSection = () => {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 150);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const currentWord = words[wordIndex];

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    setText(currentWord.substring(0, text.length + 1));

                    if (text.length + 1 === currentWord.length) {
                        setIsDeleting(true);
                    }
                } else {
                    setText(currentWord.substring(0, text.length - 1));

                    if (text.length === 0) {
                        setIsDeleting(false);
                        setWordIndex((prev) => (prev + 1) % words.length);
                    }
                }
            },
            !isDeleting && text.length === currentWord.length
                ? 2500
                : isDeleting
                    ? 80
                    : 130
        );

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex]);

    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden bg-black pt-20"
        >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[140px] animate-pulse" />

            <div className="pointer-events-none absolute inset-0 opacity-30">
                <span className="absolute left-[10%] top-[20%] h-1 w-1 rounded-full bg-white animate-pulse" />
                <span className="absolute left-[20%] top-[70%] h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="absolute right-[15%] top-[25%] h-1 w-1 rounded-full bg-white animate-pulse" />
                <span className="absolute right-[25%] top-[65%] h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="absolute left-[45%] top-[15%] h-1 w-1 rounded-full bg-white animate-pulse" />
                <span className="absolute bottom-[20%] left-[60%] h-1 w-1 rounded-full bg-white animate-pulse" />
            </div>

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 sm:py-24 lg:flex-row lg:gap-8 lg:px-8">

                <div
                    className={`w-full max-w-5xl transition-all duration-[1200ms] ease-out lg:w-[58%] ${
                        isLoaded
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }`}
                >
                    <div
                        className={`mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-sm transition-all duration-1000 ease-out ${
                            isLoaded
                                ? "translate-y-0 opacity-100"
                                : "-translate-y-5 opacity-0"
                        }`}
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                        </span>

                        <span className="text-sm font-medium text-gray-300">
                            Available for freelance work
                        </span>
                    </div>

                    <h1
                        className={`text-3xl font-bold leading-[1.08] tracking-tight text-white transition-all duration-[1200ms] delay-150 ease-out sm:text-4xl md:text-5xl lg:text-6xl ${
                            isLoaded
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                        }`}
                    >
                        Hi, I&apos;m{" "}
                        <span className="relative text-blue-500">
                            Husnain
                            <span className="absolute -bottom-1 left-0 h-px w-0 bg-blue-400 transition-all duration-500 hover:w-full" />
                        </span>

                        <span className="mt-4 block min-h-[1.1em] text-gray-400">
                            {text}
                            <span className="ml-1 inline-block h-[0.85em] w-[2px] translate-y-[2px] animate-pulse bg-blue-500" />
                        </span>
                    </h1>

                    <p
                        className={`mt-7 max-w-2xl text-base leading-7 text-gray-400 transition-all duration-[1200ms] delay-300 ease-out sm:text-lg ${
                            isLoaded
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                        }`}
                    >
                        I create modern, responsive and engaging websites with
                        clean code, thoughtful design and smooth user
                        experiences.
                    </p>

                    <div
                        className={`mt-8 flex flex-wrap items-center gap-4 transition-all duration-[1200ms] delay-500 ease-out ${
                            isLoaded
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                        }`}
                    >
                        <Link
                            href="#portfolio"
                            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-bold text-white transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-500/10 hover:shadow-[0_12px_35px_rgba(59,130,246,0.12)]"
                        >
                            <span className="absolute inset-0 origin-left scale-x-0 bg-blue-500/10 transition-transform duration-700 group-hover:scale-x-100" />

                            <span className="relative z-10">
                                View My Work
                            </span>

                            <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white text-black transition-all duration-500 group-hover:rotate-[-45deg] group-hover:bg-blue-400">
                                <FaArrowRight size={12} />
                            </span>
                        </Link>

                        <a
                            href="/CV/husnain-cv.pdf"
                            download
                            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-bold text-white transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-500/10 hover:shadow-[0_12px_35px_rgba(59,130,246,0.12)]"
                        >
                            <span className="absolute inset-0 origin-left scale-x-0 bg-blue-500/10 transition-transform duration-700 group-hover:scale-x-100" />

                            <span className="relative z-10">
                                Download CV
                            </span>

                            <span className="relative z-10 transition-transform duration-500 group-hover:translate-y-1">
                                <MdOutlineFileDownload size={20} />
                            </span>
                        </a>
                    </div>

                    <div
                        className={`mt-14 flex flex-wrap items-center gap-5 transition-all duration-[1200ms] delay-700 ease-out ${
                            isLoaded
                                ? "translate-y-0 opacity-100"
                                : "translate-y-6 opacity-0"
                        }`}
                    >
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
                            Follow Me
                        </span>

                        <span className="h-px w-8 bg-white/10" />

                        <a
                            href="https://github.com/Syed-husnain-shah"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="group flex items-center gap-2 text-sm text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:text-white"
                        >
                            <FaGithub
                                size={15}
                                className="transition-transform duration-300 group-hover:scale-110"
                            />
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/syed-husnain-shah/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="group flex items-center gap-2 text-sm text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:text-blue-400"
                        >
                            <FaLinkedinIn
                                size={15}
                                className="transition-transform duration-300 group-hover:scale-110"
                            />
                            LinkedIn
                        </a>

                        <a
                            href="https://www.instagram.com/syed_husnain_157"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="group flex items-center gap-2 text-sm text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:text-pink-400"
                        >
                            <FaInstagram
                                size={15}
                                className="transition-transform duration-300 group-hover:scale-110"
                            />
                            Instagram
                        </a>
                    </div>
                </div>

                <div
                    className={`relative flex w-full items-center justify-center lg:w-[42%] lg:justify-end transition-all duration-[1400ms] ease-out ${
                        isLoaded
                            ? "translate-x-0 opacity-100"
                            : "translate-x-16 opacity-0"
                    }`}
                >
                    <div className="relative h-[500px] w-[380px] sm:h-[540px] sm:w-[410px] lg:h-[570px] lg:w-[430px]">

                        <div className="absolute bottom-[7%] left-1/2 h-[310px] w-[310px] -translate-x-1/2 rounded-full bg-white transition-transform duration-700 hover:scale-[1.02] sm:h-[340px] sm:w-[340px] lg:h-[365px] lg:w-[365px]" />

                        <div className="absolute bottom-[7%] left-1/2 h-[310px] w-[310px] -translate-x-1/2 rounded-full border-[7px] border-blue-500 shadow-[0_0_45px_rgba(59,130,246,0.12)] transition-all duration-700 hover:shadow-[0_0_70px_rgba(59,130,246,0.25)] sm:h-[340px] sm:w-[340px] lg:h-[365px] lg:w-[365px]" />

                        <div className="absolute bottom-[7%] left-1/2 z-10 h-[365px] w-[365px] -translate-x-1/2 sm:h-85 sm:w-85 lg:h-91.25 lg:w-91.25">
                            <Image
                                src="/images/husnain.png"
                                alt="Husnain"
                                width={520}
                                height={720}
                                priority
                                sizes="365px"
                                className="absolute bottom-0 left-1/2 h-[145%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom transition-transform duration-1000 ease-out hover:scale-[1.025]"
                            />
                        </div>

                        <div className="pointer-events-none absolute bottom-[2%] left-1/2 h-3 w-56 -translate-x-1/2 rounded-full bg-blue-500/20 blur-xl" />
                    </div>
                </div>
            </div>

            <Link
                href="#about"
                className="group absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:text-white sm:flex"
            >
                <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
                    Scroll
                </span>

                <span className="relative h-10 w-px overflow-hidden bg-white/10">
                    <span className="absolute left-0 top-0 h-1/2 w-full animate-bounce bg-blue-400" />
                </span>
            </Link>
        </section>
    );
};

export default HeroSection;