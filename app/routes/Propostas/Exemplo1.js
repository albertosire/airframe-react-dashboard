import React from 'react';

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Table,
    Badge,
    ListGroup,
    ListGroupItem
} from './../../components';
import { HeaderMain } from '../components/HeaderMain';
import { KpiCard } from './components/KpiCard';
import { StatusDot } from './components/StatusDot';
import {
    kpisExecutivo,
    statusUnidade,
    filaTrabalho,
    relatoriosRecentes
} from './../../data/corporateMetrics';
import classes from './Propostas.scss';

const prioridadeColor = {
    Alta: 'danger',
    Média: 'warning',
    Baixa: 'secondary'
};

export const Exemplo1 = () => (
    <Container fluid={false}>
        <div className="d-flex align-items-end justify-content-between mt-3 mb-4">
            <div>
                <HeaderMain title="Painel Executivo" className="mb-1" />
                <p className="text-muted mb-0">
                    Prefixo 3182 · Gerência de Relacionamento · números do dia
                </p>
            </div>
            <div className="small text-muted d-none d-md-block">
                Atualizado às 09:14
            </div>
        </div>

        <Row>
            {kpisExecutivo.map((kpi) => (
                <Col lg={3} md={6} key={kpi.id} className="mb-4">
                    <KpiCard {...kpi} />
                </Col>
            ))}
        </Row>

        <Card className="mb-4">
            <CardBody>
                <CardTitle tag="h6" className="mb-3">
                    Status da unidade
                </CardTitle>
                <div className={classes.statusRow}>
                    {statusUnidade.map((item) => (
                        <StatusDot key={item.label} {...item} />
                    ))}
                </div>
            </CardBody>
        </Card>

        <Row>
            <Col lg={8} className="mb-4">
                <Card className="h-100">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-3">
                            Fila de trabalho
                        </CardTitle>
                        <Table responsive hover className="mb-0">
                            <thead>
                                <tr>
                                    <th>OS</th>
                                    <th>Assunto</th>
                                    <th>Prioridade</th>
                                    <th>Prazo</th>
                                    <th>Situação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filaTrabalho.map((item) => (
                                    <tr key={item.id}>
                                        <td className="text-nowrap">{item.id}</td>
                                        <td>{item.titulo}</td>
                                        <td>
                                            <Badge color={prioridadeColor[item.prioridade]} pill>
                                                {item.prioridade}
                                            </Badge>
                                        </td>
                                        <td>{item.prazo}</td>
                                        <td>{item.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={4} className="mb-4">
                <Card className="h-100">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-3">
                            Relatórios recentes
                        </CardTitle>
                        <ListGroup flush>
                            {relatoriosRecentes.map((item) => (
                                <ListGroupItem
                                    key={item.nome}
                                    className="d-flex justify-content-between align-items-start px-0"
                                >
                                    <div>
                                        <div className="fw-semibold">{item.nome}</div>
                                        <div className="small text-muted">{item.atualizado}</div>
                                    </div>
                                    <Badge color="secondary" pill>{item.tipo}</Badge>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
);
