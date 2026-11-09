import { Check } from "lucide-react";

import { featuredScreens, modules } from "@/content/barberfy";
import { Reveal } from "./Reveal";

export function About() {
  const back = featuredScreens.aboutBack;
  const front = featuredScreens.aboutFront;
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="eyebrow">Conheça a Barberfy</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-3xl font-bold uppercase leading-tight sm:text-5xl">
              Gestão de barbearia em <span className="text-gradient">um só lugar.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A Barberfy foi desenvolvida para ajudar barbearias a organizar sua operação e
              acompanhar as informações importantes do negócio em uma plataforma moderna e
              intuitiva.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {modules.map((m) => (
                <li key={m.name} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  {m.name}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120} className="relative">
          <div aria-hidden className="glow-orb absolute -right-10 top-10 size-80" />
          <div className="relative">
            <figure className="w-[85%] -rotate-2 overflow-hidden rounded-xl border border-border shadow-device transition-transform duration-500 hover:rotate-0">
              <img
                src={back.src}
                alt={back.alt}
                width={1055}
                height={712}
                loading="lazy"
                className="w-full"
              />
            </figure>
            <figure className="relative -mt-[38%] ml-auto w-[80%] rotate-2 overflow-hidden rounded-xl border border-primary/25 shadow-device transition-transform duration-500 hover:rotate-0">
              <img
                src={front.src}
                alt={front.alt}
                width={1043}
                height={703}
                loading="lazy"
                className="w-full"
              />
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
