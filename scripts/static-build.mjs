import { spawn } from "node:child_process";
import { existsSync, copyFileSync, rmSync, readdirSync, renameSync, statSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";
const clientDir = join(dist, "client");
const serverDir = join(dist, "server");

if (!existsSync(clientDir)) {
  console.error(`Missing ${clientDir}. Did vite build run?`);
  process.exit(1);
}
if (!existsSync(serverDir)) {
  console.error(`Missing ${serverDir}. Did vite build run?`);
  process.exit(1);
}

// Alias dist/server/index.js → dist/server/server.js for preview-server-plugin
const serverIndex = join(serverDir, "index.js");
const serverAlias = join(serverDir, "server.js");
if (existsSync(serverIndex) && !existsSync(serverAlias)) {
  copyFileSync(serverIndex, serverAlias);
  console.log("Aliased dist/server/index.js → dist/server/server.js");
}

const PORT = 4910;
const preview = spawn("npx", ["vite", "preview", "--port", String(PORT)], {
  stdio: ["ignore", "inherit", "inherit"],
});

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.status === 200) return res;
    } catch {}
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`Timed out waiting for ${url}`);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

try {
  const res = await waitForServer(`http://localhost:${PORT}/`);
  const html = await res.text();
  const { writeFileSync } = await import("node:fs");
  writeFileSync(join(clientDir, "index.html"), html);
  console.log(`Wrote prerendered index.html (${html.length} bytes)`);
} finally {
  preview.kill("SIGTERM");
  await sleep(500);
}

// Flatten dist/client/* into dist/
for (const entry of readdirSync(clientDir)) {
  const src = join(clientDir, entry);
  const dest = join(dist, entry);
  if (existsSync(dest)) rmSync(dest, { recursive: true, force: true });
  renameSync(src, dest);
}
rmSync(clientDir, { recursive: true, force: true });
rmSync(serverDir, { recursive: true, force: true });

const redirectsDest = join(dist, "_redirects");
if (!existsSync(redirectsDest)) {
  copyFileSync("public/_redirects", redirectsDest);
  console.log("Copied public/_redirects → dist/_redirects");
}

function countFiles(dir) {
  let n = 0;
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) n += countFiles(p);
    else n++;
  }
  return n;
}

console.log(`Static build complete. ${countFiles(dist)} files in dist/.`);