import React from 'react';
import { ZAxis as RechartsZAxis } from 'recharts';

import styleConfig from './config';

export const ZAxis = (props) => (
    <RechartsZAxis {...styleConfig.axis} {...props} />
);
