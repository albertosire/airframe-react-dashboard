import React from 'react';

import { FaIcon } from '../../../components/Icon';
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
} from './../../../components';

const SearchResultsHeader = () => (
    <React.Fragment>
        <div className="mb-4">
            <h4 className="mt-2 mb-3">
                <small className="me-1">
                    Search Results for
                </small> "Content Designer" 
                <small className="me-2">
                    <small className="ms-3">
                        About 1,370 result (0.13 seconds)
                    </small>
                </small>
            </h4>
            <InputGroup>
                <Input placeholder="Search for..." className="bg-white" />
                <InputGroupAddon addonType="append">
                    <Button color="primary">
                        <FaIcon icon="search" />
                    </Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    </React.Fragment>
)

export { SearchResultsHeader };
