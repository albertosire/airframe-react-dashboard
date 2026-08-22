const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'app');

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else if (entry.name.endsWith('.js')) {
      files.push(fullPath);
    }
  }
  return files;
}

const replacements = [
  ['react-beautiful-dnd', '@hello-pangea/dnd'],
  ["from 'node-fetch'", "from 'isomorphic-fetch'"],
  ['from "node-fetch"', 'from "isomorphic-fetch"'],
];

let updated = 0;
for (const file of walk(root)) {
  let content = fs.readFileSync(file, 'utf8');
  let next = content;
  for (const [from, to] of replacements) {
    next = next.replaceAll(from, to);
  }
  if (next !== content) {
    fs.writeFileSync(file, next);
    updated += 1;
  }
}

console.log(`Updated ${updated} files for dependency import migrations.`);
