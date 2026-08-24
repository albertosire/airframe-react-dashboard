import React from 'react';

import {
    Avatar,
    AvatarAddOn,
    Sidebar,
    UncontrolledTooltip
} from './../../components';

import { corporateUser, humanogramaUrl } from './../../data/corporateUser';
import classes from './CorporateChrome.scss';

const hintSaida = `Horário limite de saída do ponto: ${corporateUser.horarioSaida}`;
const perfilUrl = humanogramaUrl(corporateUser.matricula);

const AvatarStatus = ({ size }) => (
    <Avatar.Image
        size={size}
        src={corporateUser.foto}
        alt={corporateUser.nome}
        addOns={[
            <AvatarAddOn.Icon
                className="fa fa-circle"
                color="white"
                key="avatar-icon-bg"
            />,
            <AvatarAddOn.Icon
                className="fa fa-circle"
                color="success"
                key="avatar-icon-fg"
            />
        ]}
    />
);

export const CorporateSidebarUser = () => (
    <React.Fragment>
        <Sidebar.HideSlim>
            <Sidebar.Section className="pt-0">
                <a
                    id="corporate-user-full"
                    href={perfilUrl}
                    className={classes.userLink}
                >
                    <AvatarStatus size="lg" />
                    <div className={`fw-semibold mt-2 ${classes.userName}`}>
                        {corporateUser.nome}
                    </div>
                    <div className="small sidebar__link--muted">
                        {corporateUser.setor}
                    </div>
                </a>
                <UncontrolledTooltip placement="right" target="corporate-user-full">
                    {hintSaida}
                </UncontrolledTooltip>
            </Sidebar.Section>
        </Sidebar.HideSlim>

        <Sidebar.ShowSlim>
            <Sidebar.Section>
                <a
                    id="corporate-user-slim"
                    href={perfilUrl}
                    className={classes.userLinkSlim}
                >
                    <AvatarStatus size="sm" />
                </a>
                <UncontrolledTooltip placement="right" target="corporate-user-slim">
                    {`${corporateUser.nome} — ${hintSaida}`}
                </UncontrolledTooltip>
            </Sidebar.Section>
        </Sidebar.ShowSlim>
    </React.Fragment>
);
