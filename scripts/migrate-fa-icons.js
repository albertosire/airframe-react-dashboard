const fs = require('fs');
const path = require('path');

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    if (fs.statSync(fullPath).isDirectory()) {
      if (entry !== 'node_modules' && entry !== 'Icon') walk(fullPath, acc);
    } else if (/\.js$/.test(entry)) {
      acc.push(fullPath);
    }
  }
  return acc;
}

function extractIconFromClassName(classValue) {
  const tokens = classValue.replace(/[`{}]/g, ' ').split(/\s+/).filter(Boolean);
  const faIndex = tokens.indexOf('fa');
  if (faIndex === -1) return null;

  let iconName = null;
  for (let i = faIndex + 1; i < tokens.length; i += 1) {
    if (tokens[i].startsWith('fa-') && !/^fa-(fw|lg|sm|[0-9]x|stack)/.test(tokens[i])) {
      iconName = tokens[i].slice(3);
      break;
    }
  }

  if (!iconName) return null;

  const fixedWidth = tokens.includes('fa-fw');
  const sizeToken = tokens.find((t) => t === 'fa-lg' || /^fa-[0-9]x$/.test(t));
  const size = sizeToken ? sizeToken.replace('fa-', '') : null;
  const utility = tokens.filter((t) =>
    t !== 'fa' &&
    !t.startsWith('fa-') &&
    t !== 'fa-fw'
  );

  return { iconName, fixedWidth, size, utility: utility.join(' ') };
}

function buildFaIcon({ iconName, fixedWidth, size, utility }, dynamic = false) {
  const parts = [];
  parts.push(`<FaIcon icon=${dynamic ? iconName : `"${iconName}"`}`);
  if (fixedWidth) parts.push('fixedWidth');
  if (size) parts.push(`size="${size}"`);
  if (utility) parts.push(`className="${utility}"`);
  return `${parts.join(' ')} />`;
}

function migrateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('fa fa-') && !content.includes('fa-fw fa') && !content.includes('FaIcon')) {
    return false;
  }

  let changed = false;

  // AvatarAddOn.Icon className="fa fa-circle" -> icon="circle"
  content = content.replace(
    /className="fa fa-([a-z0-9-]+)(?:\s([^"]*))?"/g,
    (match, iconName, rest) => {
      if (match.includes('${')) return match;
      changed = true;
      if (rest) return `icon="${iconName}" className="${rest.trim()}"`;
      return `icon="${iconName}"`;
    }
  );

  // Static <i className="...fa fa-ICON..."></i> or />
  content = content.replace(
    /<i\s+className="([^"]*fa[^"]*)"\s*(?:\/>|><\/i>)/g,
    (match, classValue) => {
      if (classValue.includes('${')) return match;
      const parsed = extractIconFromClassName(classValue);
      if (!parsed) return match;
      changed = true;
      return buildFaIcon(parsed);
    }
  );

  // Template literals with static icon: className={`fa fa-ICON ...`}
  content = content.replace(
    /<i\s+className=\{`([^`]*fa fa-([a-z0-9-]+)[^`]*)`\}\s*(?:\/>|><\/i>)/g,
    (match, classValue, iconName) => {
      if (classValue.includes('${')) return match;
      const parsed = extractIconFromClassName(classValue);
      if (!parsed) return match;
      changed = true;
      return buildFaIcon(parsed);
    }
  );

  // Dynamic template: className={`fa fa-fw fa-${props.icon}`}
  content = content.replace(
    /<i\s+className=\{`([^`]*fa-\$\{([^}]+)\}[^`]*)`\}\s*(?:\/>|><\/i>)/g,
    (match, classValue, dynamicExpr) => {
      const parsed = extractIconFromClassName(classValue.replace(/\$\{[^}]+\}/g, 'placeholder'));
      changed = true;
      const utility = classValue
        .replace(/^\s*fa\s+/g, '')
        .replace(/fa-fw\s*/g, '')
        .replace(/fa-\$\{[^}]+\}\s*/g, '')
        .replace(/\$\{([^}]+)\}/g, '${$1}')
        .trim();
      let result = `<FaIcon icon={${dynamicExpr}}`;
      if (classValue.includes('fa-fw')) result += ' fixedWidth';
      if (utility && utility.includes('${')) {
        result += ` className={\`${utility}\`}`;
      } else if (utility) {
        result += ` className="${utility}"`;
      }
      result += ' />';
      return result;
    }
  );

  // className={` fa fa-fw fa-${props.icon} ${props.iconClassName}`}
  content = content.replace(
    /<i\s+className=\{`([^`]*fa-\$\{[^}]+\}[^`]*)`\s*\}\s*(?:\/>|><\/i>)/g,
    (match, classValue) => {
      if (!classValue.includes('${')) return match;
      changed = true;
      const dynamicMatch = classValue.match(/fa-\$\{([^}]+)\}/);
      if (!dynamicMatch) return match;
      const dynamicExpr = dynamicMatch[1];
      const fixedWidth = classValue.includes('fa-fw');
      const classNameExpr = classValue
        .replace(/^\s*fa\s+/g, '')
        .replace(/fa-fw\s*/g, '')
        .replace(/fa-\$\{[^}]+\}\s*/g, '')
        .trim();
      let result = `<FaIcon icon={${dynamicExpr}}`;
      if (fixedWidth) result += ' fixedWidth';
      if (classNameExpr) result += ` className={\`${classNameExpr}\`}`;
      result += ' />';
      return result;
    }
  );

  if (changed && content.includes('<FaIcon') && !content.includes("from './") && !content.includes('FaIcon } from')) {
    const relDepth = path.relative('app', path.dirname(filePath)).split(path.sep).length;
    const prefix = relDepth === 0 ? './' : `${ '../'.repeat(relDepth) }`;
    const importPath = `${prefix}components/Icon`;
    if (!content.includes(importPath)) {
      const importLine = `import { FaIcon } from '${importPath}';\n`;
      const lastImport = content.lastIndexOf('\nimport ');
      if (lastImport !== -1) {
        const end = content.indexOf('\n', lastImport + 1);
        content = `${content.slice(0, end + 1)}${importLine}${content.slice(end + 1)}`;
      } else {
        content = `${importLine}${content}`;
      }
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
  return changed;
}

const targets = process.argv.slice(2);
const files = targets.length ? targets : walk('app');
let count = 0;
for (const file of files) {
  if (migrateFile(file)) count += 1;
}
process.stdout.write(`Migrated ${count} files\n`);
