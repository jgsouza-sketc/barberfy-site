import { benefits } from "@/content/barberfy";
import { Reveal } from "./Reveal";

export function Benefits() {
  return (
    <section id="beneficios" className="hairline-top relative bg-graphite/40 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="eyebrow">Benefícios</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-3xl font-bold uppercase leading-tight sm:text-5xl">
              Mais controle para você.{" "}
              <span className="text-gradient">Mais organização para sua barbearia.</span>
            </h2>
          </Reveal>
        </div>

        <ol className="divide-y divide-border border-y border-border">
          {benefits.map((b, i) => (
            <Reveal as="li" key={b.title} delay={i * 60}>
              <div className="group grid grid-cols-[auto_minmax(0,1fr)] gap-6 py-8 transition-colors">
                <span className="font-display text-sm font-semibold text-primary/70 transition-colors group-hover:text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-semibold transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                    {b.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-muted-foreground">{b.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
