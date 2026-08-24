export const kpisExecutivo = [
    {
        id: 'nps',
        label: 'NPS da carteira',
        value: '72',
        unit: 'pts',
        delta: '+4,1 vs meta',
        positive: true,
        spark: [58, 61, 59, 63, 66, 68, 70, 69, 71, 72]
    },
    {
        id: 'produtividade',
        label: 'Produtividade do dia',
        value: '86',
        unit: '%',
        delta: '+6 p.p. vs ontem',
        positive: true,
        spark: [62, 70, 68, 74, 71, 79, 81, 77, 84, 86]
    },
    {
        id: 'fila',
        label: 'Itens na minha fila',
        value: '14',
        unit: 'tarefas',
        delta: '3 com prazo hoje',
        positive: false,
        spark: [21, 19, 18, 16, 17, 15, 16, 14, 15, 14]
    },
    {
        id: 'capacitacao',
        label: 'Capacitação em dia',
        value: '91',
        unit: '%',
        delta: '2 trilhas pendentes',
        positive: true,
        spark: [78, 80, 81, 84, 85, 86, 88, 89, 90, 91]
    }
];

export const statusUnidade = [
    { label: 'Atendimento', status: 'ok', detail: 'Dentro do SLA' },
    { label: 'Tesouraria', status: 'alerta', detail: 'Fila elevada às 11h' },
    { label: 'Negócios PF', status: 'ok', detail: 'Meta diária atingida' },
    { label: 'Negócios PJ', status: 'risco', detail: 'Abaixo da curva da semana' }
];

export const filaTrabalho = [
    { id: 'OS-1842', titulo: 'Regularizar cadastro PF', prioridade: 'Alta', prazo: 'Hoje, 12:00', status: 'Em andamento' },
    { id: 'OS-1847', titulo: 'Proposta de crédito consignado', prioridade: 'Média', prazo: 'Hoje, 16:30', status: 'Aguardando' },
    { id: 'OS-1851', titulo: 'Devolução de TED contestada', prioridade: 'Alta', prazo: 'Amanhã, 10:00', status: 'Em andamento' },
    { id: 'OS-1855', titulo: 'Atualizar ficha de relacionamento PJ', prioridade: 'Baixa', prazo: '26/08', status: 'Na fila' },
    { id: 'OS-1860', titulo: 'Follow-up de investimento', prioridade: 'Média', prazo: '26/08', status: 'Na fila' }
];

export const relatoriosRecentes = [
    { nome: 'Carteira PF — agosto', tipo: 'XLSX', atualizado: 'há 12 min' },
    { nome: 'Inadimplência 30/60/90', tipo: 'PDF', atualizado: 'há 1 h' },
    { nome: 'Produtividade da equipe', tipo: 'CSV', atualizado: 'ontem' },
    { nome: 'Capacitação obrigatória', tipo: 'XLSX', atualizado: 'ontem' }
];

export const kpisOperacionais = [
    { label: 'Atendimentos', value: '47', hint: 'meta 52' },
    { label: 'TMA', value: '8:12', hint: '−0:41' },
    { label: 'Conversões', value: '19', hint: '36% da fila' },
    { label: 'Pendências', value: '6', hint: '2 críticas' }
];

export const kanbanColunas = [
    {
        id: 'entrada',
        titulo: 'Entrada',
        cards: [
            { id: 'K-11', titulo: 'Abertura de conta digital', pessoa: 'Cliente PF', tag: 'Cadastro' },
            { id: 'K-12', titulo: 'Revisão de limite cartão', pessoa: 'Carteira 08', tag: 'Crédito' },
            { id: 'K-13', titulo: 'Atualização cadastral INSS', pessoa: 'Fila balcão', tag: 'Serviço' }
        ]
    },
    {
        id: 'andamento',
        titulo: 'Em andamento',
        cards: [
            { id: 'K-21', titulo: 'Proposta CDC veículo', pessoa: 'Ana Silva', tag: 'Negócio' },
            { id: 'K-22', titulo: 'Pacote PJ essencial', pessoa: 'Mesa PJ', tag: 'Negócio' },
            { id: 'K-23', titulo: 'Contestação de tarifa', pessoa: 'Ouvidoria', tag: 'Risco' }
        ]
    },
    {
        id: 'concluido',
        titulo: 'Concluído hoje',
        cards: [
            { id: 'K-31', titulo: 'Portabilidade de salário', pessoa: 'Ana Silva', tag: 'Concluído' },
            { id: 'K-32', titulo: 'Seguro residencial', pessoa: 'Ana Silva', tag: 'Concluído' },
            { id: 'K-33', titulo: 'Recarga de cartão benefício', pessoa: 'Autoatendimento', tag: 'Concluído' }
        ]
    }
];

