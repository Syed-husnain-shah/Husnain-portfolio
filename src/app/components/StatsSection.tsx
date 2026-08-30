"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
    {
        number: 191,
        label: "Happy Clients",
    },
    {
        number: 221,
        label: "Successful Projects",
    },
    {
        number: 89,
        label: "UI / UX Projects",
    },
    {
        number: 33,
        label: "Team Members",
    },
];

const StatsSection = () => {
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
                threshold: 0.2,
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative isolate overflow-hidden bg-black py-20 sm:py-24 lg:py-28"
        >
            {/* Background Image */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/counter-bg.jpg')",
                    transform: "scale(1.08)",
                    willChange: "transform",
                }}
            />

            {/* Dark Overlay */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-[5] bg-black/30"
            />

            {/* Gradient Overlay */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-[4] bg-gradient-to-b from-black/10 via-black/15 to-black/35"
            />

            {/* Soft Blue Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 -z-[3] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-[120px]"
            />

            {/* Stats */}
            <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-0">
                    {stats.map((stat, index) => (
                        <StatItem
                            key={stat.label}
                            number={stat.number}
                            label={stat.label}
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const StatItem = ({
    number,
    label,
    index,
    isVisible,
}: {
    number: number;
    label: string;
    index: number;
    isVisible: boolean;
}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) {
            setCount(0);
            return;
        }

        let startTime: number | null = null;
        let animationFrame: number;

        const duration = 1800;

        const animate = (currentTime: number) => {
            if (startTime === null) {
                startTime = currentTime;
            }

            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );

            const easedProgress =
                1 - Math.pow(1 - progress, 4);

            setCount(Math.floor(number * easedProgress));

            if (progress < 1) {
                animationFrame =
                    requestAnimationFrame(animate);
            } else {
                setCount(number);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [isVisible, number]);

    return (
        <div
            className={`group relative flex items-center justify-center transition-all duration-1000 ease-out ${
                isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
            }`}
            style={{
                transitionDelay: `${index * 150}ms`,
            }}
        >
            {/* Divider */}
            {index !== 0 && (
                <div className="absolute left-0 top-1/2 hidden h-16 -translate-y-1/2 border-l border-white/20 sm:block" />
            )}

            {/* Stat */}
            <div className="relative flex w-full flex-col items-center justify-center px-4 py-6 text-center transition-all duration-500 group-hover:-translate-y-2">
                {/* Glow */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/0 blur-2xl transition-all duration-500 group-hover:bg-blue-400/10" />

                {/* Number */}
                <div className="relative overflow-hidden">
                    <span
                        className={`block text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] transition-all duration-700 sm:text-5xl lg:text-[52px] ${
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                        }`}
                    >
                        {count}
                        <span className="ml-1 text-blue-400">
                            +
                        </span>
                    </span>
                </div>

                {/* Label */}
                <span
                    className={`relative mt-3 block text-xs font-medium uppercase tracking-[0.12em] text-white/85 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)] transition-all duration-700 sm:text-sm ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                    }`}
                    style={{
                        transitionDelay: `${index * 150 + 200}ms`,
                    }}
                >
                    {label}
                </span>
            </div>
        </div>
    );
};

export default StatsSection;