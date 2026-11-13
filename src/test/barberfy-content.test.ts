import { describe, expect, it } from "vitest";

import { links, modules, plans, privacyController, privacyPolicy } from "@/content/barberfy";

describe("Barberfy site content", () => {
  it("shows the three reference plan prices", () => {
    expect(plans.map((p) => p.price)).toEqual(["59,90", "99,90", "149,90"]);
  });

  it("does not invent differences between plans", () => {
    expect(plans.every((p) => p.features.length === 0)).toBe(true);
  });

  it("sends visitors to the official platform and Instagram", () => {
    expect(links.platform).toBe("https://barber-fy.base44.app");
    expect(links.instagram).toBe("https://www.instagram.com/barberrfy.app/");
  });

  it("lists only the seven real modules", () => {
    expect(modules.map((m) => m.name)).toEqual([
      "Dashboard",
      "Agendamentos",
      "Clientes",
      "Profissionais e Equipe",
      "Serviços e Preços",
      "Financeiro",
      "Relatórios e Indicadores",
    ]);
  });

  it("does not invent company legal data in the privacy policy", () => {
    expect(privacyController.legalName).toBeNull();
    expect(privacyController.cnpj).toBeNull();
    expect(privacyController.privacyEmail).toBeNull();
  });

  it("states the analytics retention of 90 days detailed and 1 year summaries", () => {
    const retention = privacyPolicy.sections.find((s) => s.title.includes("Armazenamento"));
    const text = retention?.items?.join(" ") ?? "";
    expect(text).toContain("90 dias");
    expect(text).toContain("1 ano");
  });
});
