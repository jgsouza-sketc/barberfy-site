import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { Logo } from "@/components/site/Logo";
import { privacyController, privacyPolicy } from "@/content/barberfy";

const title = "Política de Privacidade — Barberfy";
const description =
  "Como o site da Barberfy trata registros de acesso, estatísticas e cookies, por quanto tempo guarda os dados e como exercer seus direitos pela LGPD.";

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
        <ControllerCard />
        <div className="mt-12 space-y-10">
          {privacyPolicy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-lg font-semibold">{section.title}</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {section.paragraphs?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {section.items && (
                  <ul className="space-y-2 pl-5 marker:text-primary [list-style:disc]">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.links && (
                  <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
                    {section.links.map((l) => (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-primary transition-colors hover:text-foreground"
                        >
                          {l.label} <ExternalLink className="size-3.5" />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
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

function ControllerCard() {
  const c = privacyController;
  const pending = <span className="italic text-muted-foreground/80">{c.pendingText}</span>;
  const rows = [
    { label: "Controlador", value: <span className="text-foreground">{c.name}</span> },
    { label: "Razão social", value: c.legalName ?? pending },
    { label: "CNPJ", value: c.cnpj ?? pending },
    { label: "Encarregado (DPO)", value: c.dpo ?? pending },
    {
      label: "E-mail para assuntos de privacidade (LGPD)",
      value: c.privacyEmail ? (
        <a href={`mailto:${c.privacyEmail}`} className="text-primary hover:text-foreground">
          {c.privacyEmail}
        </a>
      ) : (
        pending
      ),
    },
  ];
  return (
    <section
      aria-labelledby="controlador"
      className="mt-10 rounded-2xl border border-border bg-graphite/30 p-6 sm:p-8"
    >
      <h2 id="controlador" className="font-display text-lg font-semibold">
        Controlador e contato
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{c.role}</p>
      <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
        {rows.map((r) => (
          <div key={r.label} className="border-t border-border pt-3">
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">{r.label}</dt>
            <dd className="mt-1">{r.value}</dd>
          </div>
        ))}
      </dl>
      {!c.privacyEmail && (
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{c.pendingEmailNote}</p>
      )}
    </section>
  );
}
