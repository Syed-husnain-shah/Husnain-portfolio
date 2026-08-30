"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";

const projects = [
    {
        title: "Nexto",
        description:
            "A modern SaaS website with a clean interface, responsive layouts and engaging user experiences.",
        image: "/images/nexto-responsive.png",
        technologies: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "React", icon: SiReact },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
        github: "#",
        live: "https://nexto-lvug.vercel.app/",
    },
    {
        title: "DevEvents",
        description:
            "DevEvent is a modern developer events platform designed to help users discover and explore hackathons, meetups, conferences, and other tech events in one place. The application provides an intuitive interface for browsing featured events and includes functionality for creating and managing developer-focused events.",
        image: "/images/devEvents.jpeg",
        technologies: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "React", icon: SiReact },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
        github: "#",
        live: "https://devevents-beryl.vercel.app/",
    },
    {
        title: "Sale.Io",
        description:
            "A modern portfolio website built with Next.js, React, and Tailwind CSS, showcasing projects, skills, and experience in a clean and responsive design.",
        image: "/images/saleIo.png",
        technologies: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "React", icon: SiReact },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
        github: "#",
        live: "https://saleio-sigma.vercel.app/",
    },
];

const ProjectsSection = () => {
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
                threshold: 0.12,
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="portfolio"
            className="relative overflow-hidden bg-black py-24 sm:py-28 lg:py-32"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/[0.04] blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}
                <div
                    className={`mx-auto mb-14 max-w-2xl text-center transition-all duration-1000 ease-out sm:mb-16 ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                    }`}
                >
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                        My Work
                    </span>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Featured Projects
                    </h2>

                    <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
                        A selection of projects I&apos;ve built using modern web
                        technologies and thoughtful design.
                    </p>
                </div>

                {/* Projects */}
                <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-700 ease-out hover:-translate-y-3 hover:border-blue-500/30 hover:bg-white/[0.035] hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)] ${
                                isVisible
                                    ? "translate-y-0 scale-100 opacity-100"
                                    : "translate-y-16 scale-[0.96] opacity-0"
                            }`}
                            style={{
                                transitionDelay: `${index * 150}ms`,
                            }}
                        >
                            {/* Card Glow */}
                            <div className="pointer-events-none absolute -right-20 -top-20 z-10 h-40 w-40 rounded-full bg-blue-500/[0.08] blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                            {/* Project Image */}
                            <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#111318]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-90" />

                                {/* Featured Badge */}
                                <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-gray-300 backdrop-blur-md transition-all duration-500 group-hover:border-blue-400/30 group-hover:text-blue-300">
                                    Featured
                                </div>

                                {/* Image Preview Button */}
                                <Link
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${project.title} Live Preview`}
                                    className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100"
                                >
                                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all duration-500 hover:scale-110 hover:border-blue-400/50 hover:bg-blue-500/20">
                                        <FiExternalLink size={18} />
                                    </span>
                                </Link>
                            </div>

                            {/* Content */}
                            <div className="relative p-6">

                                {/* Title + Arrow */}
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                                        {project.title}
                                    </h3>

                                    {/* Arrow Link */}
                                    <Link
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.title} Live Preview`}
                                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-gray-500 transition-all duration-500 hover:-rotate-45 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
                                    >
                                        <FaArrowRight size={13} />
                                    </Link>
                                </div>

                                {/* Description */}
                                <p className="mt-3 text-sm leading-6 text-gray-500 transition-colors duration-500 group-hover:text-gray-400">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => {
                                        const Icon = technology.icon;

                                        return (
                                            <span
                                                key={technology.name}
                                                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-gray-400 transition-all duration-300 group-hover:border-white/15"
                                            >
                                                <Icon
                                                    size={13}
                                                    className="text-blue-400 transition-transform duration-300 group-hover:scale-110"
                                                />

                                                {technology.name}
                                            </span>
                                        );
                                    })}
                                </div>

                                {/* Buttons */}
                                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">

                                    {/* Live Preview */}
                                    <Link
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/button inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-300"
                                    >
                                        Live Preview

                                        <FiExternalLink
                                            size={14}
                                            className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                                        />
                                    </Link>

                                    {/* GitHub */}
                                    <Link
                                        href={project.github}
                                        target={
                                            project.github !== "#"
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel={
                                            project.github !== "#"
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        aria-label={`${project.title} GitHub`}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                                    >
                                        <FaGithub size={16} />
                                    </Link>
                                </div>

                                {/* Bottom Accent */}
                                <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-blue-400 transition-all duration-500 group-hover:w-24" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;