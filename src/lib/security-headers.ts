/*
 * HTTP security headers added to every response from the site's server.
 * Framing protection is skipped on Lovable preview hosts and localhost so the
 * editor preview (which embeds the site in an iframe) keeps working.
 */

const PREVIEW_SUFFIXES = [".lovable.app", ".gpt-eng.com", ".gptengineer.run"];
const LIVE_PREVIEW_SUFFIXES = [".lovableproject.com", ".lovableproject-dev.com"];

export function isPreviewOrLocalHost(rawHostname: string): boolean {
  const hostname = rawHostname.toLowerCase();
  if (hostname === "localhost" || hostname === "127.0.0.1" || hostname === "[::1]") return true;
  if (LIVE_PREVIEW_SUFFIXES.some((s) => hostname.endsWith(s))) return true;

  const suffix = PREVIEW_SUFFIXES.find((s) => hostname.endsWith(s));
  if (!suffix) return false;
  const labels = hostname.slice(0, -suffix.length).split(".");
  const first = labels[0] ?? "";

  if (/^(?:id-preview|preview)(?:-[a-z0-9]+)?--.+$/.test(first)) return labels.length <= 2;
  if (/^live--[0-9a-f-]{36}(?:-thr_[a-z0-9]+)?$/.test(first)) return labels.length === 2;
  if (/^project--[0-9a-f-]{36}-dev$/.test(first)) return labels.length === 1;
  return false;
}

export function buildSecurityHeaders(url: URL): Record<string, string> {
  const preview = isPreviewOrLocalHost(url.hostname);

  const csp = ["base-uri 'self'", "object-src 'none'", "form-action 'self'"];
  if (!preview) csp.push("frame-ancestors 'self' https://lovable.dev https://*.lovable.dev");

  const headers: Record<string, string> = {
    "Content-Security-Policy": csp.join("; "),
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy":
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
  };
  if (!preview) headers["X-Frame-Options"] = "SAMEORIGIN";
  if (url.protocol === "https:") headers["Strict-Transport-Security"] = "max-age=31536000";
  return headers;
}

export function withSecurityHeaders(request: Request, response: Response): Response {
  let url: URL;
  try {
    url = new URL(request.url);
  } catch {
    return response;
  }
  const extra = buildSecurityHeaders(url);
  try {
    for (const [name, value] of Object.entries(extra)) {
      if (!response.headers.has(name)) response.headers.set(name, value);
    }
    return response;
  } catch {
    // Immutable headers (e.g. a fetched Response): copy into a new Response.
    const headers = new Headers(response.headers);
    for (const [name, value] of Object.entries(extra)) {
      if (!headers.has(name)) headers.set(name, value);
    }
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }
}
