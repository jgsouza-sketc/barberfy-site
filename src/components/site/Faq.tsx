import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/content/barberfy";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <section id="faq" className="hairline-top relative bg-graphite/40 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <Reveal>
            <p className="eyebrow">FAQ</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-3xl font-bold uppercase leading-tight sm:text-5xl">
              Perguntas <span className="text-gradient">frequentes.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <Accordion type="single" collapsible className="border-t border-border">
            {faq.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="py-6 font-display text-base font-semibold hover:no-underline hover:text-primary sm:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
