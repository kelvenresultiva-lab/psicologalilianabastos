import { Quote } from "lucide-react";
import { testimonials } from "@/data/content";
import Reveal from "@/components/Reveal";

function TestimonialCard({ item }: { item: (typeof testimonials.items)[number] }) {
  return (
    <div className="flex flex-col gap-3 text-left">
      <Quote size={26} className="text-line" fill="currentColor" strokeWidth={0} />
      <p className="font-heebo text-[15px] leading-relaxed text-ink/80">{item.text}</p>
      <div>
        <span className="font-lato text-sm font-semibold text-ink">{item.name}</span>
        <span className="ml-2 font-heebo text-xs text-muted">{item.time}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const mobileItems = testimonials.items.slice(0, 4);

  return (
    <section id={testimonials.id} className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1140px] px-6">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <p className="font-lato text-[13px] font-semibold uppercase tracking-[2.3px] text-gold">
            {testimonials.eyebrow}
          </p>
          <h2 className="mt-4 font-playfair text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {testimonials.title}{" "}
            <span className="text-gold-bright">{testimonials.titleHighlight}</span>
          </h2>
          <p className="mt-4 font-heebo text-base text-muted">{testimonials.subtitle}</p>
        </Reveal>

        {/* Mobile: só 4, empilhados, sem carrossel */}
        <div className="mt-12 flex flex-col gap-10 sm:hidden">
          {mobileItems.map((item, index) => (
            <Reveal key={index} direction="up" delay={index * 80}>
              <TestimonialCard item={item} />
            </Reveal>
          ))}
        </div>

        {/* Tablet/desktop: grid de 3 colunas com todos */}
        <div className="mt-12 hidden grid-cols-3 gap-x-10 gap-y-12 sm:grid">
          {testimonials.items.map((item, index) => (
            <Reveal key={index} direction="up" delay={index * 80}>
              <TestimonialCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
