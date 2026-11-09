import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { links, mobileScreen, screens } from "@/content/barberfy";
import { LaptopFrame, PhoneFrame } from "./Devices";
import { Reveal } from "./Reveal";

export function Hero() {
  const main = screens[0];
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 sm:pt-40">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div
        aria-hidden
        className="glow-orb animate-glow-pulse absolute left-1/2 top-[38%] size-[620px] -translate-x-1/2"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" />
              Plataforma de gestão para barbearias
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-7 text-4xl font-bold uppercase leading-[1.05] sm:text-6xl lg:text-7xl">
              Sua barbearia merece uma{" "}
              <span className="text-gradient">gestão mais inteligente.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Organize sua operação, acompanhe seu negócio e tenha mais controle da sua barbearia
              com a Barberfy.
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
              <a href={links.platform} target="_blank" rel="noopener noreferrer">
                Conhecer a plataforma <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="glass" size="xl" className="w-full sm:w-auto">
              <a href="#funcionalidades">Ver funcionalidades</a>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={320} className="relative mx-auto mt-16 max-w-5xl pb-20 sm:mt-20">
          <LaptopFrame className="animate-float-slow">
            <img
              src={main.src}
              alt={main.alt}
              width={1056}
              height={716}
              className="size-full object-cover object-left-top"
              fetchPriority="high"
            />
          </LaptopFrame>
          <PhoneFrame className="animate-float absolute -bottom-2 right-0 w-[26%] max-w-[210px] sm:-right-6 lg:-right-14">
            <img
              src={mobileScreen.src}
              alt={mobileScreen.alt}
              width={482}
              height={1018}
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
          </PhoneFrame>
        </Reveal>
      </div>
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-[image:var(--gradient-fade)]" />
    </section>
  );
}
