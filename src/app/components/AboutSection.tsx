"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaCode, FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const skills = [
    {
        name: "HTML",
        percentage: 95,
        icon: FaHtml5,
    },
    {
        name: "CSS",
        percentage: 90,
        icon: FaCss3Alt,
    },
    {
        name: "JavaScript",
        percentage: 85,
        icon: FaJs,
    },
    {
        name: "React",
        percentage: 85,
        icon: FaReact,
    },
    {
        name: "Next.js",
        percentage: 80,
        icon: SiNextdotjs,
    },
];

const AboutSection = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.2,
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative overflow-hidden bg-[#181a1d] py-24 sm:py-28 lg:py-32"
        >
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/[0.04] blur-[120px]" />

            <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
                <div
                    className={`mb-12 text-center transition-all duration-1000 ease-out sm:mb-16 ${isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        }`}
                >
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        About Me
                    </h2>

                    <p className="mt-3 text-sm text-gray-400">
                        Get to know me and my development skills
                    </p>
                </div>

                <div className="grid overflow-hidden lg:grid-cols-[1fr_1.05fr]">
                    <div
                        className={`relative min-h-[450px] overflow-hidden bg-[#1b1e22] transition-all duration-1000 ease-out sm:min-h-[540px] lg:min-h-[580px] ${isVisible
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-16 opacity-0"
                            }`}
                    >
                        <Image
                            src="/images/husnain.png"
                            alt="Husnain"
                            width={700}
                            height={900}
                            priority
                            className="absolute bottom-0 left-1/2 h-[115%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    <div
                        className={`bg-[#181a1d] px-7 py-10 transition-all delay-150 duration-1000 ease-out sm:px-10 lg:px-12 lg:py-8 ${isVisible
                                ? "translate-x-0 opacity-100"
                                : "translate-x-16 opacity-0"
                            }`}
                    >
                        <div>
                            <div className="mb-2 inline-flex flex-col">
                                <span className="text-xs font-bold uppercase text-white">
                                    Intro
                                </span>

                                <span className="mt-2 h-px w-9 bg-blue-500" />
                            </div>

                            <h3 className="mt-6 text-2xl font-medium leading-tight text-white sm:text-3xl">
                                Hi, my name is{" "}
                                <span className="text-blue-400">Husnain.</span>
                            </h3>

                            <p className="mt-5 text-sm font-semibold leading-6 text-gray-300">
                                I&apos;m a Frontend Developer and Web Designer
                                focused on building modern, responsive and
                                user-friendly websites.
                            </p>

                            <p className="mt-5 text-sm leading-7 text-gray-500">
                                I enjoy turning ideas into clean digital
                                experiences using modern web technologies. My
                                focus is on writing reusable code, creating
                                responsive layouts and building interfaces that
                                feel smooth and professional.
                            </p>
                        </div>

                        <div className="mt-9">
                            <div className="mb-2 inline-flex flex-col">
                                <span className="text-xs font-bold uppercase text-white">
                                    Skills
                                </span>

                                <span className="mt-2 h-px w-9 bg-blue-500" />
                            </div>

                            <div className="mt-7 space-y-5">
                                {skills.map((skill, index) => {
                                    const Icon = skill.icon;

                                    return (
                                        <div
                                            key={skill.name}
                                            className={`transition-all duration-700 ease-out ${isVisible
                                                    ? "translate-x-0 opacity-100"
                                                    : "translate-x-8 opacity-0"
                                                }`}
                                            style={{
                                                transitionDelay: isVisible
                                                    ? `${350 + index * 120}ms`
                                                    : "0ms",
                                            }}
                                        >
                                            <div className="mb-2 flex items-center justify-between">
                                                <div className="flex items-center gap-2.5">
                                                    <Icon
                                                        size={15}
                                                        className="text-blue-400"
                                                    />

                                                    <span className="text-xs font-medium text-gray-300">
                                                        {skill.name}
                                                    </span>
                                                </div>

                                                <span
                                                    className={`text-xs text-gray-400 transition-opacity duration-700 ${isVisible
                                                            ? "opacity-100"
                                                            : "opacity-0"
                                                        }`}
                                                >
                                                    {skill.percentage}%
                                                </span>
                                            </div>

                                            <div className="h-px w-full bg-gray-600">
                                                <div
                                                    className="h-px bg-blue-500 transition-[width] duration-[1400ms] ease-out"
                                                    style={{
                                                        width: isVisible
                                                            ? `${skill.percentage}%`
                                                            : "0%",
                                                        transitionDelay: isVisible
                                                            ? `${500 + index * 150}ms`
                                                            : "0ms",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div
                            className={`mt-10 flex flex-wrap gap-3 transition-all duration-700 ${isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-5 opacity-0"
                                }`}
                            style={{
                                transitionDelay: isVisible ? "1050ms" : "0ms",
                            }}
                        >
                            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-400">
                                <FaCode className="text-blue-400" />
                                Clean Code
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-400">
                                <FaReact className="text-blue-400" />
                                Responsive UI
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;