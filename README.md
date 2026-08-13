# TypeScript Astro — Monolithic (ts5.2)

Astro + TypeScript content site monolithic project for **ts5.2** targeting **TypeScript 5.2.2**.

## Project type

- **Language:** TypeScript
- **Scenario:** 1 - Monolithic
- **Project type:** Astro + TypeScript Content Site
- **Module:** flat (single module)
- **Astro:** v4.16.18

## Supported tools (from Alternative Tools Enterprise Mapping Matrix)

- cccc
- debtmap
- reson
- oxlint
- Bearer CLI
- CVE Lite CLI
- license-checker-rseidelsohn
- @sigstore/cli
- @nodesecure/cli
- monocart-coverage-reports
- oxc-coverage-instrument
- mewt
- TraceGraph (@tracegraph/trace-js)
- diff-cover
- ts-unused-exports
- red-dragon + oxc-coverage-instrument
- Opengrep
- red-dragon
- git-hot
- covgate

## Build

```bash
npm install
npm run build
npm test
npm run typecheck
```

## Run (local URL)

```bash
npm run dev
```

Then open **http://localhost:4321** — health at **http://localhost:4321/health**

## Project layout

| Path | Role |
|------|------|
| `src/pages/` | Astro pages and API routes |
| `src/services/` | Business logic + versionSignature.ts |
| `src/analysis/` | SAST/complexity/lint fixtures |
| `tests/` | Vitest unit tests |
| `tools/` | 20 alternative QA tools + TypeScriptAstro.Tools integration |
| `tools/runToolIntegration.mjs` | Logs all tool connections after build |

## Tool connection

All tools are wired through `tools/*/trigger.yaml` pointing at `package.json`, `src/`, and `tests/`.
The `tools/TypeScriptAstro.Tools/` package marks integration and runs after `npm run build`.
