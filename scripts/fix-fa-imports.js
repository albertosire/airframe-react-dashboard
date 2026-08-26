const fs = require('fs');
const path = require('path');

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    if (fs.statSync(fullPath).isDirectory()) {
      if (entry !== 'node_modules') walk(fullPath, acc);
    } else if (/\.js$/.test(entry)) {
      acc.push(fullPath);
    }
  }
  return acc;
}

function fixBrokenImports(content) {
  return content.replace(
    /import \{\s*\r?\nimport \{ FaIcon \} from '([^']+)';\r?\n/g,
    "import { FaIcon } from '$1';\nimport {\n"
  );
}

let count = 0;
for (const file of walk('app')) {
  const original = fs.readFileSync(file, 'utf8');
  const fixed = fixBrokenImports(original);
  if (fixed !== original) {
    fs.writeFileSync(file, fixed, 'utf8');
    count += 1;
  }
}
process.stdout.write(`Fixed imports in ${count} files\n`);
