import { MessageCircle } from "lucide-react";
import { hero, whatsappLink } from "@/data/content";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={hero.ctaLabel}
      className="hover-float fixed bottom-6 right-6 z-50 flex h-14 items-center gap-2 rounded-full bg-[#25D366] px-4 text-white shadow-lg sm:pr-6"
    >
      <MessageCircle size={26} fill="currentColor" strokeWidth={0} className="shrink-0" />
      <span className="hidden font-lato text-sm font-semibold uppercase tracking-[0.5px] whitespace-nowrap sm:inline">
        {hero.ctaLabel}
      </span>
    </a>
  );
}
