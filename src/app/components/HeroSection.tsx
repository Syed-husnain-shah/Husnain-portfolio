"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
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
                    ? 90
                    : 140
        );

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex]);

    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden bg-black pt-20"
        >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[140px]" />

            <div className="pointer-events-none absolute inset-0 opacity-40">
                <span className="absolute left-[10%] top-[20%] h-1 w-1 rounded-full bg-white" />
                <span className="absolute left-[20%] top-[70%] h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span className="absolute right-[15%] top-[25%] h-1 w-1 rounded-full bg-white" />
                <span className="absolute right-[25%] top-[65%] h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span className="absolute left-[45%] top-[15%] h-1 w-1 rounded-full bg-white" />
                <span className="absolute bottom-[20%] left-[60%] h-1 w-1 rounded-full bg-white" />
            </div>

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-10 px-6 py-20 sm:py-24 lg:flex-row lg:gap-0 lg:px-8">

                <div
                    className={`w-full max-w-5xl transition-all duration-[1200ms] ease-out lg:w-[58%] ${isLoaded
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        }`}
                >
                    <div
                        className={`mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-sm transition-all duration-1000 ease-out ${isLoaded
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
                        className={`text-3xl font-bold leading-[1.08] tracking-tight text-white transition-all duration-[1200ms] delay-150 ease-out sm:text-4xl md:text-5xl lg:text-6xl ${isLoaded
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                            }`}
                    >
                        Hi, I&apos;m{" "}
                        <span className="text-blue-500">Husnain</span>

                        <span className="mt-4 block min-h-[1.1em] text-gray-400">
                            {text}
                            <span className="ml-1 inline-block h-[0.85em] w-[2px] translate-y-[2px] animate-pulse bg-blue-500" />
                        </span>
                    </h1>

                    <p
                        className={`mt-7 max-w-2xl text-base leading-7 text-gray-400 transition-all duration-[1200ms] delay-300 ease-out sm:text-lg ${isLoaded
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                            }`}
                    >
                        I create modern, responsive and engaging websites with
                        clean code, thoughtful design and smooth user
                        experiences.
                    </p>

                    <div
                        className={`mt-8 flex flex-wrap items-center gap-4 transition-all duration-[1200ms] delay-500 ease-out ${isLoaded
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                            }`}
                    >
                        <Link
                            href="#portfolio"
                            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-500/10 hover:shadow-[0_10px_35px_rgba(59,130,246,0.18)]"
                        >
                            <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100" />

                            <span className="relative z-10 transition-colors duration-500 group-hover:text-blue-100">
                                View My Work
                            </span>

                            <span className="relative z-10 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-white text-black transition-all duration-500 group-hover:rotate-[-45deg] group-hover:scale-110 group-hover:bg-black group-hover:text-white">
                                <FaArrowRight />
                            </span>
                        </Link>

                        <a
                            href="#"
                            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-500/10 hover:shadow-[0_10px_35px_rgba(59,130,246,0.18)]"
                        >
                            <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100" />

                            <span className="relative z-10 transition-colors duration-500 group-hover:text-blue-100">
                                Download CV
                            </span>

                            <span className="relative z-10 flex h-5 w-5 items-center justify-center overflow-hidden">
                                <span className="transition-all duration-500 ease-out group-hover:-translate-y-6 group-hover:opacity-0">
                                    <MdOutlineFileDownload size={20} />
                                </span>

                                <span className="absolute translate-y-6 text-blue-400 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                                    <MdOutlineFileDownload size={20} />
                                </span>
                            </span>
                        </a>
                    </div>

                    <div
                        className={`mt-14 flex items-center gap-6 transition-all duration-[1200ms] delay-700 ease-out ${isLoaded
                                ? "translate-y-0 opacity-100"
                                : "translate-y-6 opacity-0"
                            }`}
                    >
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
                            Follow Me
                        </span>

                        <div className="h-px w-10 bg-white/10" />

                        <a
                            href="https://github.com/Syed-husnain-shah"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-500 transition-colors duration-300 hover:text-white"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/syed-husnain-shah/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-500 transition-colors duration-300 hover:text-white"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div
                    className={`relative flex w-full items-center justify-center transition-all duration-[1500ms] delay-300 ease-out lg:w-[42%] lg:justify-end ${isLoaded
                            ? "translate-x-0 scale-100 opacity-100"
                            : "translate-x-10 scale-[0.96] opacity-0"
                        }`}
                >
                    <div className="absolute right-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-blue-600/[0.12] blur-[120px]" />

                    <div className="relative flex h-[520px] w-[390px] items-center justify-center sm:h-[620px] sm:w-[460px] lg:h-[700px] lg:w-[520px]">
                        <div className="absolute inset-x-[5%] bottom-[8%] h-[80%] rounded-[45%] bg-blue-500/[0.04] blur-[60px]" />

                        <div className="absolute right-[8%] top-[15%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_25px_rgba(59,130,246,1)]" />

                        <div className="absolute left-[7%] top-[30%] h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_0_15px_rgba(255,255,255,0.8)]" />

                        <Image
                            src="/images/husnain.png"
                            alt="Husnain"
                            width={700}
                            height={900}
                            priority
                            sizes="(max-width: 640px) 390px, (max-width: 1024px) 460px, 520px"
                            className="relative z-10 h-[115%] w-auto max-w-none object-contain object-center drop-shadow-[0_25px_60px_rgba(0,0,0,0.65)]"
                        />
                    </div>
                </div>
            </div>

            <Link
                href="#about"
                className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-gray-500 transition-colors duration-300 hover:text-white sm:flex"
            >
                <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
                    Scroll
                </span>

                <span className="h-10 w-px bg-gradient-to-b from-gray-500 to-transparent" />
            </Link>
        </section>
    );
};

export default HeroSection;