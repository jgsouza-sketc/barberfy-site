import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { links, plans } from "@/content/barberfy";
import { Reveal } from "./Reveal";

export function Pricing() {
  return (
    <section id="planos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Planos e preços</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-3xl font-bold uppercase leading-tight sm:text-5xl">
              Escolha o plano para <span className="text-gradient">sua barbearia.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Assinatura mensal, sem complicação.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 90}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-gradient-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/35">
                <div
                  aria-hidden
                  className="glow-orb absolute -top-24 left-1/2 size-56 -translate-x-1/2 opacity-40 transition-opacity duration-500 group-hover:opacity-90"
                />
                <div className="relative flex flex-1 flex-col">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="mt-6 flex items-baseline gap-1">
                    <span className="text-lg text-muted-foreground">R$</span>
                    <span className="font-display text-5xl font-bold tracking-tight">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </p>
                  <div className="my-7 h-px bg-border" />
                  {plan.features.length > 0 ? (
                    <ul className="flex-1 space-y-3 text-sm">
                      {plan.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                      Recursos e limites deste plano disponíveis na plataforma.
                    </p>
                  )}
                  <Button asChild variant="glass" size="xl" className="mt-8 w-full group-hover:border-primary/40">
                    <a href={links.platform} target="_blank" rel="noopener noreferrer">
                      Conhecer a Barberfy <ArrowRight />
                    </a>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
