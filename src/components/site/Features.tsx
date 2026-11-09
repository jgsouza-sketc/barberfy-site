import { Bell, Globe, Palette, Settings } from "lucide-react";

import { modules } from "@/content/barberfy";
import { Reveal } from "./Reveal";

const extras = [
  { label: "Presença digital", icon: Globe },
  { label: "Personalização", icon: Palette },
  { label: "Notificações internas", icon: Bell },
  { label: "Configurações", icon: Settings },
];

export function Features() {
  return (
    <section id="funcionalidades" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Funcionalidades</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-3xl font-bold uppercase leading-tight sm:text-5xl">
              Os módulos da <span className="text-gradient">Barberfy</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Tudo o que a versão atual da plataforma oferece para a gestão da sua barbearia.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal key={m.name} delay={(i % 4) * 80}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/35">
                  <div
                    aria-hidden
                    className="glow-orb absolute -right-16 -top-16 size-40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative">
                    <div className="grid size-12 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:shadow-glow">
                      <Icon className="size-5" />
                    </div>
                    <p className="mt-6 font-display text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold">{m.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {m.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}

          <Reveal delay={240}>
            <article className="relative h-full overflow-hidden rounded-2xl border border-primary/25 bg-primary/5 p-6">
              <h3 className="text-lg font-semibold">Também no painel</h3>
              <ul className="mt-5 space-y-3">
                {extras.map(({ label, icon: Icon }) => (
                  <li key={label} className="flex items-center gap-3 text-sm text-foreground">
                    <Icon className="size-4 shrink-0 text-primary" />
                    {label}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
