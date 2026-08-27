"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

const teamMembers = [
    {
        name: "Kashan Shah",
        role: "Full Stack Developer",
        image: "/images/kashan.jpeg",
        github: "https://github.com/Syed-husnain-shah",
        linkedin: "https://www.linkedin.com/in/kashan-shah-dev/",
        instagram: "https://www.instagram.com/syed.kashan.shah/?hl=en",
    },
    {
        name: "Umar Rajput",
        role: "Web Developer",
        image: "/images/umer.png",
        github: "#",
        linkedin: "https://www.linkedin.com/in/umardomore/",
        instagram: "#",
    },
    {
        name: "Faizan Mughal",
        role: "UX/UI Designer",
        image: "/images/faizan.png",
        github: "https://github.com/Faizan-Mughal-23",
        linkedin: "https://www.linkedin.com/in/faizan-mughal-946b9b414/",
        instagram: "https://www.instagram.com/savagesoul._1/?hl=en",
    },
    {
        name: "Hanan Nazeer",
        role: "Flutter Developer",
        image: "/images/team-4.jpg",
        github: "#",
        linkedin: "#",
        instagram: "#",
    },
];

const TeamMembers = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<"next" | "prev">("next");
    const [isAnimating, setIsAnimating] = useState(false);

    const changeMember = (newIndex: number, newDirection: "next" | "prev") => {
        if (isAnimating) return;

        setDirection(newDirection);
        setIsAnimating(true);

        setTimeout(() => {
            setCurrentIndex(newIndex);
            setIsAnimating(false);
        }, 450);
    };

    const nextMember = () => {
        const newIndex =
            currentIndex === teamMembers.length - 1
                ? 0
                : currentIndex + 1;

        changeMember(newIndex, "next");
    };

    const previousMember = () => {
        const newIndex =
            currentIndex === 0
                ? teamMembers.length - 1
                : currentIndex - 1;

        changeMember(newIndex, "prev");
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextMember();
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex, isAnimating]);

    const member = teamMembers[currentIndex];

    return (
        <section
            id="team"
            className="relative overflow-hidden bg-[#181a1d] py-24 sm:py-28 lg:py-32"
        >
            <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

            <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

                <div className="mb-14 text-center sm:mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
                        Our Team
                    </span>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Team Showcase
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
                        Meet the talented people behind our creative work.
                    </p>
                </div>

                <div className="relative mx-auto max-w-4xl px-2 pb-12 sm:px-8">

                    <div className="relative overflow-hidden rounded-3xl">

                        <div
                            className={`transition-all duration-450 ease-in-out ${
                                isAnimating
                                    ? direction === "next"
                                        ? "-translate-x-8 opacity-0"
                                        : "translate-x-8 opacity-0"
                                    : "translate-x-0 opacity-100"
                            }`}
                        >
                            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#202327] shadow-[0_25px_80px_rgba(0,0,0,0.35)] transition-all duration-700 hover:border-white/15 hover:shadow-[0_30px_90px_rgba(0,0,0,0.45)]">

                                <div className="grid md:grid-cols-[0.9fr_1.1fr]">

                                    <div className="relative h-95 overflow-hidden bg-[#e9e9e9] sm:h-115 md:h-125">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            priority
                                            className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                                            sizes="(max-width: 768px) 100vw, 45vw"
                                        />

                                        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

                                        <div className="pointer-events-none absolute inset-0 bg-blue-500/0 transition-colors duration-700 group-hover:bg-blue-500/[0.025]" />
                                    </div>

                                    <div className="flex flex-col justify-center px-7 py-10 sm:px-10 md:px-12">

                                        <span className="w-fit rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
                                            Team Member
                                        </span>

                                        <h3 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                            {member.name}
                                        </h3>

                                        <p className="mt-2 text-sm font-medium text-blue-400">
                                            {member.role}
                                        </p>

                                        <div className="mt-5 h-px w-12 bg-blue-500 transition-all duration-700 group-hover:w-20" />

                                        <p className="mt-6 max-w-md text-sm leading-7 text-gray-500">
                                            Passionate about creating modern,
                                            reliable and user-friendly digital
                                            experiences. Focused on clean work,
                                            creative ideas and professional results.
                                        </p>

                                        <div className="mt-8 flex gap-3">

                                            <a
                                                href={member.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${member.name} GitHub`}
                                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white hover:text-black"
                                            >
                                                <FaGithub size={16} />
                                            </a>

                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${member.name} LinkedIn`}
                                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500 hover:text-white"
                                            >
                                                <FaLinkedinIn size={16} />
                                            </a>

                                            <a
                                                href={member.instagram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${member.name} Instagram`}
                                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/50 hover:bg-pink-500 hover:text-white"
                                            >
                                                <FaInstagram size={16} />
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Previous Button */}
                    <button
                        type="button"
                        onClick={previousMember}
                        disabled={isAnimating}
                        aria-label="Previous team member"
                        className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#202327]/90 text-gray-400 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-white/20 hover:bg-white hover:text-black disabled:pointer-events-none sm:left-1"
                    >
                        <FaChevronLeft size={14} />
                    </button>

                    {/* Next Button */}
                    <button
                        type="button"
                        onClick={nextMember}
                        disabled={isAnimating}
                        aria-label="Next team member"
                        className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#202327]/90 text-gray-400 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-white/20 hover:bg-white hover:text-black disabled:pointer-events-none sm:right-1"
                    >
                        <FaChevronRight size={14} />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2">
                        {teamMembers.map((item, index) => (
                            <button
                                key={item.name}
                                type="button"
                                onClick={() =>
                                    changeMember(
                                        index,
                                        index > currentIndex ? "next" : "prev"
                                    )
                                }
                                aria-label={`Show ${item.name}`}
                                className={`h-1.5 rounded-full transition-all duration-500 ${
                                    index === currentIndex
                                        ? "w-8 bg-blue-400"
                                        : "w-1.5 bg-white/20 hover:bg-white/40"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamMembers;