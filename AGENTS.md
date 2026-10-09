# Portfolio workspace guide

## Product boundary

This is a public, static portfolio for an AI application developer. Only publish facts, links, and images explicitly approved for public use. `content/` is the public source consumed by the site; `../knowledge-vault/` remains the research and decision source.

## Integrations

- Obsidian MCP may read only `../knowledge-vault/`.
- Notion is a derived board. Publish only approved vault notes with the existing dry-run-first publisher.
- GitHub is read-only evidence unless the user explicitly authorizes push, PR, or deployment.
- Antigravity research must be recorded in vault notes with prompt, sources, alternatives, and selection reason.

## Delivery

- Do not commit secrets, private contact details, unapproved repository URLs, generated PDF output, or `.env` files.
- Run `npm run quality` before a commit. Run browser QA at 360px and 1440px for visual changes.
- Do not deploy GitHub Pages, push, or open a PR without explicit approval.
