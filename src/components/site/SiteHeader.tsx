import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { links, nav } from "@/content/barberfy";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled || open ? "glass-nav border-border" : "border-transparent",
      )}
    >
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:h-[72px]">
        <a href="#inicio" className="min-w-0" aria-label="Barberfy — início">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Button asChild variant="hero" size="pill" className="hidden sm:inline-flex">
            <a href={links.platform} target="_blank" rel="noopener noreferrer">
              Conhecer a Barberfy
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid size-10 shrink-0 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary/40 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "grid overflow-hidden transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <nav aria-label="Menu móvel" className="px-5 pb-6 pt-2 sm:px-8">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                    className="block border-b border-border py-4 font-display text-lg text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" size="xl" className="mt-6 w-full">
              <a
                href={links.platform}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
              >
                Conhecer a Barberfy
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
