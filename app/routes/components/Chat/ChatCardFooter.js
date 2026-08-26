import React from 'react';
import { Link } from 'react-router-dom';

import { 
    InputGroup,
    InputGroupAddon,
    Button,
    Input
} from './../../../components';
import { FaIcon } from '../../../components/Icon';

const ChatCardFooter = () => (
    <React.Fragment>
        <InputGroup>
            <InputGroupAddon addonType="prepend">
                <Button color="secondary" outline>
                    <FaIcon icon="paperclip" />
                </Button>
            </InputGroupAddon>
            <Input placeholder="Your message..." />
            <InputGroupAddon addonType="append">
                <Button color="primary" tag={ Link } to="/apps/chat">
                    <FaIcon icon="send" />
                </Button>
            </InputGroupAddon>
        </InputGroup>
    </React.Fragment>
)

export { ChatCardFooter };
