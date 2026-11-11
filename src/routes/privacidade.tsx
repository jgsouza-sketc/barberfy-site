import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { Logo } from "@/components/site/Logo";
import { privacyPolicy } from "@/content/barberfy";

const title = "Política de Privacidade — Barberfy";
const description =
  "Como o site da Barberfy trata as informações dos visitantes, uso de cookies e seus direitos pela LGPD.";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-4 px-5 sm:px-8 lg:h-[72px]">
          <Link to="/" aria-label="Barberfy — início">
            <Logo />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" /> Voltar ao início
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="eyebrow">LGPD</p>
        <h1 className="mt-4 text-3xl font-bold uppercase leading-tight sm:text-4xl">
          Política de Privacidade
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Última atualização: {privacyPolicy.updatedAt}
        </p>
        <div className="mt-12 space-y-10">
          {privacyPolicy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-lg font-semibold">{section.title}</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <footer className="border-t border-border">
        <p className="mx-auto max-w-3xl px-5 py-6 text-xs text-muted-foreground sm:px-8">
          © {new Date().getFullYear()} Barberfy. Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
}
