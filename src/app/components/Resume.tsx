"use client";

import {
    FaBriefcase,
    FaGraduationCap,
    FaReact,
    FaCode,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

const education = [
    {
        year: "AUG 2025 - MAY 2027",
        title: "Intermediate",
        subtitle: "Computer Science",
        institute: "Government College University (GCU) Lahore",
        icon: FaGraduationCap,
    },
];

const experience = [
    {
        year: "JUL 2025 - PRESENT",
        title: "Frontend Developer",
        company: "Softsons",
        description:
            "Developed responsive and modern web applications using React.js and Next.js. Built reusable UI components with Tailwind CSS and focused on clean, maintainable frontend architecture.",
        icon: FaBriefcase,
    },
    {
        year: "JAN 2025 - JUL 2025",
        title: "Frontend Developer Intern",
        company: "Code Pulse Solutions",
        description:
            "Assisted in building responsive websites using HTML5, CSS3 and JavaScript. Implemented interactive React features, fixed UI bugs, improved cross-browser compatibility and styled applications with Tailwind CSS.",
        icon: FaCode,
    },
];

const skills = [
    {
        name: "HTML5",
        icon: FaCode,
    },
    {
        name: "CSS3",
        icon: FaCode,
    },
    {
        name: "JavaScript",
        icon: FaCode,
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
    },
    {
        name: "React",
        icon: FaReact,
    },
    {
        name: "Next.js",
        icon: SiNextdotjs,
    },
];

const ResumeSection = () => {
    return (
        <section
            id="resume"
            className="relative overflow-hidden bg-[#181a1d] py-24 sm:py-28 lg:py-32"
        >
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/[0.04] blur-[120px]" />

            <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

                <div className="mb-14 text-center sm:mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Resume
                    </h2>

                    <p className="mt-3 text-sm text-gray-400">
                        My education and professional experience
                    </p>
                </div>

                <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">

                    <div>
                        <div className="mb-8 inline-flex flex-col">
                            <span className="text-sm font-bold uppercase tracking-wide text-white">
                                Education
                            </span>

                            <span className="mt-2 h-px w-10 bg-blue-500" />
                        </div>

                        <div className="space-y-10">
                            {education.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="relative border-l border-white/10 pl-7"
                                    >
                                        <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.45)]" />

                                        <div className="flex items-center gap-2">
                                            <Icon
                                                className="text-blue-400"
                                                size={15}
                                            />

                                            <span className="text-[11px] font-semibold tracking-wide text-blue-400">
                                                {item.year}
                                            </span>
                                        </div>

                                        <h3 className="mt-4 text-lg font-bold text-white">
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 text-sm font-medium text-gray-300">
                                            {item.institute}
                                        </p>

                                        <p className="mt-2 text-sm text-gray-500">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <div className="mb-8 inline-flex flex-col">
                            <span className="text-sm font-bold uppercase tracking-wide text-white">
                                Experience
                            </span>

                            <span className="mt-2 h-px w-10 bg-blue-500" />
                        </div>

                        <div className="space-y-10">
                            {experience.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={`${item.company}-${item.title}`}
                                        className="relative border-l border-white/10 pl-7"
                                    >
                                        {/* Timeline Dot */}
                                        <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.45)]" />

                                        <div className="flex items-center gap-2">
                                            <Icon
                                                className="text-blue-400"
                                                size={15}
                                            />

                                            <span className="text-[11px] font-semibold tracking-wide text-blue-400">
                                                {item.year}
                                            </span>
                                        </div>

                                        <h3 className="mt-4 text-lg font-bold text-white">
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 text-sm font-medium text-gray-300">
                                            {item.company}
                                        </p>

                                        <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-white/10 pt-10">
                    <div className="mb-3 inline-flex flex-col">
                        <span className="text-sm font-bold uppercase tracking-wide text-white">
                            languages
                        </span>

                        <span className="mt-2 h-px w-10 bg-blue-500" />
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill) => {
                            const Icon = skill.icon;

                            return (
                                <div
                                    key={skill.name}
                                    className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/[0.06]"
                                >
                                    <Icon
                                        size={15}
                                        className="text-blue-400 transition-transform duration-300 group-hover:scale-110"
                                    />

                                    <span className="text-xs font-medium text-gray-400 transition-colors duration-300 group-hover:text-white">
                                        {skill.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;