export const capacitacaoProgresso = [
    { nome: 'LGPD na ponta', progresso: 100, prazo: 'Concluída' },
    { nome: 'Prevenção a fraudes', progresso: 72, prazo: 'Vence 27/08' },
    { nome: 'Crédito responsável', progresso: 40, prazo: 'Vence 02/09' },
    { nome: 'Atendimento acessível', progresso: 15, prazo: 'Vence 10/09' }
];

export const prazosHoje = [
    { hora: '11:30', texto: 'Retorno de proposta consignado', urgente: true },
    { hora: '14:00', texto: 'Reunião de prefixo — metas da semana', urgente: false },
    { hora: '16:00', texto: 'Envio do relatório de caixa', urgente: false },
    { hora: '17:30', texto: 'Encerrar pendências de tesouraria', urgente: true }
];

export const scorecardsPrefixo = [
    { nome: 'Captação PF', realizado: 4.8, meta: 5.2, unidade: 'R$ mi', perc: 92 },
    { nome: 'Captação PJ', realizado: 3.1, meta: 2.9, unidade: 'R$ mi', perc: 107 },
    { nome: 'Seguros', realizado: 186, meta: 210, unidade: 'apólices', perc: 89 },
    { nome: 'Consórcios', realizado: 41, meta: 36, unidade: 'cotas', perc: 114 },
    { nome: 'NPS Prefixo 3182', realizado: 74, meta: 70, unidade: 'pts', perc: 106 },
    { nome: 'Inadimplência', realizado: 2.1, meta: 2.4, unidade: '%', perc: 114, invertido: true }
];

export const serieMensalPrefixo = [
    { mes: 'Mar', captacao: 6.2, meta: 7.0, nps: 68 },
    { mes: 'Abr', captacao: 6.8, meta: 7.0, nps: 70 },
    { mes: 'Mai', captacao: 7.4, meta: 7.2, nps: 71 },
    { mes: 'Jun', captacao: 7.1, meta: 7.4, nps: 69 },
    { mes: 'Jul', captacao: 7.9, meta: 7.6, nps: 73 },
    { mes: 'Ago', captacao: 7.9, meta: 8.1, nps: 74 }
];

export const rankingEquipe = [
    { pos: 1, nome: 'Carla Menezes', carteira: 'PF Premium', atingimento: 128, nps: 81 },
    { pos: 2, nome: 'Ana Silva', carteira: 'Relacionamento', atingimento: 112, nps: 78 },
    { pos: 3, nome: 'Bruno Costa', carteira: 'PJ Essencial', atingimento: 104, nps: 74 },
    { pos: 4, nome: 'Helena Dias', carteira: 'Massificado', atingimento: 97, nps: 71 },
    { pos: 5, nome: 'Paulo Andrade', carteira: 'Agronegócio', atingimento: 91, nps: 69 }
];

export const tabelasDownload = [
    { nome: 'Metas x realizado — prefixo 3182', formato: 'XLSX', linhas: 248 },
    { nome: 'Ranking da equipe (mês)', formato: 'CSV', linhas: 18 },
    { nome: 'Carteira ativa PF/PJ', formato: 'XLSX', linhas: 1_204 },
    { nome: 'Trilhas de capacitação', formato: 'XLSX', linhas: 86 }
];

export const notificacoesCorporativas = [
    {
        id: 1,
        tom: 'warning',
        icone: 'fa-exclamation',
        titulo: 'NPS do prefixo 3182',
        texto: 'O indicador de negócios PJ ficou 4 pontos abaixo da meta semanal.',
        quando: 'há 18 min'
    },
    {
        id: 2,
        tom: 'danger',
        icone: 'fa-clock-o',
        titulo: 'Ponto eletrônico',
        texto: 'Sua jornada se aproxima do horário limite de saída (17:45).',
        quando: 'há 32 min'
    },
    {
        id: 3,
        tom: 'primary',
        icone: 'fa-graduation-cap',
        titulo: 'Capacitação',
        texto: 'A trilha “Prevenção a fraudes” vence em 3 dias.',
        quando: 'há 2 h'
    },
    {
        id: 4,
        tom: 'success',
        icone: 'fa-check',
        titulo: 'Relatório disponível',
        texto: 'A tabela de produtividade da equipe já pode ser baixada.',
        quando: 'ontem, 18:10'
    },
    {
        id: 5,
        tom: 'info',
        icone: 'fa-lightbulb-o',
        titulo: 'Sugestão respondida',
        texto: 'A gerência comentou sua sugestão sobre a fila de tesouraria.',
        quando: 'ontem, 16:40'
    }
];
