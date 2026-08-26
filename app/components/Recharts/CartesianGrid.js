import React from 'react';
import { CartesianGrid as RechartsCartesianGrid } from 'recharts';

import styleConfig from './config';

const CartesianGrid = (props) => (
    <RechartsCartesianGrid {...styleConfig.grid} {...props} />
);

export { CartesianGrid };
