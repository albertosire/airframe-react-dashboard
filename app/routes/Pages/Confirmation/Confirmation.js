import React from 'react';
import { Link } from 'react-router-dom';

import {
    EmptyLayout
} from './../../../components';

import { HeaderAuth } from "../../components/Pages/HeaderAuth";
import { FooterAuth } from "../../components/Pages/FooterAuth";
import { FaIcon } from '../../../components/Icon';

const Confirmation = () => (
    <EmptyLayout>
        <EmptyLayout.Section center>
            { /* START Header */}
            <HeaderAuth 
                title="Confirm Your Email Address"
                icon="envelope"
                text={(
                    <React.Fragment>
                        The confirmation mail was sent to 
                        <i>email@example.com</i> Check your mailbox 
                        and hit the <strong>Confirm My Email</strong> 
                        link to confirm your email address.
                    </React.Fragment>
                )}
            />
            { /* END Header */}
            { /* START Bottom Links */}
            <div className="text-center mb-5">
                <Link to="/" className="text-decoration-none">
                    <FaIcon icon="angle-left" className="me-2" />Back to Home
                </Link>
            </div>
            { /* END Bottom Links */}
            { /* START Footer */}
            <FooterAuth />
            { /* END Footer */}
        </EmptyLayout.Section>
    </EmptyLayout>
);

export default Confirmation;
