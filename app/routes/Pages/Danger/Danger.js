import React from 'react';
import { Link } from 'react-router-dom';

import { EmptyLayout } from './../../../components';
import { HeaderAuth } from "../../components/Pages/HeaderAuth";
import { FooterAuth } from "../../components/Pages/FooterAuth";
import { FaIcon } from '../../../components/Icon';

const Danger = () => (
    <EmptyLayout>
        <EmptyLayout.Section center>
            { /* START Header */}
            <HeaderAuth 
                title="An Error has Occurred"
                icon="close"
                iconClassName="text-danger"
            />
            { /* END Header */}
            { /* START Bottom Links */}
            <div className="text-center mb-5">
                <Link to="/" className="text-decoration-none">
                    <FaIcon icon="angle-left" className="me-2" />Correct Errors
                </Link>
            </div>
            { /* END Bottom Links */}
            { /* START Footer */}
            <FooterAuth />
            { /* END Footer */}
        </EmptyLayout.Section>
    </EmptyLayout>
);

export default Danger;
