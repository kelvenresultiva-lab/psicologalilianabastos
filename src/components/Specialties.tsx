import { specialties } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Specialties() {
  return (
    <section id="especialidades" className="bg-surface py-14 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <p className="font-lato text-[15px] font-semibold uppercase tracking-[2.3px] text-gold">
            {specialties.eyebrow}
          </p>
          <h2 className="mt-4 font-playfair text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {specialties.title}
          </h2>
          <p className="mt-4 font-heebo text-base text-neutral-600">
            {specialties.subtitle}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-10">
          {specialties.items.map((item, index) => (
            <Reveal direction="up" delay={index * 100} key={item.title} className="h-full">
              <article
                className="flex h-full flex-col items-center justify-start rounded-[12px] bg-white px-6 py-5 text-center shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(0,0,0,0.065)] md:px-8 lg:rounded-[14px] lg:px-8 lg:py-7 lg:shadow-[0_10px_28px_rgba(0,0,0,0.055)]"
              >
                <h3 className="font-playfair text-[18px] font-semibold leading-tight text-ink lg:text-[21px]">
                  {item.title}
                </h3>
                <p className="mx-auto mt-3 max-w-[330px] font-heebo text-[14px] leading-[1.5] text-muted lg:text-[15px] lg:leading-[1.55]">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
