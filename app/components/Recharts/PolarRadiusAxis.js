import React from 'react';
import { PolarRadiusAxis as RechartsPolarRadiusAxis } from 'recharts';

import styleConfig from './config';

export const PolarRadiusAxis = (props) => (
    <RechartsPolarRadiusAxis {...styleConfig.polarRadiusAxis} {...props} />
);
