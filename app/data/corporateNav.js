export const EXAMPLE_META = {
    exemplo1: {
        slug: 'exemplo1',
        label: 'Exemplo 1',
        name: 'Painel Executivo',
        tagline: 'Visão gerencial dos principais números da unidade.'
    },
    exemplo2: {
        slug: 'exemplo2',
        label: 'Exemplo 2',
        name: 'Central Operacional',
        tagline: 'Fluxo de trabalho, prazos e capacitação no mesmo painel.'
    },
    exemplo3: {
        slug: 'exemplo3',
        label: 'Exemplo 3',
        name: 'Radar do Prefixo',
        tagline: 'Desempenho da agência frente às metas e ao ranking.'
    }
};

export const CORPORATE_MENU = [
    {
        title: 'Meus indicadores',
        path: '',
        icon: 'fa-dashboard',
        exact: true
    },
    {
        title: 'Fluxo de Trabalho',
        path: 'fluxo-de-trabalho',
        icon: 'fa-sitemap'
    },
    { divider: true },
    {
        title: 'Capacitação',
        path: 'capacitacao',
        icon: 'fa-graduation-cap'
    },
    {
        title: 'Indicadores do Prefixo',
        path: 'indicadores-do-prefixo',
        icon: 'fa-building'
    },
    {
        title: 'Relatórios',
        path: 'relatorios',
        icon: 'fa-file-text-o'
    },
    { divider: true },
    {
        title: 'Baixar Tabelas',
        path: 'baixar-tabelas',
        icon: 'fa-download'
    },
    {
        title: 'Documentação',
        path: 'documentacao',
        icon: 'fa-book'
    },
    {
        title: 'Sugestões',
        path: 'sugestoes',
        icon: 'fa-lightbulb-o'
    }
];

export const getExampleSlug = (pathname = '') => {
    const match = pathname.match(/^\/(exemplo[123])(?:\/|$)/);
    return match ? match[1] : 'exemplo1';
};

export const getExampleBase = (pathname) => `/${getExampleSlug(pathname)}`;

export const getCurrentSection = (pathname = '') => {
    const slug = getExampleSlug(pathname);
    const rest = pathname.replace(new RegExp(`^/${slug}/?`), '').replace(/\/$/, '');
    return CORPORATE_MENU.find((item) => !item.divider && item.path === rest) || CORPORATE_MENU[0];
};

export const sectionTo = (base, path) => (path ? `${base}/${path}` : base);
