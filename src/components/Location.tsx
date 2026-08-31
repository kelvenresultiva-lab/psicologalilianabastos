import { AtSign, Phone } from "lucide-react";
import { site, whatsappLink } from "@/data/content";
import Reveal from "@/components/Reveal";
export default function Location() {
  const contactItems = [
    {
      icon: Phone,
      title: "Contato Telefônico",
      value: site.phoneDisplay,
      href: whatsappLink(),
    },
    {
      icon: AtSign,
      title: "Instagram",
      value: site.instagramAccounts[0].handle,
      href: site.instagramAccounts[0].url,
    },
  ];
  return (
    <section>
      <Reveal
        direction="up"
        className="grid grid-cols-1 bg-dark sm:grid-cols-2"
      >
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <a key={index} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex flex-col items-center gap-2 border-line/20 px-6 py-10 text-center sm:border-l sm:first:border-l-0">
              <Icon size={30} strokeWidth={1.5} className="text-white" />
              <h4 className="mt-3 font-playfair text-lg font-semibold text-white">
                {item.title}
              </h4>
              <p className="font-heebo text-base text-white/70">{item.value}</p>
            </a>
          );
        })}
      </Reveal>
    </section>
  );
}