import Image from "next/image";
import { Check } from "lucide-react";
import { hero, whatsappLink } from "@/data/content";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-white">
      {/* Desktop — mesma estrutura/posicionamento do Hero da Miriam: foto de
          fundo em tela cheia com gradiente e coluna de texto max-w-[1140px]. */}
      <div className="relative hidden bg-white lg:block">
        <div className="absolute inset-0">
          <Image
            src="/images/desktop4.png"
            alt=""
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
            aria-hidden
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/20 to-transparent" />
        <div className="relative mx-auto flex max-w-[1140px] flex-col gap-6 px-6 pb-32 pt-24">
          <Reveal direction="up">
            <p className="font-lato text-[15px] font-semibold uppercase tracking-[2.3px] text-gold">
              {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <h1 className="max-w-2xl font-mosseta leading-[1.15] text-ink">
              <span className="block text-5xl">{hero.greeting}</span>
              <span className="mt-2 block text-[56px] text-gold-bright">{hero.name}</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <p className="max-w-md font-heebo text-base font-normal leading-relaxed text-ink">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <ul className="flex flex-col gap-3">
              {hero.checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink">
                    <Check size={13} strokeWidth={3} className="text-white" />
                  </span>
                  <span className="font-heebo text-[15px] font-medium text-ink">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="up" delay={400} className="flex flex-wrap gap-4">
            <Button href={whatsappLink()} variant="outline" className="!px-6">
              {hero.ctaLabel}
            </Button>
            <Button href={hero.ctaSecondaryHref} className="!px-6">
              {hero.ctaSecondaryLabel}
            </Button>
          </Reveal>
        </div>
      </div>

      {/* Mobile — foto + badges (arte pronta), texto real puxado pra cima
          por baixo dela, mesma estrutura do mobile da Miriam. */}
      <div className="relative block w-full bg-white lg:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/mobile-canva.png"
          alt="Liliana Bastos - Psicóloga Clínica"
          className="block h-auto w-full"
        />

        <Reveal direction="up" className="relative -mt-[63%] px-6 pb-10 text-center">
          <h1 className="font-mosseta leading-[1.1] text-ink">
            <span className="block text-2xl">{hero.greeting}</span>
            <span className="mt-1 block text-4xl text-gold-bright">{hero.name}</span>
          </h1>

          <p className="mx-auto mt-4 max-w-sm font-heebo text-[15px] font-normal leading-relaxed text-ink/80">
            {hero.mobileText}
          </p>

          <div className="mt-7 flex flex-col items-center gap-3">
            <Button href={whatsappLink()} className="!w-[90%] !justify-center">
              {hero.ctaLabel}
            </Button>
            <Button href={hero.ctaSecondaryHref} variant="outline" className="!w-[90%] !justify-center">
              {hero.ctaSecondaryLabel}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
