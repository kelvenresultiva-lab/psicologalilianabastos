"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { brand, header, nav, whatsappLink } from "@/data/content";
import Button from "@/components/Button";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#692327]">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-6 py-4">
        <a href="#hero" aria-label="Início" className="flex items-center">
          <Image
            src={brand.logo.src}
            alt={brand.logo.alt}
            width={brand.logo.width}
            height={brand.logo.height}
            priority
            className="h-12 w-auto"
          />
        </a>
        <nav className="hidden items-center gap-5 xl:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="whitespace-nowrap font-lato text-sm font-semibold text-white transition-colors hover:text-[#B1977E]">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden xl:block">
          <Button
            href={whatsappLink()}
            className="whitespace-nowrap !border-white !bg-white !px-5 !py-2.5 !text-xs !text-[#692327] hover:!bg-transparent hover:!text-white"
          >
            {header.ctaLabel}
          </Button>
        </div>
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="text-white xl:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/15 bg-[#692327] px-6 pb-6 xl:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="font-lato text-[15px] font-semibold text-white hover:text-[#B1977E]">
                {item.label}
              </a>
            ))}
            <Button
              href={whatsappLink()}
              className="mt-2 justify-center !border-white !bg-white !text-[#692327] hover:!bg-transparent hover:!text-white"
            >
              {header.ctaLabel}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}