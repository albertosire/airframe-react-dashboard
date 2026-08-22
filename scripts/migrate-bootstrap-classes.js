const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'app');

const replacements = [
  [/\bml-auto\b/g, 'ms-auto'],
  [/\bmr-auto\b/g, 'me-auto'],
  [/\bml-(\d)\b/g, 'ms-$1'],
  [/\bmr-(\d)\b/g, 'me-$1'],
  [/\bpl-(\d)\b/g, 'ps-$1'],
  [/\bpr-(\d)\b/g, 'pe-$1'],
  [/\btext-right\b/g, 'text-end'],
  [/\btext-left\b/g, 'text-start'],
  [/\bfloat-left\b/g, 'float-start'],
  [/\bfloat-right\b/g, 'float-end'],
  [/\bfont-weight-bold\b/g, 'fw-bold'],
  [/\bfont-weight-normal\b/g, 'fw-normal'],
  [/\bfont-weight-light\b/g, 'fw-light'],
  [/\bno-gutters\b/g, 'g-0'],
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else if (/\.(js|scss|css)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

let updated = 0;
for (const file of walk(root)) {
  let content = fs.readFileSync(file, 'utf8');
  let next = content;
  for (const [pattern, replacement] of replacements) {
    next = next.replace(pattern, replacement);
  }
  if (next !== content) {
    fs.writeFileSync(file, next);
    updated += 1;
  }
}

console.log(`Updated ${updated} files for Bootstrap 5 classes.`);
