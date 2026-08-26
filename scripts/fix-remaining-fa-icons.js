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
  let next = content;

  const replacements = [
    [
      /<FaIcon icon="fw" size="([^"]+)" className="fa-([a-z0-9-]+)(?:\s([^"]*))?"\s*\/>/g,
      (match, size, iconName, rest) => {
        changed = true;
        return rest
          ? `<FaIcon icon="${iconName}" size="${size}" fixedWidth className="${rest}" />`
          : `<FaIcon icon="${iconName}" size="${size}" fixedWidth />`;
      },
    ],
    [
      /<FaIcon icon="fw" size="([^"]+)" className="fa-([a-z0-9-]+)"\s*\/>/g,
      (match, size, iconName) => {
        changed = true;
        return `<FaIcon icon="${iconName}" size="${size}" fixedWidth />`;
      },
    ],
    [
      /<i className='fa fa-angle-left me-2'><\/i>/g,
      () => {
        changed = true;
        return '<FaIcon icon="angle-left" className="me-2" />';
      },
    ],
    [
      /<i className='fa fa-angle-right ms-2'><\/i>/g,
      () => {
        changed = true;
        return '<FaIcon icon="angle-right" className="ms-2" />';
      },
    ],
    [
      /<i className='fa fa-bars fa-fw'><\/i>/g,
      () => {
        changed = true;
        return '<FaIcon icon="bars" fixedWidth />';
      },
    ],
    [
      /<i className='fa fa-th-large fa-fw'><\/i>/g,
      () => {
        changed = true;
        return '<FaIcon icon="th-large" fixedWidth />';
      },
    ],
    [
      /<i className=\{ `fa fa-fw fa-\$\{ props\.icon \} \$\{ props\.iconClassName \} me-2` \}><\/i>/g,
      () => {
        changed = true;
        return '<FaIcon icon={props.icon} fixedWidth className={`${props.iconClassName} me-2`} />';
      },
    ],
    [
      /<i className=\{`fa fa-circle ms-auto text-\$\{option\.value\}`\} \/>/g,
      () => {
        changed = true;
        return '<FaIcon icon="circle" className={`ms-auto text-${option.value}`} />';
      },
    ],
    [
      /eCheckMark\.className = "fa fa-check fa-fw ms-auto text-success";/g,
      () => {
        changed = true;
        return 'eCheckMark.className = "ms-auto text-success";';
      },
    ],
    [
      /<i className=\{`fa fa-fw fa-2x \$\{getFileIcon\(file\)\}`\} \/>/g,
      () => {
        changed = true;
        return '<FaIcon icon={getFileIcon(file).replace(/^fa fa-fw fa-2x fa-/, "").replace(/^fa-/, "")} size="2x" fixedWidth />';
      },
    ],
    [
      /<i className=\{`fa fa-fw fa-3x \$\{getFileIcon\(file\)\}`\} \/>/g,
      () => {
        changed = true;
        return '<FaIcon icon={getFileIcon(file).replace(/^fa fa-fw fa-3x fa-/, "").replace(/^fa-/, "")} size="3x" fixedWidth />';
      },
    ],
  ];

  for (const [pattern, replacer] of replacements) {
    next = next.replace(pattern, replacer);
  }

  return { content: next, changed };
}

function ensureFaIconImport(content, filePath) {
  if (!content.includes('<FaIcon') || content.includes("from '../../components/Icon'") || content.includes('from "../../../components/Icon"') || content.includes("from '../../../../components/Icon'") || content.includes('from "../../../../components/Icon"') || content.includes("from '../../../components/Icon'") || content.includes("from '../../components/Icon'") || content.includes("from './../../components/Icon'") || content.includes("from './../../../components/Icon'") || content.includes("from './../../../../components/Icon'")) {
    return content;
  }
  const relDepth = path.relative('app', path.dirname(filePath)).split(path.sep).length;
  const prefix = relDepth === 0 ? './' : `${ '../'.repeat(relDepth) }`;
  const importLine = `import { FaIcon } from '${prefix}components/Icon';\n`;
  const lastImport = content.lastIndexOf('\nimport ');
  if (lastImport !== -1) {
    const end = content.indexOf('\n', lastImport + 1);
    return `${content.slice(0, end + 1)}${importLine}${content.slice(end + 1)}`;
  }
  return `${importLine}${content}`;
}

let count = 0;
for (const file of walk('app')) {
  const original = fs.readFileSync(file, 'utf8');
  const { content, changed } = fixFile(original);
  if (changed) {
    const finalContent = ensureFaIconImport(content, file);
    fs.writeFileSync(file, finalContent, 'utf8');
    count += 1;
  }
}
process.stdout.write(`Fixed remaining icons in ${count} files\n`);
