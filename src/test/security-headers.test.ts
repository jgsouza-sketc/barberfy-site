import { describe, expect, it } from "vitest";

import { buildSecurityHeaders, isPreviewOrLocalHost } from "@/lib/security-headers";

describe("Security headers", () => {
  it("blocks third-party framing on the published site", () => {
    const h = buildSecurityHeaders(new URL("https://barberfy.lovable.app/"));
    expect(h["X-Frame-Options"]).toBe("SAMEORIGIN");
    expect(h["Content-Security-Policy"]).toContain("frame-ancestors 'self'");
    expect(h["Content-Security-Policy"]).toContain("object-src 'none'");
  });

  it("forces HTTPS on secure requests", () => {
    const h = buildSecurityHeaders(new URL("https://barberfy.com.br/"));
    expect(h["Strict-Transport-Security"]).toBe("max-age=31536000");
  });

  it("keeps the Lovable editor preview embeddable", () => {
    const h = buildSecurityHeaders(
      new URL("https://id-preview--41864c8e-cb5d-48df-947b-fc116bd3cf77.lovable.app/"),
    );
    expect(h["X-Frame-Options"]).toBeUndefined();
    expect(h["Content-Security-Policy"]).not.toContain("frame-ancestors");
  });

  it("does not treat published slugs as previews", () => {
    expect(isPreviewOrLocalHost("barberfy.lovable.app")).toBe(false);
    expect(isPreviewOrLocalHost("project--41864c8e-cb5d-48df-947b-fc116bd3cf77.lovable.app")).toBe(false);
    expect(isPreviewOrLocalHost("preview--barberfy.lovable.app")).toBe(true);
  });

  it("always sends nosniff", () => {
    const h = buildSecurityHeaders(new URL("https://barberfy.com.br/"));
    expect(h["X-Content-Type-Options"]).toBe("nosniff");
  });
});
