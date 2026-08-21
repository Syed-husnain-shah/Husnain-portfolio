"use client";

import {
    FaCode,
    FaDesktop,
    FaMobileAlt,
    FaPaintBrush,
    FaReact,
    FaRocket,
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
    return (
        <section
            id="services"
            className="relative overflow-hidden bg-[#181a1d] py-24 sm:py-28 lg:py-32"
        >
            <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/[0.035] blur-[120px]" />

            <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        What I&apos;m Doing
                    </h2>

                    <p className="mt-3 text-sm text-gray-400">
                        Turning ideas into modern digital experiences
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-1 border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.title}
                                className={`group flex min-h-[250px] flex-col items-center justify-center px-6 py-10 text-center transition-all duration-500 hover:bg-white/[0.015] ${index % 3 !== 2
                                        ? "lg:border-r lg:border-white/10"
                                        : ""
                                    } ${index % 2 !== 1
                                        ? "sm:border-r sm:border-white/10 lg:border-r-0"
                                        : ""
                                    } ${index < 3
                                        ? "lg:border-b lg:border-white/10"
                                        : ""
                                    } ${index < 4
                                        ? "sm:border-b sm:border-white/10 lg:border-b-0"
                                        : ""
                                    }`}
                            >
                                <div className="mb-5 flex h-12 items-center justify-center">
                                    <Icon
                                        size={38}
                                        className="text-orange-400 transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-orange-300"
                                    />
                                </div>

                                <h3 className="text-base font-bold text-white">
                                    {service.title}
                                </h3>

                                <p className="mt-4 max-w-[310px] text-sm leading-6 text-gray-400">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhatIDo;