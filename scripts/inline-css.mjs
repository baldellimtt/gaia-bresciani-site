import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const OUT_DIR = join(process.cwd(), 'out');

function getAllHtml(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...getAllHtml(full));
    } else if (extname(full) === '.html') {
      files.push(full);
    }
  }
  return files;
}

const cssCache = new Map();

function getCss(href) {
  if (cssCache.has(href)) return cssCache.get(href);
  const filePath = join(OUT_DIR, href);
  try {
    const content = readFileSync(filePath, 'utf-8');
    cssCache.set(href, content);
    return content;
  } catch {
    return null;
  }
}

const linkRe = /<link\s+rel="stylesheet"\s+href="([^"]+)"\s*[^>]*\/?\s*>/g;

let processed = 0;
for (const htmlPath of getAllHtml(OUT_DIR)) {
  let html = readFileSync(htmlPath, 'utf-8');
  let changed = false;

  html = html.replace(linkRe, (match, href) => {
    const css = getCss(href);
    if (!css) return match;
    changed = true;
    return `<style>${css}</style>`;
  });

  if (changed) {
    writeFileSync(htmlPath, html);
    processed++;
  }
}

console.log(`Inlined CSS into ${processed} HTML files (${cssCache.size} stylesheets)`);
