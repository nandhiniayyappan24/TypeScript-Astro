#!/usr/bin/env node
const branch = 'ts5.4';
const tools = [
  { name: 'cccc', folder: 'cccc' },
  { name: 'debtmap', folder: 'debtmap' },
  { name: 'reson', folder: 'reson' },
  { name: 'oxlint', folder: 'oxlint' },
  { name: 'Bearer CLI', folder: 'bearer-cli' },
  { name: 'CVE Lite CLI', folder: 'cve-lite-cli' },
  { name: 'license-checker-rseidelsohn', folder: 'license-checker-rseidelsohn' },
  { name: '@sigstore/cli', folder: 'sigstore-cli' },
  { name: '@nodesecure/cli', folder: 'nodesecure-cli' },
  { name: 'monocart-coverage-reports', folder: 'monocart-coverage-reports' },
  { name: 'oxc-coverage-instrument', folder: 'oxc-coverage-instrument' },
  { name: 'mewt', folder: 'mewt' },
  { name: 'TraceGraph (@tracegraph/trace-js)', folder: 'tracegraph' },
  { name: 'diff-cover', folder: 'diff-cover' },
  { name: 'ts-unused-exports', folder: 'ts-unused-exports' },
  { name: 'red-dragon + oxc-coverage-instrument', folder: 'red-dragon-oxc' },
  { name: 'Opengrep', folder: 'opengrep' },
  { name: 'red-dragon', folder: 'red-dragon' },
  { name: 'git-hot', folder: 'git-hot' },
  { name: 'covgate', folder: 'covgate' },
];
console.log(`=== Tool integration for ${branch} ===`);
for (const tool of tools) {
  console.log(`[${tool.name}] wired via tools/${tool.folder}/trigger.yaml`);
}
