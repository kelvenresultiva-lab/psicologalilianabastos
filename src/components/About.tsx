import Image from "next/image";
import { about, heroStat, process, whatsappLink } from "@/data/content";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
export default function About() {
  return (
    <section id="sobre" className="bg-surface pt-10 pb-20 lg:pt-14 lg:pb-28">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md">
          <Reveal
            direction="left"
            className="relative aspect-[4/5] w-full overflow-hidden"
          >
            <Image
              src={about.image.src}
              alt={about.image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal
            direction="left"
            delay={200}
            className="absolute -top-6 right-0 z-10 hidden sm:-right-6 lg:block"
          >
            <div className="rounded-[15px] border border-line/60 bg-white px-9 py-6 text-center shadow-[0_20px_45px_-15px_rgba(20,20,20,0.35)]">
              <span className="block font-playfair text-4xl font-semibold text-gold-bright">
                {heroStat.value}
              </span>
              <span className="mx-auto mt-2 block h-px w-8 bg-gold-bright/40" />
              <span className="mt-2 block font-lato text-xs font-bold uppercase tracking-[1.5px] text-ink">
                {heroStat.label}
              </span>
            </div>
          </Reveal>
        </div>
        <Reveal direction="right" className="flex flex-col gap-6">
          <div>
            <p className="font-lato text-[15px] font-semibold uppercase tracking-[2.3px] text-gold">
              {about.greeting}
            </p>
            <h2 className="font-mosseta text-3xl text-ink sm:text-4xl">
              {about.title}
            </h2>
          </div>
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="font-heebo text-base font-light leading-relaxed text-ink"
            >
              {paragraph}
            </p>
          ))}
          <p className="font-playfair text-lg text-ink">{about.ctaText}</p>
          <div>
            <Button href={whatsappLink()}>{process.ctaLabel}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}