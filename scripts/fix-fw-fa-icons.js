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

function fixFile(content) {
  let changed = false;
  let next = content.replace(
    /<FaIcon icon="fw" className="fa-([a-z0-9-]+)(?:\s([^"]*))?"\s*\/>/g,
    (match, iconName, rest) => {
      changed = true;
      return rest
        ? `<FaIcon icon="${iconName}" fixedWidth className="${rest}" />`
        : `<FaIcon icon="${iconName}" fixedWidth />`;
    }
  );

  next = next.replace(
    /<FaIcon icon="fw" className="fa-([a-z0-9-]+)"\s*\/>/g,
    (match, iconName) => {
      changed = true;
      return `<FaIcon icon="${iconName}" fixedWidth />`;
    }
  );

  next = next.replace(
    /<FaIcon icon="fw" fixedWidth className="fa-([a-z0-9-]+)(?:\s([^"]*))?"\s*\/>/g,
    (match, iconName, rest) => {
      changed = true;
      return rest
        ? `<FaIcon icon="${iconName}" fixedWidth className="${rest}" />`
        : `<FaIcon icon="${iconName}" fixedWidth />`;
    }
  );

  next = next.replace(
    /<FaIcon icon="fw" fixedWidth className="fa-([a-z0-9-]+)"\s*\/>/g,
    (match, iconName) => {
      changed = true;
      return `<FaIcon icon="${iconName}" fixedWidth />`;
    }
  );

  return { content: next, changed };
}

let count = 0;
for (const file of walk('app')) {
  const original = fs.readFileSync(file, 'utf8');
  const { content, changed } = fixFile(original);
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    count += 1;
  }
}
process.stdout.write(`Fixed fw icon misuse in ${count} files\n`);
