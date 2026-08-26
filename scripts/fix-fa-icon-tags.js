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

function ensureFaIconImport(content, filePath) {
  if (!content.includes('<FaIcon') && !content.includes('FaIcon ')) return content;
  const relDepth = path.relative('app', path.dirname(filePath)).split(path.sep).length;
  const prefix = relDepth === 0 ? './' : `${ '../'.repeat(relDepth) }`;
  const candidates = [
    `${prefix}components/Icon`,
    `${prefix}components`,
  ];
  for (const importPath of candidates) {
    if (content.includes(`from '${importPath}'`) || content.includes(`from "${importPath}"`)) {
      return content;
    }
  }
  const importLine = `import { FaIcon } from '${candidates[0]}';\n`;
  const lastImport = content.lastIndexOf('\nimport ');
  if (lastImport !== -1) {
    const end = content.indexOf('\n', lastImport + 1);
    return `${content.slice(0, end + 1)}${importLine}${content.slice(end + 1)}`;
  }
  return `${importLine}${content}`;
}

function attrsToFaIcon(attrs) {
  let fixedWidth = false;
  let className = '';
  let size = '';

  const classMatch = attrs.match(/className="([^"]*)"/);
  if (classMatch) {
    const tokens = classMatch[1].split(/\s+/).filter(Boolean);
    fixedWidth = tokens.includes('fa-fw');
    size = tokens.find((t) => t === 'fa-lg' || /^fa-[0-9]x$/.test(t))?.replace('fa-', '') || '';
    className = tokens.filter((t) =>
      t !== 'fa-fw' && t !== 'fa-lg' && !/^fa-[0-9]x$/.test(t) && !t.startsWith('fa-stack')
    ).join(' ');
  }

  const parts = [];
  if (fixedWidth) parts.push('fixedWidth');
  if (size) parts.push(`size="${size}"`);
  if (className) parts.push(`className="${className}"`);
  return parts.length ? ` ${parts.join(' ')}` : '';
}

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  const before = content;

  content = content.replace(/<i\s+icon="([^"]+)"([^>]*)\/>/g, (match, icon, attrs) => {
    changed = true;
    return `<FaIcon icon="${icon}"${attrsToFaIcon(attrs)} />`;
  });

  content = content.replace(/<i\s+icon="([^"]+)"([^>]*)><\/i>/g, (match, icon, attrs) => {
    changed = true;
    return `<FaIcon icon="${icon}"${attrsToFaIcon(attrs)} />`;
  });

  content = content.replace(
    /<i\s+className=\{`([^`]*fa fa-circle-o[^`]*)`\}\s*><\/i>/g,
    (match, classValue) => {
      changed = true;
      const utility = classValue.replace(/^\s*fa\s+fa-circle-o\s*/, '').trim();
      return `<FaIcon icon="circle-o"${utility ? ` className="${utility}"` : ''} />`;
    }
  );

  content = content.replace(
    /<i\s+className=\{`\s*fa fa-circle fa-stack-2x text-\$\{([^}]+)\}`\}\s*><\/i>/g,
    (match, expr) => {
      changed = true;
      return `<FaIcon icon="circle" size="2x" className={\`text-\${${expr}}\`} />`;
    }
  );

  content = content.replace(
    /<i\s+className=\{`fa fa-fw fa-circle text-\$\{([^}]+)\}`\}\s*><\/i>/g,
    (match, expr) => {
      changed = true;
      return `<FaIcon icon="circle" fixedWidth className={\`text-\${${expr}}\`} />`;
    }
  );

  content = content.replace(
    /<i\s+className=\{`fa fa-fw text-muted fa-sort-\$\{([^}]+)\}`\}\s*><\/i>/g,
    (match, expr) => {
      changed = true;
      return `<FaIcon icon={\`sort-\${${expr}}\`} fixedWidth className="text-muted" />`;
    }
  );

  content = content.replace(
    /<i\s+className=\{`fa fa-\$\{([^}]+)\}([^`]*)`\}\s*><\/i>/g,
    (match, expr, rest) => {
      changed = true;
      const utility = rest.trim();
      return `<FaIcon icon={${expr}}${utility ? ` className="${utility}"` : ''} />`;
    }
  );

  content = content.replace(
    /<i\s+className=\{` fa fa-fw fa-\$\{([^}]+)\} \$\{([^}]+)\}`\}\s*><\/i>/g,
    (match, iconExpr, classExpr) => {
      changed = true;
      return `<FaIcon icon={${iconExpr}} fixedWidth className={${classExpr}} />`;
    }
  );

  content = content.replace(
    /<i\s+className=\{` fa fa-circle fa-stack-2x text-\$\{([^}]+)\}`\}\s*><\/i>/g,
    (match, expr) => {
      changed = true;
      return `<FaIcon icon="circle" size="2x" className={\`text-\${${expr}}\`} />`;
    }
  );

  content = content.replace(
    /<i\s+className=\{`fa fa-circle small \$\{([^}]+)\} me-2 d-flex align-items-center`\}\s*\/>/g,
    (match, expr) => {
      changed = true;
      return `<FaIcon icon="circle" className={\`small \${${expr}} me-2 d-flex align-items-center\`} />`;
    }
  );

  if (changed) {
    content = ensureFaIconImport(content, filePath);
    fs.writeFileSync(filePath, content, 'utf8');
  }
  return content !== before;
}

let count = 0;
for (const file of walk('app')) {
  if (fixFile(file)) count += 1;
}
process.stdout.write(`Fixed ${count} files\n`);
