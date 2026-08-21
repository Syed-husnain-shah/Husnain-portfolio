"use client";

import Link from "next/link";
import {
    FaArrowRight,
    FaCalendarAlt,
    FaClock,
} from "react-icons/fa";

const blogs = [
    {
        title: "Building Modern Websites with Next.js",
        description:
            "Learn how I build fast, responsive and modern websites using Next.js, React and Tailwind CSS.",
        date: "Aug 18, 2026",
        readTime: "5 min read",
        category: "Next.js",
        image: "/images/blog-nextjs.jpg",
    },
    {
        title: "Why Responsive Design Matters",
        description:
            "A responsive website should provide a smooth experience across mobile, tablet and desktop devices.",
        date: "Aug 12, 2026",
        readTime: "4 min read",
        category: "Web Design",
        image: "/images/blog-responsive.jpg",
    },
    {
        title: "Writing Clean React Code",
        description:
            "Simple practices that help create reusable, maintainable and professional React components.",
        date: "Aug 05, 2026",
        readTime: "6 min read",
        category: "React",
        image: "/images/blog-react.jpg",
    },
];

const BlogSection = () => {
    return (
        <section
            id="blog"
            className="relative overflow-hidden bg-black py-24 sm:py-28 lg:py-32"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/[0.05] blur-[140px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}
                <div className="mb-14 text-center sm:mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Latest Articles
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                        Thoughts, tutorials and useful things I&apos;ve learned
                        while building modern web experiences.
                    </p>
                </div>

                {/* Blog Cards */}
                <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog) => (
                        <article
                            key={blog.title}
                            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_rgba(59,130,246,0.10)]"
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden bg-[#111317]">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                {/* Category */}
                                <span className="absolute left-5 top-5 rounded-full border border-blue-400/30 bg-black/60 px-3 py-1 text-[11px] font-semibold text-blue-300 backdrop-blur-md">
                                    {blog.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="mb-4 flex items-center gap-4 text-xs text-gray-500">
                                    <span className="flex items-center gap-2">
                                        <FaCalendarAlt className="text-blue-400" />
                                        {blog.date}
                                    </span>

                                    <span className="flex items-center gap-2">
                                        <FaClock className="text-blue-400" />
                                        {blog.readTime}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-blue-400">
                                    {blog.title}
                                </h3>

                                <p className="mt-4 text-sm leading-6 text-gray-500">
                                    {blog.description}
                                </p>

                                {/* Hero Style Button */}
                                <Link
                                    href="#"
                                    className="group/button relative mt-6 inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-500/10 hover:shadow-[0_10px_35px_rgba(59,130,246,0.18)]"
                                >
                                    <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-transparent transition-transform duration-700 ease-out group-hover/button:scale-x-100" />

                                    <span className="relative z-10 transition-colors duration-500 group-hover/button:text-blue-100">
                                        Read Article
                                    </span>

                                    <span className="relative z-10 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-white text-black transition-all duration-500 group-hover/button:rotate-[-45deg] group-hover/button:scale-110 group-hover/button:bg-black group-hover/button:text-white">
                                        <FaArrowRight size={12} />
                                    </span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-14 flex justify-center">
                    <Link
                        href="#"
                        className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-500/10 hover:shadow-[0_10px_35px_rgba(59,130,246,0.18)]"
                    >
                        <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100" />

                        <span className="relative z-10 transition-colors duration-500 group-hover:text-blue-100">
                            View All Articles
                        </span>

                        <span className="relative z-10 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-white text-black transition-all duration-500 group-hover:rotate-[-45deg] group-hover:scale-110 group-hover:bg-black group-hover:text-white">
                            <FaArrowRight size={12} />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;