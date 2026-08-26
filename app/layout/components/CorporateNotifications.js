import React from 'react';
import { Link } from 'react-router-dom';

import {
    UncontrolledDropdown,
    DropdownToggle,
    IconWithBadge,
    Badge,
    ExtendedDropdown,
    ListGroup,
    ListGroupItem
} from './../../components';

import { notificacoesCorporativas } from './../../data/corporateMetrics';
import { FaIcon, FaIconStack } from '../../components/Icon';

const tomClass = {
    success: 'text-success',
    danger: 'text-danger',
    warning: 'text-warning',
    primary: 'text-primary',
    info: 'text-info'
};

export const CorporateNotifications = (props) => (
    <UncontrolledDropdown nav inNavbar {...props}>
        <DropdownToggle nav>
            <IconWithBadge
                badge={
                    <Badge pill color="primary">
                        {notificacoesCorporativas.length}
                    </Badge>
                }
            >
                <FaIcon icon="bell-o" fixedWidth />
            </IconWithBadge>
        </DropdownToggle>
        <ExtendedDropdown right>
            <ExtendedDropdown.Section className="d-flex justify-content-between align-items-center">
                <h6 className="mb-0">Notificações</h6>
                <Badge pill>{notificacoesCorporativas.length}</Badge>
            </ExtendedDropdown.Section>

            <ExtendedDropdown.Section list>
                <ListGroup>
                    {notificacoesCorporativas.map((item) => (
                        <ListGroupItem key={item.id} action tag={Link} to="/exemplo1">
                            <div className="d-flex">
                                <FaIconStack
                                    backIcon="circle"
                                    frontIcon={item.icone.replace(/^fa fa-/, '').replace(/^fa-/, '')}
                                    backClassName={tomClass[item.tom]}
                                    frontClassName="text-white"
                                    size="lg"
                                    fixedWidth
                                    className="d-flex me-3"
                                />
                                <div>
                                    <span className="h6">{item.titulo}</span>
                                    <p className="mt-2 mb-1">{item.texto}</p>
                                    <div className="small mt-2">{item.quando}</div>
                                </div>
                            </div>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </ExtendedDropdown.Section>
        </ExtendedDropdown>
    </UncontrolledDropdown>
);
