import React from 'react';
import { Tooltip as RechartsTooltip } from 'recharts';

import styleConfig from './config';

export const Tooltip = (props) => (
    <RechartsTooltip {...styleConfig.tooltip} {...props} />
);
