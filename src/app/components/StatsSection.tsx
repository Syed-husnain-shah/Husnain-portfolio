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
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.25,
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative isolate overflow-hidden bg-black py-24 sm:py-28 lg:py-32"
        >
            {/* Background Image */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/counter-bg.jpg')",
                    transform: `translateY(${scrollY * 0.08}px) scale(1.08)`,
                    willChange: "transform",
                }}
            />

            {/* Light Dark Overlay */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-[5] bg-black/35"
            />

            {/* Light Gradient Overlay */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-[4] bg-gradient-to-b from-black/10 via-black/25 to-black/45"
            />

            <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-4 sm:gap-y-0">
                    {stats.map((stat) => (
                        <StatItem
                            key={stat.label}
                            number={stat.number}
                            label={stat.label}
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
    isVisible,
}: {
    number: number;
    label: string;
    isVisible: boolean;
}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) {
            setCount(0);
            return;
        }

        let startTime: number | null = null;
        const duration = 1800;

        const animate = (currentTime: number) => {
            if (!startTime) {
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
                requestAnimationFrame(animate);
            } else {
                setCount(number);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, number]);

    return (
        <div className="group flex flex-col items-center justify-center px-4 text-center">
            <div className="overflow-hidden">
                <span
                    className={`block text-4xl font-bold tracking-tight text-white transition-all duration-700 sm:text-5xl lg:text-[52px] ${isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        }`}
                >
                    {count}
                </span>
            </div>

            <span
                className={`mt-3 text-xs font-medium text-gray-300 transition-all delay-150 duration-700 sm:text-sm ${isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
            >
                {label}
            </span>
        </div>
    );
};

export default StatsSection;