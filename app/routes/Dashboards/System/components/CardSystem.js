import React from 'react';
import PropTypes from 'prop-types';

import {  
    Card, 
    CardBody,
    Badge
} from './../../../../components';

import {
    TinyDonutChart
} from "./TinyDonutChart"
import {
    TinyBarChart
} from "./TinyBarChart"
import { FaIcon } from '../../../../components/Icon';

import { randomArray } from './../../../../utilities';

const percents = [
    "15",
    "25",
    "30",
    "35",
    "40",
    "45",
    "55",
    "60",
    "75",
    "80",
    "95"
];

const caret = [
    "down",
    "up"
];

const CardSystem = ({
    title = "Waiting...",
    badgeColor = "secondary",
    unit = "%",
    pieColor = "500",
}) => (
    <Card className="mb-3 mb-lg-0">
       <CardBody className="pb-0">
           <div className="d-flex">
               <span>
                    <Badge pill className="mb-3" color={ badgeColor } >
                        <FaIcon icon={`caret-${randomArray(caret)}`} fixedWidth />
                        { randomArray(percents) }%
                    </Badge>
                    <h6 className="mb-0">
                        { title }
                    </h6>
                    <h2 className="mb-3">
                        { randomArray(percents) } <small>{ unit }</small>
                    </h2>
                </span>
                <span className="text-end ms-auto">
                    <TinyDonutChart 
                        pieColor={pieColor}
                    />
                </span>
            </div>
            <TinyBarChart />
       </CardBody>
    </Card>
);

CardSystem.propTypes = {
    title: PropTypes.node,
    badgeColor: PropTypes.string,
    unit: PropTypes.node,
    pieColor: PropTypes.string
};

export { CardSystem };
