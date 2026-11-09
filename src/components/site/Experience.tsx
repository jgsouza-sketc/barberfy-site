import { useEffect, useState, type CSSProperties } from "react";

import { mobileScreen, screens } from "@/content/barberfy";
import { cn } from "@/lib/utils";
import { LaptopFrame, PhoneFrame } from "./Devices";
import { Reveal } from "./Reveal";

const INTERVAL = 5500;

export function Experience() {
  const [active, setActive] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const t = window.setTimeout(() => setActive((a) => (a + 1) % screens.length), INTERVAL);
    return () => window.clearTimeout(t);
  }, [active, cycle]);

  const select = (i: number) => {
    setActive(i);
    setCycle((c) => c + 1);
  };

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="glow-orb absolute -left-40 top-1/3 size-[520px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">Experiência da plataforma</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-3xl font-bold uppercase leading-tight sm:text-5xl">
              Uma interface <span className="text-gradient">clara e moderna.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Telas reais da Barberfy, do jeito que você vai usar no dia a dia.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-14">
          <Reveal>
            <div role="tablist" aria-label="Telas da plataforma" className="flex flex-col gap-2">
              {screens.map((s, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={s.id}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    aria-controls="experience-screen"
                    onClick={() => select(i)}
                    className={cn(
                      "relative overflow-hidden rounded-xl border p-5 text-left transition-all duration-300",
                      isActive
                        ? "border-primary/35 bg-primary/5"
                        : "border-transparent hover:border-border hover:bg-foreground/[0.03]",
                    )}
                  >
                    <span
                      className={cn(
                        "font-display text-base font-semibold transition-colors",
                        isActive ? "text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {s.title}
                    </span>
                    <span
                      className={cn(
                        "grid transition-all duration-500",
                        isActive ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <span className="min-h-0 overflow-hidden text-sm leading-relaxed text-muted-foreground">
                        {s.description}
                      </span>
                    </span>
                    {isActive && (
                      <span
                        key={`${active}-${cycle}`}
                        aria-hidden
                        className="animate-progress absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-emerald"
                        style={{ "--progress-duration": `${INTERVAL}ms` } as CSSProperties}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={120} className="relative pb-10 sm:pr-10">
            <LaptopFrame>
              <div id="experience-screen" role="tabpanel" className="absolute inset-0">
                {screens.map((s, i) => (
                  <img
                    key={s.id}
                    src={s.src}
                    alt={s.alt}
                    width={1056}
                    height={716}
                    loading="lazy"
                    className={cn(
                      "absolute inset-0 size-full object-cover object-left-top transition-all duration-700",
                      i === active ? "scale-100 opacity-100" : "scale-[1.02] opacity-0",
                    )}
                  />
                ))}
              </div>
            </LaptopFrame>
            <PhoneFrame className="animate-float absolute -bottom-4 -right-2 w-[24%] max-w-[190px] sm:-right-4">
              <img
                src={mobileScreen.src}
                alt={mobileScreen.alt}
                width={482}
                height={1018}
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
            </PhoneFrame>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
