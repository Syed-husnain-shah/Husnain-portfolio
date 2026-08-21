"use client";

import Image from "next/image";
import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
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
        instagram: "https://github.com/Faizan-Mughal-23",
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
    return (
        <section
            id="team"
            className="relative overflow-hidden bg-[#181a1d] py-24 sm:py-28 lg:py-32"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/[0.04] blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-14 text-center sm:mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Team Showcase
                    </h2>

                    <p className="mt-3 text-sm text-gray-400 sm:text-base">
                        Meet the people behind the work
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member) => (
                        <div
                            key={member.name}
                            className="group relative"
                        >
                            {/* Image */}
                            <div className="relative h-[390px] overflow-hidden rounded-t-xl bg-[#e9e9e9]">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                            </div>

                            {/* Info */}
                            <div className="relative -mt-1 rounded-b-xl bg-[#222528] px-5 pb-5 pt-5 text-center">
                                <h3 className="text-lg font-bold text-white">
                                    {member.name}
                                </h3>

                                <p className="mt-1 text-sm text-gray-400">
                                    {member.role}
                                </p>

                                {/* Social icons */}
                                <div className="mt-4 flex items-center justify-center gap-2.5">
                                    <a
                                        href={member.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${member.name} GitHub`}
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors duration-300 hover:bg-white hover:text-black"
                                    >
                                        <FaGithub size={14} />
                                    </a>

                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${member.name} LinkedIn`}
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                                    >
                                        <FaLinkedinIn size={14} />
                                    </a>

                                    <a
                                        href={member.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${member.name} Instagram`}
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors duration-300 hover:bg-pink-500 hover:text-white"
                                    >
                                        <FaInstagram size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamMembers;