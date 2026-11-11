<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules

- All marketing copy, links, modules, plans, FAQ and screenshot references live in `src/content/barberfy.ts`; sections in `src/components/site/` only render it. Why: content must be easy to update and stay limited to real product facts.
- Platform screenshots are real captures with personal data blurred before upload as Lovable assets. Why: the site must never show invented screens or customer data.
- HTTP security headers are added in `src/server.ts` via `src/lib/security-headers.ts`; framing protection is skipped on Lovable preview hosts and localhost. Why: protects the published site without breaking the editor preview iframe.
- Web fonts are self-hosted with Fontsource packages imported in `src/styles.css`, never loaded from Google Fonts. Why: avoids sending visitor IPs to third parties (LGPD) and keeps the privacy policy accurate.
