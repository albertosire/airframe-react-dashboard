import React from 'react';

import { FaIcon } from '../../components/Icon';
import {
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';

const Paginations = () => (

    <Pagination aria-label="Page navigation example">
        <PaginationItem>
            <PaginationLink previous href="#">
                <FaIcon icon="angle-left" fixedWidth />
            </PaginationLink>
        </PaginationItem>
        <PaginationItem active>
            <PaginationLink href="#">
                1
            </PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink href="#">
                2
            </PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink href="#">
                3
            </PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink next href="#">
                <FaIcon icon="angle-right" fixedWidth />
            </PaginationLink>
        </PaginationItem>
    </Pagination>
)

export { Paginations };
