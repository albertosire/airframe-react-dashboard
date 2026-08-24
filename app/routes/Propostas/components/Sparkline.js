import React from 'react';
import PropTypes from 'prop-types';
import {
    ResponsiveContainer,
    AreaChart,
    Area
} from 'recharts';

import colors from './../../../colors';

export const Sparkline = ({ data, height, color }) => (
    <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={data.map((value) => ({ value }))}>
            <Area
                type="monotone"
                dataKey="value"
                stroke={colors[color] || colors.primary}
                fill={colors[`${color}-02`] || colors['primary-02']}
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
            />
        </AreaChart>
    </ResponsiveContainer>
);

Sparkline.propTypes = {
    data: PropTypes.arrayOf(PropTypes.number).isRequired,
    height: PropTypes.number,
    color: PropTypes.string
};

Sparkline.defaultProps = {
    height: 36,
    color: 'primary'
};
