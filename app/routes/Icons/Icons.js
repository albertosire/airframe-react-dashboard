import React from 'react';

import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody
} from './../../components';
import { HeaderMain } from '../components/HeaderMain';
import { FaIcon } from '../../components/Icon';

const ICON_SECTIONS = [
    {
        title: 'Navegação e interface',
        icons: [
            'home', 'bars', 'search', 'angle-down', 'angle-right', 'angle-left',
            'angle-up', 'ellipsis-h', 'plus', 'minus', 'check', 'close',
            'question-circle-o', 'info-circle', 'exclamation-circle', 'bell-o',
        ],
    },
    {
        title: 'Comunicação',
        icons: [
            'envelope-o', 'pencil', 'comment', 'phone', 'video-camera', 'user',
            'users', 'paper-plane', 'reply', 'download', 'upload', 'link',
        ],
    },
    {
        title: 'Arquivos e mídia',
        icons: [
            'folder-open', 'files-o', 'file-o', 'file-text-o', 'file-pdf-o',
            'file-image-o', 'image', 'paperclip', 'trash', 'history', 'eye',
            'external-link', 'heart-o',
        ],
    },
    {
        title: 'Dashboards e métricas',
        icons: [
            'line-chart', 'bar-chart', 'pie-chart', 'calendar-o', 'star-o',
            'star', 'circle', 'circle-o', 'check-circle', 'tachometer',
        ],
    },
    {
        title: 'Marcas',
        icons: [
            ['fab', 'github'],
            ['fab', 'twitter'],
            ['fab', 'facebook'],
            ['fab', 'linkedin'],
            ['fab', 'google'],
            ['fab', 'apple'],
            ['fab', 'paypal'],
            ['fab', 'trello'],
        ],
    },
];

const IconTile = ({ icon, label }) => (
    <div className="fa-hover col-md-3 col-sm-4 d-flex align-items-center mb-3">
        <FaIcon icon={icon} fixedWidth className="me-2" aria-hidden="true" />
        <span>{label || (Array.isArray(icon) ? icon[1] : icon)}</span>
    </div>
);

const Icons = () => (
    <Container>
        <HeaderMain
            title="Icons"
            className="mb-5 mt-4"
        />
        <Card className="mb-3">
            <CardBody>
                <CardTitle tag="h6" className="mb-3">
                    Font Awesome 6 (Free)
                </CardTitle>
                <p className="text-muted">
                    Os ícones abaixo usam o componente <code>&lt;FaIcon /&gt;</code> com
                    mapeamento automático de nomes FA4 para FA6.
                </p>
                <p className="mb-0">
                    Exemplo: <code>{'<FaIcon icon="envelope-o" fixedWidth />'}</code>
                </p>
            </CardBody>
        </Card>

        {ICON_SECTIONS.map((section) => (
            <Card className="mb-3" key={section.title}>
                <CardBody>
                    <CardTitle tag="h6" className="mb-4">
                        {section.title}
                    </CardTitle>
                    <Row className="fontawesome-icon-list">
                        {section.icons.map((icon) => (
                            <IconTile
                                key={Array.isArray(icon) ? icon.join('-') : icon}
                                icon={icon}
                            />
                        ))}
                    </Row>
                </CardBody>
            </Card>
        ))}
    </Container>
);

export default Icons;
