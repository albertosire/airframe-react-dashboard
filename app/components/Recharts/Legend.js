import React from 'react';
import { Legend as RechartsLegend } from 'recharts';

import styleConfig from './config';

export const Legend = (props) => (
    <RechartsLegend {...styleConfig.legend} {...props} />
);
