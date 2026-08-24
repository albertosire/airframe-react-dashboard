import React from 'react';

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Badge,
    Progress,
    ListGroup,
    ListGroupItem
} from './../../components';
import { HeaderMain } from '../components/HeaderMain';
import {
    kpisOperacionais,
    kanbanColunas,
    capacitacaoProgresso,
    prazosHoje
} from './../../data/corporateMetrics';
import classes from './Propostas.scss';

export const Exemplo2 = () => (
    <Container fluid={false}>
        <div className="d-flex align-items-end justify-content-between mt-3 mb-4">
            <div>
                <HeaderMain title="Central Operacional" className="mb-1" />
                <p className="text-muted mb-0">
                    Pipeline do dia, capacitação e prazos da mesa
                </p>
            </div>
        </div>

        <Row className="mb-4">
            {kpisOperacionais.map((kpi) => (
                <Col md={3} xs={6} key={kpi.label} className="mb-3 mb-md-0">
                    <Card className={classes.kpiCard}>
                        <CardBody className="py-3">
                            <div className="small text-muted text-uppercase">{kpi.label}</div>
                            <div className={classes.kpiValue}>{kpi.value}</div>
                            <div className="small text-muted">{kpi.hint}</div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>

        <div className={classes.kanban}>
            {kanbanColunas.map((coluna) => (
                <div key={coluna.id} className={classes.kanbanColumn}>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h6 className="mb-0">{coluna.titulo}</h6>
                        <Badge color="secondary" pill>{coluna.cards.length}</Badge>
                    </div>
                    {coluna.cards.map((card) => (
                        <div key={card.id} className={classes.kanbanCard}>
                            <div className="small text-muted">{card.id}</div>
                            <div className="fw-semibold">{card.titulo}</div>
                            <div className="d-flex justify-content-between align-items-center mt-2">
                                <span className="small text-muted">{card.pessoa}</span>
                                <Badge color="primary" pill>{card.tag}</Badge>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>

        <Row className="mt-4">
            <Col lg={7} className="mb-4">
                <Card className="h-100">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-3">Capacitação</CardTitle>
                        {capacitacaoProgresso.map((item) => (
                            <div key={item.nome} className="mb-3">
                                <div className="d-flex justify-content-between small mb-1">
                                    <span>{item.nome}</span>
                                    <span className="text-muted">{item.prazo}</span>
                                </div>
                                <Progress value={item.progresso} style={{ height: '0.45rem' }} />
                            </div>
                        ))}
                    </CardBody>
                </Card>
            </Col>
            <Col lg={5} className="mb-4">
                <Card className="h-100">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-3">Prazos de hoje</CardTitle>
                        <ListGroup flush>
                            {prazosHoje.map((item) => (
                                <ListGroupItem
                                    key={item.hora}
                                    className="d-flex align-items-start px-0"
                                >
                                    <span className="fw-semibold me-3 text-nowrap">{item.hora}</span>
                                    <span className="flex-fill">{item.texto}</span>
                                    {item.urgente && <Badge color="danger" pill>Urgente</Badge>}
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
);
