export const corporateUser = {
    nome: 'Ana Silva',
    setor: 'Gerência de Relacionamento',
    matricula: 'F1234567',
    horarioSaida: '17:45',
    foto: require('./../images/avatars/12.jpg')
};

export const humanogramaUrl = (matricula) =>
    `https://humanograma.intranet.bb.com.br/${matricula}`;
