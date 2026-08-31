import Image from "next/image";
import { MapPin } from "lucide-react";
import { locations } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Locations() {
  return (
    <section id="locais" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-[1140px] px-6">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <p className="font-lato text-[15px] font-semibold uppercase tracking-[2.3px] text-gold">
            ONDE ATENDO
          </p>
          <h2 className="mt-4 font-playfair text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Dois espaços para te receber
          </h2>
        </Reveal>

        <div
          className={`mt-14 grid grid-cols-1 gap-8 ${
            locations.length > 1 ? "sm:grid-cols-2" : "mx-auto max-w-md"
          }`}
        >
          {locations.map((location, index) => (
            <Reveal
              key={location.name}
              direction="up"
              delay={index * 100}
              className="overflow-hidden rounded-2xl border border-line/70 bg-white"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={location.image.src}
                  alt={location.image.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-lg font-semibold text-ink">
                  {location.name}
                </h3>
                {location.street && (
                  <p className="mt-2 font-heebo text-sm leading-relaxed text-muted">
                    {location.street}
                    <br />
                    {location.cityLine}
                  </p>
                )}
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-lato text-sm font-semibold text-gold-bright hover:text-gold"
                >
                  <MapPin size={16} />
                  Ver no mapa
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
