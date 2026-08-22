const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'app');

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(fullPath, files);
    else if (entry.name.endsWith('.js')) files.push(fullPath);
  }
  return files;
}

let updated = 0;
for (const file of walk(root)) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('uuid/v4')) continue;

  content = content
    .replace(/import\s+uid\s+from\s+['"]uuid\/v4['"];?/g, "import { v4 as uid } from 'uuid';")
    .replace(/import\s+uuid\s+from\s+['"]uuid\/v4['"];?/g, "import { v4 as uuid } from 'uuid';")
    .replace(/import\s+v4\s+from\s+['"]uuid\/v4['"];?/g, "import { v4 } from 'uuid';");

  fs.writeFileSync(file, content);
  updated += 1;
}

console.log(`Updated ${updated} uuid import files.`);
