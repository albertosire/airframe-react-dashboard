import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Button
} from './../../components';
import { withPageConfig } from './../../components/Layout/withPageConfig';
import { HeaderMain } from '../components/HeaderMain';
import { EXAMPLE_META } from './../../data/corporateNav';
import classes from './Propostas.scss';
import { FaIcon } from '../../components/Icon';

const PREVIEWS = {
    exemplo1: { bg: 'linear-gradient(135deg, #1a73e8, #0d47a1)', icon: 'fa-line-chart' },
    exemplo2: { bg: 'linear-gradient(135deg, #0f9d58, #137333)', icon: 'fa-sitemap' },
    exemplo3: { bg: 'linear-gradient(135deg, #7b1fa2, #4a148c)', icon: 'fa-crosshairs' }
};

class Hub extends React.Component {
    static propTypes = {
        pageConfig: PropTypes.object
    };

    componentDidMount() {
        this.props.pageConfig.setElementsVisibility({
            sidebarHidden: true
        });
    }

    componentWillUnmount() {
        this.props.pageConfig.setElementsVisibility({
            sidebarHidden: false
        });
    }

    render() {
        return (
            <Container>
                <div className={classes.hubHero}>
                    <HeaderMain title="Propostas de dashboard" className="mb-2" />
                    <p className="lead text-muted mb-0">
                        Três caminhos para o painel corporativo: números da unidade, fluxo do dia
                        e radar do prefixo. Escolha um exemplo para navegar com o menu à esquerda,
                        o bloco do colaborador e as notificações.
                    </p>
                </div>

                <Row>
                    {Object.values(EXAMPLE_META).map((example) => {
                        const preview = PREVIEWS[example.slug];
                        return (
                            <Col lg={4} md={6} key={example.slug} className="mb-4">
                                <Card className={classes.hubCard}>
                                    <div className={classes.hubPreview} style={{ background: preview.bg }}>
                                        <i className={`fa ${preview.icon} fa-2x`}></i>
                                    </div>
                                    <CardBody>
                                        <div className="small text-muted text-uppercase fw-semibold mb-1">
                                            {example.label}
                                        </div>
                                        <h4 className="mb-2">{example.name}</h4>
                                        <p className="text-muted">{example.tagline}</p>
                                        <Button
                                            tag={Link}
                                            to={`/${example.slug}`}
                                            color="primary"
                                        >
                                            Ver proposta
                                            <FaIcon icon="angle-right" className="ms-2" />
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>

                <p className="small text-muted mt-2 mb-5">
                    As páginas de referência do Airframe continuam em{' '}
                    <Link to="/dashboards/projects">/dashboards/projects</Link>.
                </p>
            </Container>
        );
    }
}

const HubWithConfig = withPageConfig(Hub);

export { HubWithConfig as Hub };
