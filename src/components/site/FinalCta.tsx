import { ArrowRight } from "lucide-react";

import logoMark from "@/assets/barberfy-logo-mark.png.asset.json";
import { Button } from "@/components/ui/button";
import { links } from "@/content/barberfy";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="relative px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-primary/20 bg-background px-6 py-20 text-center sm:px-12 sm:py-24">
        <div aria-hidden className="bg-grid absolute inset-0" />
        <div
          aria-hidden
          className="glow-orb animate-glow-pulse absolute left-1/2 top-0 size-[520px] -translate-x-1/2 -translate-y-1/3"
        />
        <div className="relative">
          <img
            src={logoMark.url}
            alt=""
            width={72}
            height={72}
            loading="lazy"
            className="mx-auto size-16 rounded-2xl sm:size-[72px]"
          />
          <h2 className="mx-auto mt-8 max-w-3xl text-3xl font-bold uppercase leading-tight sm:text-5xl">
            Está na hora de evoluir a{" "}
            <span className="text-gradient">gestão da sua barbearia.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Conheça a Barberfy e descubra uma nova maneira de organizar seu negócio.
          </p>
          <Button asChild variant="hero" size="xl" className="mt-10">
            <a href={links.platform} target="_blank" rel="noopener noreferrer">
              Quero conhecer a Barberfy <ArrowRight />
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
