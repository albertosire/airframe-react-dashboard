const fs = require('fs');
const path = require('path');

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    if (fs.statSync(fullPath).isDirectory()) {
      if (entry !== 'node_modules') walk(fullPath, acc);
    } else if (/\.(js|jsx)$/.test(entry)) {
      acc.push(fullPath);
    }
  }
  return acc;
}

const skip = new Set([
  'fa', 'fw', 'lg', 'sm', '1x', '2x', '3x', '4x', '5x',
  'stack', 'stack-1x', 'stack-2x', 'white', 'small', 'circle',
]);

const icons = new Set();
const patterns = [
  /fa fa-([a-z0-9-]+)/g,
  /fa-fw fa-([a-z0-9-]+)/g,
  /fa fa-fw fa-([a-z0-9-]+)/g,
  /fa-fw fa fa-([a-z0-9-]+)/g,
  /fa fa-lg fa-fw[^"]*fa-([a-z0-9-]+)/g,
  /fa-\$\{[^}]+\}/g,
];

for (const file of walk('app')) {
  const content = fs.readFileSync(file, 'utf8');
  for (const pattern of patterns.slice(0, 4)) {
    let match;
    while ((match = pattern.exec(content))) {
      if (!skip.has(match[1])) icons.add(match[1]);
    }
  }
}

process.stdout.write([...icons].sort().join('\n'));
