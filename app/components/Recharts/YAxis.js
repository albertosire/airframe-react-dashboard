import React from 'react';
import { YAxis as RechartsYAxis } from 'recharts';

import styleConfig from './config';

export const YAxis = (props) => (
    <RechartsYAxis {...styleConfig.axis} {...props} />
);
