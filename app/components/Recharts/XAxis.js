import React from 'react';
import { XAxis as RechartsXAxis } from 'recharts';

import styleConfig from './config';

export const XAxis = (props) => (
    <RechartsXAxis {...styleConfig.axis} {...props} />
);
