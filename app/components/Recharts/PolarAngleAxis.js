import React from 'react';
import { PolarAngleAxis as RechartsPolarAngleAxis } from 'recharts';

import styleConfig from './config';

export const PolarAngleAxis = (props) => (
    <RechartsPolarAngleAxis {...styleConfig.polarAngleAxis} {...props} />
);
