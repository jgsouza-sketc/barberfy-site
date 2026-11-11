import { describe, expect, it } from "vitest";

import { links, modules, plans } from "@/content/barberfy";

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
});
