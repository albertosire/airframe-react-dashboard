# Airframe Dashboard

Fork do boilerplate [Airframe React](https://github.com/0wczar/airframe-react-dashboard) preparado para desenvolvimento de um **painel de relatórios individualizados e projetos de times**.

## Stack

| Tecnologia | Versão |
|------------|--------|
| React | 18 |
| Webpack | 5 |
| Bootstrap | 5 |
| reactstrap | 9 |
| React Router | 5 |

## O que mudou em relação ao boilerplate original

- Removidas páginas de **login, registro e gestão de usuários** (autenticação via OpenSSO em projeto separado)
- Removidos `@faker-js/faker`, `holderjs` e `node-fetch`
- Dados de exemplo substituídos por placeholders estáticos em [`app/data/placeholders.js`](app/data/placeholders.js)
- Removidos componentes de demo externa (`VersionSelector`, seção "Versions" do menu)
- Upgrade completo da toolchain e dependências de UI

## Instalação

Requer [Node.js](https://nodejs.org/) >= 18.

```bash
npm install --legacy-peer-deps
```

> Nota: `--legacy-peer-deps` é necessário por compatibilidade do `react-bootstrap-table2` com React 18.

## Desenvolvimento

```bash
npm start
```

O servidor de desenvolvimento inicia em `http://localhost:4100`.

## Build de produção

```bash
npm run build:prod
```

Os arquivos gerados ficam em `/dist/`.

## Estrutura do projeto

| Pasta | Descrição |
|-------|-----------|
| `app/components/` | Componentes reutilizáveis (Layout, Sidebar, Theme, etc.) |
| `app/layout/` | Shell da aplicação (navbar, sidebar) |
| `app/routes/` | Páginas de referência (dashboards, interface, forms, tables, graphs) |
| `app/data/placeholders.js` | Dados estáticos de exemplo para substituição futura |
| `app/siteConfig.js` | Configuração do site (título, descrição) para o client |
| `packages/dashboard-style/` | Pacote local de estilos e animações do tema Airframe |
| `build/` | Configuração Webpack |

## Próximos passos

As páginas em `app/routes/` são **referências de UI** mantidas para consulta. Conforme o produto evoluir:

1. Substituir placeholders por dados reais da API
2. Criar rotas específicas de relatórios e projetos
3. Integrar autenticação via OpenSSO

## Licença

MIT (herdada do projeto Airframe original)
