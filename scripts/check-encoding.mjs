import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const includeDirs = ['src', 'public'];
const includeFiles = [
  '.editorconfig',
  'package.json',
  'README.md',
  'next.config.mjs',
  'postcss.config.mjs',
  'tailwind.config.ts',
  'tsconfig.json',
];
const textExtensions = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.mjs',
  '.cjs',
  '.json',
  '.md',
  '.css',
  '.txt',
]);

// Common mojibake fragments seen when UTF-8 text is decoded as Latin-1/Windows-1252.
const suspiciousPattern =
  /\uFFFD|Ã.|Â.|â.|ƒ|Ð|Ñ|â€™|â€œ|â€|â€“|â€”|â€¢|â€¦|â‚¬/;

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.next' || entry.name === 'out') {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
      continue;
    }

    if (textExtensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

function collectFiles() {
  const files = [];

  for (const dir of includeDirs) {
    const fullDir = path.join(root, dir);
    if (fs.existsSync(fullDir)) {
      walk(fullDir, files);
    }
  }

  for (const file of includeFiles) {
    const fullFile = path.join(root, file);
    if (fs.existsSync(fullFile)) {
      files.push(fullFile);
    }
  }

  return [...new Set(files)];
}

function getLineInfo(content, index) {
  const prefix = content.slice(0, index);
  const line = prefix.split('\n').length;
  const column = prefix.length - prefix.lastIndexOf('\n');
  return { line, column };
}

const matches = [];

for (const file of collectFiles()) {
  const content = fs.readFileSync(file, 'utf8');
  const match = suspiciousPattern.exec(content);

  if (!match) {
    continue;
  }

  const { line, column } = getLineInfo(content, match.index);
  const snippet = content.slice(match.index, match.index + 40).split('\n')[0];

  matches.push({
    file: path.relative(root, file),
    line,
    column,
    snippet,
  });
}

if (matches.length > 0) {
  console.error('Encoding check failed. Suspicious mojibake found:');

  for (const match of matches) {
    console.error(`- ${match.file}:${match.line}:${match.column} ${match.snippet}`);
  }

  process.exit(1);
}

console.log('Encoding check passed.');
