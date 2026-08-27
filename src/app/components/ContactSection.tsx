"q8n4vx"
"use client";

import { FormEvent, useState } from "react";
import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaClock,
} from "react-icons/fa";

const ContactSection = () => {
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<
        "idle" | "success" | "error"
    >("idle");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
            id="contact"
            className="relative overflow-hidden bg-[#181a1d] py-24 sm:py-28 lg:py-32"
        >
            <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

                {/* Heading */}
                <div className="mb-12 text-center sm:mb-14">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
                        Get In Touch
                    </span>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Contact Me
                    </h2>

                    <p className="mt-3 text-sm text-gray-400 sm:text-base">
                        Let&apos;s work together and build something amazing
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid gap-8 lg:grid-cols-[1.7fr_0.85fr]">

                    {/* Contact Form */}
                    <div className="rounded-2xl border border-white/10 bg-[#1d2023] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)] sm:p-8">

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >

                            {/* Name + Email */}
                            <div className="grid gap-5 sm:grid-cols-2">

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    className="h-12 w-full rounded-lg border border-white/10 bg-[#181a1d] px-5 text-sm text-white outline-none placeholder:text-gray-500 transition-all duration-300 focus:border-blue-400/60 focus:bg-[#202327]"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    className="h-12 w-full rounded-lg border border-white/10 bg-[#181a1d] px-5 text-sm text-white outline-none placeholder:text-gray-500 transition-all duration-300 focus:border-blue-400/60 focus:bg-[#202327]"
                                />

                            </div>

                            {/* Subject */}
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                className="h-12 w-full rounded-lg border border-white/10 bg-[#181a1d] px-5 text-sm text-white outline-none placeholder:text-gray-500 transition-all duration-300 focus:border-blue-400/60 focus:bg-[#202327]"
                            />

                            {/* Message */}
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows={7}
                                required
                                className="w-full resize-none rounded-lg border border-white/10 bg-[#181a1d] px-5 py-4 text-sm text-white outline-none placeholder:text-gray-500 transition-all duration-300 focus:border-blue-400/60 focus:bg-[#202327]"
                            />

                            {/* Success Message */}
                            {status === "success" && (
                                <div className="rounded-lg border border-green-400/20 bg-green-400/10 px-4 py-3 text-sm text-green-400">
                                    Message sent successfully. Thank you!
                                </div>
                            )}

                            {/* Error Message */}
                            {status === "error" && (
                                <div className="rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-400">
                                    Something went wrong. Please try again.
                                </div>
                            )}

                            {/* Send Button */}
                            <button
                                type="submit"
                                disabled={isSending}
                                className="h-12 w-full rounded-lg bg-blue-500 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-400 hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isSending
                                    ? "Sending..."
                                    : "Send Message"}
                            </button>

                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="rounded-2xl border border-white/10 bg-[#1d2023] px-7 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)] sm:px-8">

                        {/* Location */}
                        <div className="flex gap-5 border-b border-white/10 py-5 first:pt-0">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                                <FaMapMarkerAlt size={18} />
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-white">
                                    Location
                                </h3>

                                <p className="mt-2 text-xs leading-5 text-gray-500">
                                    Pakistan
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex gap-5 border-b border-white/10 py-5">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                                <FaPhoneAlt size={16} />
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-white">
                                    Phone
                                </h3>

                                <p className="mt-2 text-xs leading-5 text-gray-500">
                                    Available on request
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex gap-5 border-b border-white/10 py-5">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                                <FaEnvelope size={17} />
                            </div>

                            <div className="min-w-0">
                                <h3 className="text-sm font-bold text-white">
                                    Email
                                </h3>

                                <p className="mt-2 break-all text-xs leading-5 text-gray-500">
                                    syedhusnain.dev@gmail.com
                                </p>
                            </div>
                        </div>

                        {/* Working Hours */}
                        <div className="flex gap-5 py-5">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                                <FaClock size={17} />
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-white">
                                    Working Hours
                                </h3>

                                <p className="mt-2 text-xs leading-5 text-gray-500">
                                    Mon to Sat
                                    <br />
                                    9:00 AM to 5:00 PM
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
