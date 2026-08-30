"use client";

import { useEffect, useRef, useState } from "react";
import {
    FaCode,
    FaDesktop,
    FaMobileAlt,
    FaPaintBrush,
    FaReact,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const services = [
    {
        title: "Web Design",
        description:
            "Creating modern, clean and visually engaging website designs with a strong focus on user experience.",
        icon: FaPaintBrush,
    },
    {
        title: "Frontend Development",
        description:
            "Building fast, interactive and maintainable frontend interfaces using modern web technologies.",
        icon: FaCode,
    },
    {
        title: "Responsive Design",
        description:
            "Creating websites that look and work perfectly across desktops, tablets and mobile devices.",
        icon: FaMobileAlt,
    },
    {
        title: "React Development",
        description:
            "Developing dynamic and reusable user interfaces with React and component-based architecture.",
        icon: FaReact,
    },
    {
        title: "Next.js Development",
        description:
            "Building modern, scalable and performance-focused websites with Next.js and React.",
        icon: SiNextdotjs,
    },
    {
        title: "UI Implementation",
        description:
            "Turning designs and ideas into polished, responsive and pixel-focused web interfaces.",
        icon: FaDesktop,
    },
];

const WhatIDo = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

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

    return (
        <section
            ref={sectionRef}
            id="services"
            className="relative overflow-hidden bg-[#181a1d] py-24 sm:py-28 lg:py-32"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/[0.035] blur-[120px]" />

            <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

                {/* Heading */}
                <div
                    className={`text-center transition-all duration-1000 ease-out ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }`}
                >
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        What I&apos;m Doing
                    </h2>

                    <p className="mt-3 text-sm text-gray-400">
                        Turning ideas into modern digital experiences
                    </p>
                </div>

                {/* Services */}
                <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.title}
                                className={`group relative min-h-[250px] overflow-hidden rounded-2xl border border-white/10 bg-[#1d2023] px-6 py-10 text-center transition-all duration-700 ease-out hover:-translate-y-2 hover:border-blue-400/30 hover:bg-[#202327] hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] ${
                                    isVisible
                                        ? "translate-y-0 scale-100 opacity-100"
                                        : "translate-y-12 scale-[0.96] opacity-0"
                                }`}
                                style={{
                                    transitionDelay: `${index * 100}ms`,
                                }}
                            >
                                {/* Hover Glow */}
                                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/[0.08] blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                                {/* Icon */}
                                <div className="relative mb-6 flex h-14 items-center justify-center">
                                    <div className="absolute h-12 w-12 rounded-full bg-blue-500/[0.06] blur-xl transition-all duration-500 group-hover:h-16 group-hover:w-16 group-hover:bg-blue-500/[0.12]" />

                                    <Icon
                                        size={38}
                                        className="relative text-blue-400 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110 group-hover:text-blue-300"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover:text-blue-300">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="mx-auto mt-4 max-w-[310px] text-sm leading-6 text-gray-400 transition-colors duration-500 group-hover:text-gray-300">
                                    {service.description}
                                </p>

                                {/* Bottom Accent */}
                                <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-blue-400 transition-all duration-500 group-hover:w-20" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhatIDo;