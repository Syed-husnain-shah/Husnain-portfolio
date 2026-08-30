"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaClock,
    FaPaperPlane,
} from "react-icons/fa";

const ContactSection = () => {
    const sectionRef = useRef<HTMLElement | null>(null);

    const [isVisible, setIsVisible] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<
        "idle" | "success" | "error"
    >("idle");

    /* --------------------------------
       Scroll Reveal Animation
    -------------------------------- */

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

    /* --------------------------------
       Form Submit
    -------------------------------- */

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        setIsSending(true);
        setStatus("idle");

        const form = event.currentTarget;
        const formData = new FormData(form);

        formData.append(
            "access_key",
            "c8087e04-7948-4e6d-847d-c449b434bfe3"
        );

        formData.append(
            "subject",
            "New Portfolio Contact Message"
        );

        formData.append(
            "from_name",
            "Syed Husnain Shah Portfolio"
        );

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="relative overflow-hidden bg-[#181a1d] py-24 sm:py-28 lg:py-32"
        >
            {/* --------------------------------
                Background Glow
            -------------------------------- */}

            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[15%] top-20 h-72 w-72 rounded-full bg-blue-500/[0.035] blur-[120px]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-[10%] h-80 w-80 rounded-full bg-blue-500/[0.025] blur-[130px]"
            />

            <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

                {/* --------------------------------
                    Heading
                -------------------------------- */}

                <div
                    className={`mb-12 text-center transition-all duration-1000 ease-out sm:mb-14 ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                    }`}
                >
                    <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
                        Get In Touch
                    </span>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Contact Me
                    </h2>

                    <p className="mt-3 text-sm text-gray-400 sm:text-base">
                        Let&apos;s work together and build something amazing
                    </p>

                    {/* Animated Line */}

                    <div
                        className={`mx-auto mt-6 h-px bg-blue-500 transition-all duration-1000 ${
                            isVisible
                                ? "w-16 opacity-100"
                                : "w-0 opacity-0"
                        }`}
                    />
                </div>

                {/* --------------------------------
                    Main Content
                -------------------------------- */}

                <div className="grid gap-8 lg:grid-cols-[1.7fr_0.85fr]">

                    {/* --------------------------------
                        Contact Form
                    -------------------------------- */}

                    <div
                        className={`group rounded-2xl border border-white/10 bg-[#1d2023] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-1000 ease-out hover:border-blue-500/20 hover:shadow-[0_25px_70px_rgba(0,0,0,0.3)] sm:p-8 ${
                            isVisible
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-12 opacity-0"
                        }`}
                        style={{
                            transitionDelay: "150ms",
                        }}
                    >
                        <div className="mb-7">
                            <h3 className="text-lg font-bold text-white">
                                Send Me a Message
                            </h3>

                            <p className="mt-2 text-sm text-gray-500">
                                Have a project or idea? Feel free to
                                send me a message.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >
                            {/* Name + Email */}

                            <div className="grid gap-5 sm:grid-cols-2">

                                <div className="group/input">
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-xs font-medium text-gray-400"
                                    >
                                        Your Name
                                    </label>

                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        required
                                        className="h-12 w-full rounded-lg border border-white/10 bg-[#181a1d] px-5 text-sm text-white outline-none placeholder:text-gray-600 transition-all duration-300 focus:-translate-y-0.5 focus:border-blue-400/60 focus:bg-[#202327] focus:shadow-[0_8px_25px_rgba(59,130,246,0.08)]"
                                    />
                                </div>

                                <div className="group/input">
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-xs font-medium text-gray-400"
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        required
                                        className="h-12 w-full rounded-lg border border-white/10 bg-[#181a1d] px-5 text-sm text-white outline-none placeholder:text-gray-600 transition-all duration-300 focus:-translate-y-0.5 focus:border-blue-400/60 focus:bg-[#202327] focus:shadow-[0_8px_25px_rgba(59,130,246,0.08)]"
                                    />
                                </div>

                            </div>

                            {/* Subject */}

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-2 block text-xs font-medium text-gray-400"
                                >
                                    Subject
                                </label>

                                <input
                                    id="subject"
                                    type="text"
                                    name="subject"
                                    placeholder="What is this about?"
                                    required
                                    className="h-12 w-full rounded-lg border border-white/10 bg-[#181a1d] px-5 text-sm text-white outline-none placeholder:text-gray-600 transition-all duration-300 focus:-translate-y-0.5 focus:border-blue-400/60 focus:bg-[#202327] focus:shadow-[0_8px_25px_rgba(59,130,246,0.08)]"
                                />
                            </div>

                            {/* Message */}

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-xs font-medium text-gray-400"
                                >
                                    Your Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Write your message..."
                                    rows={7}
                                    required
                                    className="w-full resize-none rounded-lg border border-white/10 bg-[#181a1d] px-5 py-4 text-sm text-white outline-none placeholder:text-gray-600 transition-all duration-300 focus:-translate-y-0.5 focus:border-blue-400/60 focus:bg-[#202327] focus:shadow-[0_8px_25px_rgba(59,130,246,0.08)]"
                                />
                            </div>

                            {/* Success */}

                            <div
                                className={`overflow-hidden transition-all duration-500 ${
                                    status === "success"
                                        ? "max-h-20 translate-y-0 opacity-100"
                                        : "max-h-0 -translate-y-2 opacity-0"
                                }`}
                            >
                                <div className="rounded-lg border border-green-400/20 bg-green-400/10 px-4 py-3 text-sm text-green-400">
                                    Message sent successfully. Thank you!
                                </div>
                            </div>

                            {/* Error */}

                            <div
                                className={`overflow-hidden transition-all duration-500 ${
                                    status === "error"
                                        ? "max-h-20 translate-y-0 opacity-100"
                                        : "max-h-0 -translate-y-2 opacity-0"
                                }`}
                            >
                                <div className="rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-400">
                                    Something went wrong. Please try again.
                                </div>
                            </div>

                            {/* Button */}

                            <button
                                type="submit"
                                disabled={isSending}
                                className="group/button relative flex h-12 w-full items-center justify-center gap-3 overflow-hidden rounded-lg bg-blue-500 text-sm font-bold text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-[0_12px_35px_rgba(59,130,246,0.25)] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {/* Button Shine */}

                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover/button:translate-x-full" />

                                <span className="relative z-10">
                                    {isSending
                                        ? "Sending..."
                                        : "Send Message"}
                                </span>

                                <FaPaperPlane
                                    size={13}
                                    className={`relative z-10 transition-transform duration-500 ${
                                        isSending
                                            ? "translate-x-1 animate-pulse"
                                            : "group-hover/button:translate-x-1 group-hover/button:-translate-y-0.5"
                                    }`}
                                />
                            </button>
                        </form>
                    </div>

                    {/* --------------------------------
                        Contact Information
                    -------------------------------- */}

                    <div
                        className={`rounded-2xl border border-white/10 bg-[#1d2023] px-7 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-1000 ease-out hover:border-blue-500/20 hover:shadow-[0_25px_70px_rgba(0,0,0,0.3)] sm:px-8 ${
                            isVisible
                                ? "translate-x-0 opacity-100"
                                : "translate-x-12 opacity-0"
                        }`}
                        style={{
                            transitionDelay: "300ms",
                        }}
                    >
                        {/* Location */}

                        <ContactItem
                            icon={<FaMapMarkerAlt size={18} />}
                            title="Location"
                            delay={450}
                        >
                            Pakistan
                        </ContactItem>

                        {/* Phone */}

                        <ContactItem
                            icon={<FaPhoneAlt size={16} />}
                            title="Phone"
                            delay={550}
                        >
                            Available on request
                        </ContactItem>

                        {/* Email */}

                        <ContactItem
                            icon={<FaEnvelope size={17} />}
                            title="Email"
                            delay={650}
                        >
                            <span className="break-all">
                                syedhusnain.dev@gmail.com
                            </span>
                        </ContactItem>

                        {/* Working Hours */}

                        <ContactItem
                            icon={<FaClock size={17} />}
                            title="Working Hours"
                            last
                            delay={750}
                        >
                            <>
                                Mon to Sat
                                <br />
                                9:00 AM to 5:00 PM
                            </>
                        </ContactItem>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* --------------------------------
   Contact Item
-------------------------------- */

const ContactItem = ({
    icon,
    title,
    children,
    last = false,
    delay = 0,
}: {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
    last?: boolean;
    delay?: number;
}) => {
    return (
        <div
            className={`group/item flex gap-5 py-5 transition-all duration-700 ${
                last
                    ? ""
                    : "border-b border-white/10"
            }`}
            style={{
                transitionDelay: `${delay}ms`,
            }}
        >
            {/* Icon */}

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 transition-all duration-500 group-hover/item:-translate-y-1 group-hover/item:bg-blue-500/15 group-hover/item:text-blue-300 group-hover/item:shadow-[0_8px_25px_rgba(59,130,246,0.12)]">
                {icon}
            </div>

            {/* Text */}

            <div className="min-w-0">
                <h3 className="text-sm font-bold text-white transition-colors duration-300 group-hover/item:text-blue-100">
                    {title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-gray-500 transition-colors duration-300 group-hover/item:text-gray-400">
                    {children}
                </p>
            </div>
        </div>
    );
};

export default ContactSection;