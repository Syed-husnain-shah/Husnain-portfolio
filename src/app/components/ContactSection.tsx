"use client";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#181a1d] py-24 sm:py-28 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[20%] top-10 h-3 w-3 rounded-full bg-amber-400/70 shadow-[0_0_20px_rgba(251,191,36,0.5)]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center sm:mb-14">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contact Me
          </h2>

          <p className="mt-3 text-sm text-gray-400">
            Let&apos;s work together and build something amazing
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-[1.7fr_0.85fr]">
          
          {/* Contact Form */}
          <div className="border border-white/10 bg-[#181a1d] p-6 sm:p-8">
            <form className="space-y-5">
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="h-12 w-full border border-white/10 bg-transparent px-5 text-sm text-white outline-none placeholder:text-gray-500 transition-colors duration-300 focus:border-amber-400/70"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="h-12 w-full border border-white/10 bg-transparent px-5 text-sm text-white outline-none placeholder:text-gray-500 transition-colors duration-300 focus:border-amber-400/70"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                placeholder="Subject"
                className="h-12 w-full border border-white/10 bg-transparent px-5 text-sm text-white outline-none placeholder:text-gray-500 transition-colors duration-300 focus:border-amber-400/70"
              />

              {/* Message */}
              <textarea
                placeholder="Your Message"
                rows={7}
                className="w-full resize-none border border-white/10 bg-transparent px-5 py-4 text-sm text-white outline-none placeholder:text-gray-500 transition-colors duration-300 focus:border-amber-400/70"
              />

              {/* Button */}
              <button
                type="submit"
                className="h-12 w-full bg-[#202226] text-sm font-bold text-white transition-all duration-300 hover:bg-amber-400 hover:text-black"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="border border-white/10 bg-[#181a1d] px-7 py-6 sm:px-8">
            
            {/* Location */}
            <div className="flex gap-5 border-b border-white/10 py-5 first:pt-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-amber-400">
                <FaMapMarkerAlt size={20} />
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
              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-amber-400">
                <FaPhoneAlt size={17} />
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
              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-amber-400">
                <FaEnvelope size={19} />
              </div>

              <div className="min-w-0">
                <h3 className="text-sm font-bold text-white">
                  Email
                </h3>

                <p className="mt-2 break-all text-xs leading-5 text-gray-500">
                    AddYourEmail@gmail.com
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex gap-5 py-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-amber-400">
                <FaMapMarkerAlt size={20} />
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