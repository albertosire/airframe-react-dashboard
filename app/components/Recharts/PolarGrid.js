import React from 'react';
import { PolarGrid as RechartsPolarGrid } from 'recharts';

import styleConfig from './config';

const PolarGrid = (props) => (
    <RechartsPolarGrid {...styleConfig.polarGrid} {...props} />
);

export { PolarGrid };
