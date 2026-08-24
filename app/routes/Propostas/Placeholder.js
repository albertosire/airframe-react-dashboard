import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
    Container,
    Card,
    CardBody,
    Button
} from './../../components';
import { HeaderMain } from '../components/HeaderMain';
import {
    EXAMPLE_META,
    getCurrentSection,
    getExampleSlug
} from './../../data/corporateNav';
import classes from './Propostas.scss';

export const Placeholder = () => {
    const { pathname } = useLocation();
    const slug = getExampleSlug(pathname);
    const example = EXAMPLE_META[slug];
    const section = getCurrentSection(pathname);

    return (
        <Container>
            <HeaderMain title={section.title} className="mb-4 mt-3" />
            <Card>
                <CardBody className={classes.placeholderWrap}>
                    <i className={`fa ${section.icon} fa-3x text-primary mb-3`}></i>
                    <h4 className="mb-2">{section.title}</h4>
                    <p className="text-muted mb-4">
                        Área de {section.title.toLowerCase()} na proposta
                        {' '}{example.name}. Conteúdo de demonstração — a navegação já está
                        ligada ao menu corporativo.
                    </p>
                    <div>
                        <Button tag={Link} to={`/${slug}`} color="primary">
                            Voltar a Meus indicadores
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </Container>
    );
};
