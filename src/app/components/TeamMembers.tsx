"use client";

import Image from "next/image";
import { useState } from "react";
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

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === teamMembers.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? teamMembers.length - 1 : prev - 1
        );
    };

    const member = teamMembers[currentIndex];

    return (
        <section
            id="team"
            className="relative overflow-hidden bg-[#181a1d] py-24 sm:py-28 lg:py-32"
        >
            <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/[0.04] blur-[120px]" />

            <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-14 text-center sm:mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Team Showcase
                    </h2>

                    <p className="mt-3 text-sm text-gray-400 sm:text-base">
                        Meet the people behind the work
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative mx-auto max-w-4xl">
                    {/* Previous */}
                    <button
                        type="button"
                        onClick={prevSlide}
                        aria-label="Previous team member"
                        className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#24272b] text-gray-300 shadow-xl transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500 hover:text-white sm:h-12 sm:w-12"
                    >
                        <FaChevronLeft size={14} />
                    </button>

                    {/* Main Card */}
                    <div
                        key={member.name}
                        className="overflow-hidden rounded-2xl border border-white/10 bg-[#202327] shadow-2xl"
                    >
                        <div className="grid md:grid-cols-[0.95fr_1.05fr]">
                            {/* Image */}
                            <div className="relative h-[390px] bg-[#e9e9e9] sm:h-[480px] md:h-[500px]">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    priority
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-center px-8 py-10 sm:px-12 md:px-14">
                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                                    Team Member
                                </span>

                                <div className="mt-5 h-px w-10 bg-blue-500" />

                                <h3 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    {member.name}
                                </h3>

                                <p className="mt-3 text-base font-medium text-gray-400">
                                    {member.role}
                                </p>

                                <p className="mt-6 max-w-md text-sm leading-7 text-gray-500">
                                    Passionate about creating modern,
                                    reliable and user-friendly digital
                                    experiences. Focused on clean work,
                                    creative ideas and professional results.
                                </p>

                                {/* Social Icons */}
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

                                {/* Member Counter */}
                                <div className="mt-10 flex items-center gap-4">
                                    <span className="text-xs font-bold text-white">
                                        0{currentIndex + 1}
                                    </span>

                                    <div className="h-px w-16 bg-white/10">
                                        <div
                                            className="h-px bg-blue-500 transition-all duration-500"
                                            style={{
                                                width: `${((currentIndex + 1) /
                                                        teamMembers.length) *
                                                    100
                                                    }%`,
                                            }}
                                        />
                                    </div>

                                    <span className="text-xs text-gray-600">
                                        0{teamMembers.length}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Next */}
                    <button
                        type="button"
                        onClick={nextSlide}
                        aria-label="Next team member"
                        className="absolute right-0 top-1/2 z-20 flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#24272b] text-gray-300 shadow-xl transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500 hover:text-white sm:h-12 sm:w-12"
                    >
                        <FaChevronRight size={14} />
                    </button>
                </div>

                {/* Dots */}
                <div className="mt-8 flex justify-center gap-2">
                    {teamMembers.map((item, index) => (
                        <button
                            key={item.name}
                            type="button"
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Show ${item.name}`}
                            className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === index
                                    ? "w-8 bg-blue-500"
                                    : "w-2 bg-gray-600 hover:bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamMembers;