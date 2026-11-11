import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

import { links, modules, nav, plans } from "@/content/barberfy";
import { Logo } from "./Logo";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="hairline-top border-t border-border bg-graphite/30">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.3fr_1fr_1.2fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Plataforma de gestão desenvolvida para barbearias organizarem a operação e acompanharem
            as informações importantes do negócio.
          </p>
        </div>

        <FooterCol title="Navegação">
          {nav.map((n) => (
            <FooterLink key={n.href} href={n.href}>
              {n.label}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Funcionalidades">
          {modules.map((m) => (
            <FooterLink key={m.name} href="#funcionalidades">
              {m.name}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Planos">
          {plans.map((p) => (
            <FooterLink key={p.name} href="#planos">
              {p.name}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Contato">
          <FooterLink href={links.platform} external>
            Acessar a plataforma
          </FooterLink>
          <li>
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="size-4" /> {links.instagramHandle}
            </a>
          </li>
        </FooterCol>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-6 text-xs text-muted-foreground sm:px-8">
          <p>© {year} Barberfy. Todos os direitos reservados.</p>
          <Link to="/privacidade" className="transition-colors hover:text-primary">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold text-foreground">{title}</h3>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        {children}
      </a>
    </li>
  );
}
