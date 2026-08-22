const FIRST_NAMES = ['Ana', 'Bruno', 'Carla', 'Daniel', 'Elena', 'Felipe', 'Gabriela', 'Henrique'];
const LAST_NAMES = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Lima', 'Costa', 'Ferreira', 'Almeida'];
const JOB_TITLES = ['Analista', 'Gerente de Projeto', 'Desenvolvedor', 'Designer', 'Product Owner'];
const JOB_TYPES = ['Full-time', 'Part-time', 'Contract', 'Remote'];
const COMPANIES = ['Acme Corp', 'NovaTech', 'DataFlow', 'CloudBase', 'InovaSoft'];
const CATCH_PHRASES = ['Soluções inteligentes', 'Inovação contínua', 'Resultados mensuráveis', 'Performance em escala'];
const CATCH_PHRASE_ADJECTIVES = ['eficiente', 'escalável', 'confiável', 'moderna'];
const BS_BUZZ = ['sinergia', 'paradigma', 'ecossistema', 'transformação digital'];
const PRODUCTS = ['Relatório Mensal', 'Dashboard Operacional', 'Painel de Projetos', 'Visão Executiva', 'Métricas de Time'];
const DEPARTMENTS = ['Engenharia', 'Produto', 'Operações', 'Financeiro', 'Marketing'];
const CITIES = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Porto Alegre'];
const STATES = ['SP', 'RJ', 'MG', 'PR', 'RS'];
const COUNTRIES = ['Brasil', 'Portugal', 'Estados Unidos', 'Alemanha'];
const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
const WEEKDAYS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
const HACKER_PHRASES = ['Sincronizar pipeline', 'Otimizar fluxo de dados', 'Integrar serviços', 'Automatizar deploy'];
const FILE_NAMES = ['relatorio.pdf', 'dados.csv', 'apresentacao.pptx', 'planilha.xlsx'];
const TRANSACTION_TYPES = ['Pagamento', 'Transferência', 'Depósito', 'Reembolso'];
const ACCOUNT_NAMES = ['Conta Corrente', 'Conta Investimento', 'Cartão Corporativo'];
const WORDS = ['atualização', 'melhoria', 'revisão', 'implementação'];

let counter = 0;

const nextIndex = () => {
  const index = counter;
  counter += 1;
  return index;
};

const pick = (list, index = nextIndex()) => list[index % list.length];

export const placeholderName = (i = nextIndex()) => pick(FIRST_NAMES, i);
export const placeholderLastName = (i = nextIndex()) => pick(LAST_NAMES, i);
export const placeholderFullName = (i = nextIndex()) => `${pick(FIRST_NAMES, i)} ${pick(LAST_NAMES, i + 1)}`;
export const placeholderCompany = (i = nextIndex()) => pick(COMPANIES, i);
export const placeholderProduct = (i = nextIndex()) => pick(PRODUCTS, i);
export const placeholderDepartment = (i = nextIndex()) => pick(DEPARTMENTS, i);
export const placeholderAmount = (i = nextIndex()) => (1200 + (i % 20) * 83.5).toFixed(2);
export const placeholderPrice = (i = nextIndex()) => (500 + (i % 15) * 47.25).toFixed(2);
export const placeholderParagraph = () => 'Conteúdo de exemplo para preenchimento do layout.';
export const placeholderSentence = () => 'Texto de exemplo para demonstração do componente.';
export const placeholderSentences = () => 'Primeira frase de exemplo. Segunda frase de exemplo.';
export const placeholderEmail = (i = nextIndex()) => `usuario${i}@exemplo.com`;
export const placeholderUrl = (i = nextIndex()) => `https://exemplo.com/recurso/${i}`;
export const placeholderDomain = (i = nextIndex()) => `exemplo${i}.com.br`;
export const placeholderIp = (i = nextIndex()) => `192.168.${(i % 254) + 1}.${(i % 200) + 10}`;
export const placeholderCity = (i = nextIndex()) => pick(CITIES, i);
export const placeholderState = (i = nextIndex()) => pick(STATES, i);
export const placeholderStateAbbr = (i = nextIndex()) => pick(STATES, i);
export const placeholderCountry = (i = nextIndex()) => pick(COUNTRIES, i);
export const placeholderDate = (i = nextIndex()) => pick(WEEKDAYS, i);
export const placeholderPastDate = () => new Date('2024-06-15T10:30:00');
export const placeholderRecentDate = () => new Date('2025-01-10T14:00:00');
export const placeholderFutureDate = () => new Date('2026-12-01T09:00:00');
export const placeholderMask = (i = nextIndex()) => `${1000 + (i % 9000)}`;
export const placeholderInt = (i = nextIndex()) => 100 + (i % 900);
export const placeholderSemver = (i = nextIndex()) => `1.${i % 10}.${i % 20}`;
export const placeholderFileName = (i = nextIndex()) => pick(FILE_NAMES, i);
export const placeholderUsername = (i = nextIndex()) => `usuario${i}`;
export const placeholderPhone = () => '(11) 99999-0000';
export const placeholderWords = () => pick(WORDS, nextIndex());

export const placeholder = {
  person: {
    firstName: placeholderName,
    lastName: placeholderLastName,
    jobTitle: (i = nextIndex()) => pick(JOB_TITLES, i),
    jobType: (i = nextIndex()) => pick(JOB_TYPES, i),
  },
  company: {
    catchPhrase: (i = nextIndex()) => pick(CATCH_PHRASES, i),
    catchPhraseAdjective: (i = nextIndex()) => pick(CATCH_PHRASE_ADJECTIVES, i),
    name: placeholderCompany,
    bsBuzz: (i = nextIndex()) => pick(BS_BUZZ, i),
  },
  commerce: {
    productName: placeholderProduct,
    department: placeholderDepartment,
    price: placeholderPrice,
  },
  internet: {
    ip: placeholderIp,
    email: placeholderEmail,
    url: placeholderUrl,
    domainName: placeholderDomain,
    exampleEmail: placeholderEmail,
    userName: placeholderUsername,
  },
  location: {
    city: placeholderCity,
    state: placeholderState,
    stateAbbr: placeholderStateAbbr,
    country: placeholderCountry,
  },
  date: {
    past: placeholderPastDate,
    recent: placeholderRecentDate,
    future: placeholderFutureDate,
    weekday: placeholderDate,
    month: (i = nextIndex()) => pick(MONTHS, i),
  },
  lorem: {
    paragraph: placeholderParagraph,
    sentence: placeholderSentence,
    sentences: placeholderSentences,
  },
  finance: {
    amount: placeholderAmount,
    mask: placeholderMask,
    transactionType: (i = nextIndex()) => pick(TRANSACTION_TYPES, i),
    accountName: (i = nextIndex()) => pick(ACCOUNT_NAMES, i),
  },
  system: {
    semver: placeholderSemver,
    fileName: placeholderFileName,
    commonFileName: placeholderFileName,
  },
  number: {
    int: placeholderInt,
  },
  hacker: {
    phrase: (i = nextIndex()) => pick(HACKER_PHRASES, i),
  },
  phone: {
    number: placeholderPhone,
  },
  random: {
    words: placeholderWords,
  },
};

export { placeholder as faker };
