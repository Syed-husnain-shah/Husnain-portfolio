"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
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
        linkedin:
            "https://www.linkedin.com/in/faizan-mughal-946b9b414/",
        instagram:
            "https://www.instagram.com/savagesoul._1/?hl=en",
    },
];

const TeamMembers = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<"next" | "prev">("next");
    const [isAnimating, setIsAnimating] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const sectionRef = useRef<HTMLElement | null>(null);
    const animationTimeoutRef = useRef<ReturnType<
        typeof setTimeout
    > | null>(null);


    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

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

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const changeMember = useCallback(
        (newIndex: number, newDirection: "next" | "prev") => {
            if (isAnimating || newIndex === currentIndex) return;

            setDirection(newDirection);
            setIsAnimating(true);

            animationTimeoutRef.current = setTimeout(() => {
                setCurrentIndex(newIndex);
                setIsAnimating(false);
            }, 450);
        },
        [currentIndex, isAnimating]
    );


    const nextMember = useCallback(() => {
        const newIndex =
            currentIndex === teamMembers.length - 1
                ? 0
                : currentIndex + 1;

        changeMember(newIndex, "next");
    }, [currentIndex, changeMember]);

    const previousMember = useCallback(() => {
        const newIndex =
            currentIndex === 0
                ? teamMembers.length - 1
                : currentIndex - 1;

        changeMember(newIndex, "prev");
    }, [currentIndex, changeMember]);


    useEffect(() => {
        if (!isVisible) return;

        const timer = setInterval(() => {
            nextMember();
        }, 5000);

        return () => clearInterval(timer);
    }, [isVisible, nextMember]);


    useEffect(() => {
        return () => {
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current);
            }
        };
    }, []);

    const member = teamMembers[currentIndex];

    return (
        <section
            ref={sectionRef}
            id="team"
            className="relative overflow-hidden bg-[#181a1d] py-24 sm:py-28 lg:py-32"
        >
            {/* Background Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.045] blur-[120px]"
            />

            {/* Bottom Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-blue-500/[0.025] blur-[120px]"
            />

            <div className="relative mx-auto max-w-6xl px-6 lg:px-8">


                <div
                    className={`mb-14 text-center transition-all duration-1000 ease-out sm:mb-16 ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                    }`}
                >
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

                <div
                    className={`relative mx-auto max-w-4xl px-1 pb-12 transition-all delay-150 duration-1000 ease-out sm:px-8 ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-12 opacity-0"
                    }`}
                >
                    {/* Card Wrapper */}

                    <div className="relative overflow-hidden rounded-3xl">
                        <div
                            className={`transition-all duration-[450ms] ease-in-out ${
                                isAnimating
                                    ? direction === "next"
                                        ? "-translate-x-10 scale-[0.985] opacity-0"
                                        : "translate-x-10 scale-[0.985] opacity-0"
                                    : "translate-x-0 scale-100 opacity-100"
                            }`}
                        >
                            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#202327] shadow-[0_25px_80px_rgba(0,0,0,0.35)] transition-all duration-700 hover:border-blue-400/20 hover:shadow-[0_30px_100px_rgba(0,0,0,0.45)]">

                                <div className="grid md:grid-cols-[0.9fr_1.1fr]">


                                    <div className="relative h-[380px] overflow-hidden bg-[#e9e9e9] sm:h-[460px] md:h-[500px]">
                                        <Image
                                            src={member.image}
                                            alt={`${member.name} - ${member.role}`}
                                            fill
                                            priority={currentIndex === 0}
                                            sizes="(max-width: 768px) 100vw, 45vw"
                                            className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                                        />

                                        {/* Image Gradient */}

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                        {/* Image Glow */}

                                        <div className="pointer-events-none absolute inset-0 bg-blue-500/0 transition-all duration-700 group-hover:bg-blue-500/[0.025]" />

                                        {/* Image Number */}

                                        <div className="absolute bottom-5 left-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xs font-semibold text-white backdrop-blur-md">
                                            0{currentIndex + 1}
                                        </div>
                                    </div>

                                 

                                    <div className="flex flex-col justify-center px-7 py-10 sm:px-10 md:px-12">

                                        <span className="w-fit rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
                                            Team Member
                                        </span>

                                        <h3 className="mt-5 text-3xl font-bold tracking-tight text-white transition-colors duration-500 group-hover:text-blue-50 sm:text-4xl">
                                            {member.name}
                                        </h3>

                                        <p className="mt-2 text-sm font-medium text-blue-400">
                                            {member.role}
                                        </p>

                                        {/* Animated Line */}

                                        <div className="mt-5 h-px w-12 bg-blue-500 transition-all duration-700 group-hover:w-20" />

                                        <p className="mt-6 max-w-md text-sm leading-7 text-gray-500">
                                            Passionate about creating modern,
                                            reliable and user-friendly digital
                                            experiences. Focused on clean work,
                                            creative ideas and professional
                                            results.
                                        </p>

                                        {/* Social Links */}

                                        <div className="mt-8 flex gap-3">
                                            {/* GitHub */}

                                            <SocialLink
                                                href={member.github}
                                                label={`${member.name} GitHub`}
                                                className="hover:border-white/30 hover:bg-white hover:text-black"
                                            >
                                                <FaGithub size={16} />
                                            </SocialLink>

                                            {/* LinkedIn */}

                                            <SocialLink
                                                href={member.linkedin}
                                                label={`${member.name} LinkedIn`}
                                                className="hover:border-blue-400/50 hover:bg-blue-500 hover:text-white"
                                            >
                                                <FaLinkedinIn size={16} />
                                            </SocialLink>

                                            {/* Instagram */}

                                            <SocialLink
                                                href={member.instagram}
                                                label={`${member.name} Instagram`}
                                                className="hover:border-pink-400/50 hover:bg-pink-500 hover:text-white"
                                            >
                                                <FaInstagram size={16} />
                                            </SocialLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={previousMember}
                        disabled={isAnimating}
                        aria-label="Previous team member"
                        className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#202327]/90 text-gray-400 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-blue-400/40 hover:bg-blue-500 hover:text-white disabled:pointer-events-none disabled:opacity-50 sm:left-1"
                    >
                        <FaChevronLeft size={14} />
                    </button>


                    <button
                        type="button"
                        onClick={nextMember}
                        disabled={isAnimating}
                        aria-label="Next team member"
                        className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#202327]/90 text-gray-400 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-blue-400/40 hover:bg-blue-500 hover:text-white disabled:pointer-events-none disabled:opacity-50 sm:right-1"
                    >
                        <FaChevronRight size={14} />
                    </button>


                    <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2">
                        {teamMembers.map((item, index) => (
                            <button
                                key={item.name}
                                type="button"
                                onClick={() =>
                                    changeMember(
                                        index,
                                        index > currentIndex
                                            ? "next"
                                            : "prev"
                                    )
                                }
                                disabled={isAnimating}
                                aria-label={`Show ${item.name}`}
                                aria-current={
                                    index === currentIndex
                                        ? "true"
                                        : undefined
                                }
                                className={`h-1.5 rounded-full transition-all duration-500 disabled:pointer-events-none ${
                                    index === currentIndex
                                        ? "w-8 bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]"
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


const SocialLink = ({
    href,
    label,
    className,
    children,
}: {
    href: string;
    label: string;
    className: string;
    children: React.ReactNode;
}) => {
    const isDisabled = href === "#";

    return (
        <a
            href={isDisabled ? undefined : href}
            target={isDisabled ? undefined : "_blank"}
            rel={isDisabled ? undefined : "noopener noreferrer"}
            aria-label={label}
            aria-disabled={isDisabled}
            onClick={(event) => {
                if (isDisabled) {
                    event.preventDefault();
                }
            }}
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 ${
                isDisabled
                    ? "cursor-not-allowed opacity-40"
                    : `hover:-translate-y-1 ${className}`
            }`}
        >
            {children}
        </a>
    );
};

export default TeamMembers;