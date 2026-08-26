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

function getRelativeImport(fromFile) {
  const placeholdersPath = path.join(root, 'data', 'placeholders.js');
  let relative = path.relative(path.dirname(fromFile), placeholdersPath).replace(/\\/g, '/');
  if (!relative.startsWith('.')) {
    relative = `./${relative}`;
  }
  return relative.replace(/\.js$/, '');
}

const files = walk(root);
let updated = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('@faker-js/faker')) {
    continue;
  }

  const importPath = getRelativeImport(file);
  content = content.replace(
    /import\s+\{\s*faker\s*\}\s+from\s+["']@faker-js\/faker["'];?\s*\n/g,
    `import { placeholder as faker } from '${importPath}';\n`
  );

  fs.writeFileSync(file, content);
  updated += 1;
}

console.log(`Updated ${updated} files.`);
