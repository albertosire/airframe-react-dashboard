import React from 'react';
import { Link } from 'react-router-dom';

import { FaIcon } from '../../../components/Icon';
import {
    Sidebar,
    UncontrolledTooltip
} from './../../../components';

const SidebarTopB = () => (
    <React.Fragment>
        { /* START Sidebar TOP: B */ }
            { /* START DESKTOP View */ }
            <Sidebar.HideSlim>
                <div>
                    <div className="d-flex">
                        <Link to="/dashboards/projects" className="align-self-center sidebar__brand" id="tooltipBackToHome">
                            <FaIcon icon="send" fixedWidth size="2x" />
                        </Link>
                        <UncontrolledTooltip placement="right" target="tooltipBackToHome">
                            Back to Home
                        </UncontrolledTooltip>

                        <div className="ms-3">
                            <div className="h4 fw-600 sidebar-logo mb-1 text-start">
                                Airframe Dashboard
                            </div>
                            <div className="job-title small text-start sidebar__link--muted">
                                Painel de Relatórios
                            </div>
                        </div>
                    </div>
                </div>
            </Sidebar.HideSlim>
            { /* END DESKTOP View */ }
            { /* START SLIM Only View */ }
            <Sidebar.ShowSlim>
                <div className="text-center">
                    <Link to="/dashboards/projects" id="tooltipBackToHomeSlim">
                        <FaIcon icon="send" fixedWidth className="text-primary" />
                    </Link>
                    <UncontrolledTooltip placement="right" target="tooltipBackToHomeSlim">
                        Back to Home
                    </UncontrolledTooltip>
                </div>
            </Sidebar.ShowSlim>
            { /* END SLIM Only View  */ }
        { /* END Sidebar TOP: B */ }
    </React.Fragment>
)

export { SidebarTopB };
