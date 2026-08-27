"use client";

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    const phoneNumber = "923244972318";

    return (
        <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_12px_35px_rgba(37,211,102,0.5)]"
        >
            <FaWhatsapp size={29} />
        </a>
    );
};

export default WhatsAppButton;
