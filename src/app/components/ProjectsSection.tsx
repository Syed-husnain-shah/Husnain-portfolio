"use client";

import Image from "next/image";
import Link from "next/link";
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
        title: "Creative Website",
        description:
            "A modern responsive website focused on clean design, smooth interactions and professional user experience.",
        image: "/images/nexto-responsive.png",
        technologies: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "React", icon: SiReact },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
        github: "#",
        live: "#",
    },
    {
        title: "Modern Portfolio",
        description:
            "A responsive portfolio experience designed with a modern layout, interactive sections and clean visual details.",
        image: "/images/nexto-responsive.png",
        technologies: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "React", icon: SiReact },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
        github: "#",
        live: "#",
    },
];

const ProjectsSection = () => {
    return (
        <section
            id="portfolio"
            className="relative overflow-hidden bg-black py-24 sm:py-28 lg:py-32"
        >
            <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/[0.04] blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
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

                <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.035] hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#111318]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                                <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-gray-300 backdrop-blur-md">
                                    Featured
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                                        {project.title}
                                    </h3>

                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-gray-500 transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-blue-500/40 group-hover:text-blue-400">
                                        <FaArrowRight size={13} />
                                    </span>
                                </div>

                                <p className="mt-3 text-sm leading-6 text-gray-500">
                                    {project.description}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => {
                                        const Icon = technology.icon;

                                        return (
                                            <span
                                                key={technology.name}
                                                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-gray-400"
                                            >
                                                <Icon
                                                    size={13}
                                                    className="text-blue-400"
                                                />
                                                {technology.name}
                                            </span>
                                        );
                                    })}
                                </div>

                                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                                    <Link
                                        href={project.live}
                                        target={
                                            project.live !== "#"
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel={
                                            project.live !== "#"
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        className="group/button inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-300"
                                    >
                                        Live Preview
                                        <FiExternalLink
                                            size={14}
                                            className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                                        />
                                    </Link>

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
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                                    >
                                        <FaGithub size={16} />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;