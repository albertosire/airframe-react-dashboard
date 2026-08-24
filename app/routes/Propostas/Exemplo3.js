import React from 'react';
import classNames from 'classnames';

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Table,
    Badge,
    Button
} from './../../components';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';
import { HeaderMain } from '../components/HeaderMain';
import colors from './../../colors';
import {
    scorecardsPrefixo,
    serieMensalPrefixo,
    rankingEquipe,
    tabelasDownload
} from './../../data/corporateMetrics';
import classes from './Propostas.scss';

const ScoreCard = ({ nome, realizado, meta, unidade, perc, invertido }) => {
    const ok = perc >= 100;
    return (
        <Card className={classes.kpiCard}>
            <CardBody>
                <div className="small text-muted text-uppercase mb-1">{nome}</div>
                <div className="d-flex align-items-baseline">
                    <span className={classes.kpiValue}>{realizado}</span>
                    <span className="ms-2 text-muted">{unidade}</span>
                </div>
                <div className="small text-muted mb-2">
                    Meta {meta} {unidade}
                    {invertido ? ' (quanto menor, melhor)' : ''}
                </div>
                <div className={classes.scoreBar}>
                    <div
                        className={classNames(classes.scoreBarFill, ok ? 'bg-success' : 'bg-warning')}
                        style={{ width: `${Math.min(perc, 100)}%` }}
                    />
                </div>
                <div className={classNames('small mt-1', ok ? 'text-success' : 'text-warning')}>
                    {perc}% da meta
                </div>
            </CardBody>
        </Card>
    );
};

export const Exemplo3 = () => (
    <Container fluid={false}>
        <div className="d-flex align-items-end justify-content-between mt-3 mb-4">
            <div>
                <HeaderMain title="Radar do Prefixo" className="mb-1" />
                <p className="text-muted mb-0">
                    Prefixo 3182 · metas, tendência e ranking da equipe
                </p>
            </div>
        </div>

        <Row>
            {scorecardsPrefixo.map((item) => (
                <Col lg={4} md={6} key={item.nome} className="mb-4">
                    <ScoreCard {...item} />
                </Col>
            ))}
        </Row>

        <Card className="mb-4">
            <CardBody>
                <CardTitle tag="h6" className="mb-3">
                    Captação e NPS — últimos 6 meses
                </CardTitle>
                <ResponsiveContainer width="100%" height={280}>
                    <ComposedChart data={serieMensalPrefixo}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="mes" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Bar
                            yAxisId="left"
                            dataKey="captacao"
                            name="Captação (R$ mi)"
                            fill={colors.primary}
                            barSize={18}
                        />
                        <Line
                            yAxisId="left"
                            type="monotone"
                            dataKey="meta"
                            name="Meta"
                            stroke={colors.warning}
                            strokeDasharray="4 4"
                            dot={false}
                        />
                        <Line
                            yAxisId="right"
                            type="monotone"
                            dataKey="nps"
                            name="NPS"
                            stroke={colors.success}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </CardBody>
        </Card>

        <Row>
            <Col lg={7} className="mb-4">
                <Card className="h-100">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-3">Ranking da equipe</CardTitle>
                        <Table responsive hover className="mb-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Colaborador</th>
                                    <th>Carteira</th>
                                    <th>Atingimento</th>
                                    <th>NPS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rankingEquipe.map((pessoa) => (
                                    <tr key={pessoa.pos}>
                                        <td>{pessoa.pos}</td>
                                        <td className="fw-semibold">{pessoa.nome}</td>
                                        <td>{pessoa.carteira}</td>
                                        <td>
                                            <Badge color={pessoa.atingimento >= 100 ? 'success' : 'warning'} pill>
                                                {pessoa.atingimento}%
                                            </Badge>
                                        </td>
                                        <td>{pessoa.nps}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={5} className="mb-4">
                <Card className="h-100">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-3">Baixar tabelas</CardTitle>
                        {tabelasDownload.map((tabela) => (
                            <div
                                key={tabela.nome}
                                className="d-flex align-items-center justify-content-between py-2 border-bottom"
                            >
                                <div>
                                    <div className="fw-semibold">{tabela.nome}</div>
                                    <div className="small text-muted">
                                        {tabela.formato} · {tabela.linhas.toLocaleString('pt-BR')} linhas
                                    </div>
                                </div>
                                <Button color="link" size="sm" href="#">
                                    <i className="fa fa-download"></i>
                                </Button>
                            </div>
                        ))}
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
);
