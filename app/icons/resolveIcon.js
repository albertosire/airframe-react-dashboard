import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as regularIcons from '@fortawesome/free-regular-svg-icons';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';
import { FA4_RENAMES, FA4_BRANDS, FA4_SOLID_O } from './fa4ToFa6Map';

const warned = new Set();

function toExportName(iconName) {
  return `fa${iconName
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')}`;
}

function lookupIcon(prefix, iconName) {
  const packs = {
    fas: solidIcons,
    far: regularIcons,
    fab: brandIcons,
  };
  const exportName = toExportName(iconName);
  return packs[prefix][exportName] || null;
}

export function resolveIcon(iconInput) {
  if (!iconInput) {
    return solidIcons.faQuestion;
  }

  if (Array.isArray(iconInput)) {
    const [prefix, iconName] = iconInput;
    return lookupIcon(prefix, iconName) || solidIcons.faQuestion;
  }

  if (typeof iconInput === 'object' && iconInput.iconName) {
    return iconInput;
  }

  const fa4Name = String(iconInput).trim();
  if (!fa4Name) {
    return solidIcons.faQuestion;
  }

  let prefix = 'fas';
  let name = fa4Name;

  if (FA4_BRANDS.has(name)) {
    prefix = 'fab';
  } else if (name.endsWith('-o') && !FA4_SOLID_O.has(name)) {
    prefix = 'far';
    name = name.slice(0, -2);
  }

  const renamed = FA4_RENAMES[fa4Name] || FA4_RENAMES[name] || name;
  let iconDef = lookupIcon(prefix, renamed);

  if (!iconDef && prefix === 'far') {
    iconDef = lookupIcon('fas', renamed);
  }

  if (!iconDef && prefix !== 'fab') {
    iconDef = lookupIcon('fas', FA4_RENAMES[fa4Name] || fa4Name.replace(/-o$/, ''));
  }

  if (!iconDef && prefix !== 'fab') {
    iconDef = lookupIcon('fab', fa4Name);
  }

  if (!iconDef && process.env.NODE_ENV !== 'production' && !warned.has(fa4Name)) {
    warned.add(fa4Name);
    // eslint-disable-next-line no-console
    console.warn(`[FaIcon] Icon not found for FA4 name "${fa4Name}"`);
  }

  return iconDef || solidIcons.faQuestion;
}

export function parseFaClassName(className) {
  if (!className || typeof className !== 'string') {
    return null;
  }

  const tokens = className.split(/\s+/);
  const faIndex = tokens.indexOf('fa');
  if (faIndex === -1) {
    return null;
  }

  let iconName = null;
  for (let i = faIndex + 1; i < tokens.length; i += 1) {
    if (tokens[i].startsWith('fa-')) {
      iconName = tokens[i].slice(3);
      break;
    }
  }

  if (!iconName) {
    return null;
  }

  const utilityClasses = tokens.filter((token) =>
    token !== 'fa' &&
    !token.startsWith('fa-') &&
    token !== 'fa-fw' &&
    token !== 'fa-lg' &&
    token !== 'fa-sm' &&
    !/^fa-[0-9]x$/.test(token) &&
    !token.startsWith('fa-stack')
  );

  return {
    icon: iconName,
    fixedWidth: tokens.includes('fa-fw'),
    size: tokens.find((token) => token === 'fa-lg' || /^fa-[0-9]x$/.test(token))?.replace('fa-', '') || undefined,
    className: utilityClasses.join(' ') || undefined,
  };
}
