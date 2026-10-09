# Connection runbook

## Obsidian

Configure the Obsidian MCP server with `../knowledge-vault` as its only allowed root. Do not expose `VibeCoding` or project repositories. The example configuration is in `mcp/obsidian-vault-only.example.json`.

## Notion

Notion is downstream from the vault. In `../knowledge-vault`, set `NOTION_TOKEN` and `NOTION_DATABASE_ID` only in the local shell or ignored `.env`, run `node tools/notion-publisher.mjs --dry-run`, inspect the counts, then run the publisher. The portfolio never reads Notion as a content source.

## GitHub

The current GitHub CLI account is authenticated. Before public deployment, create/select the intended public repository, confirm its public visibility and custom-domain policy, then enable GitHub Pages from the Actions workflow. Do not include private repositories in site data.

## Antigravity

Use Antigravity for research and image/design alternatives only. Save a `research` or `design` vault note with the prompt, source URLs, outputs considered, selection reason, and date. Do not enable Gmail or Gemini API automation in this project.
