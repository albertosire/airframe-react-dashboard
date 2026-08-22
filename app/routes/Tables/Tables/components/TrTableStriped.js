import React from "react";
import { placeholder as faker } from '../../../../data/placeholders';
import _ from "lodash";

/*eslint-disable */
const lastMonth = [
  <td className="align-middle text-end text-danger">
    <i className="fa fa-fw fa-caret-down me-1"></i>92.02%
  </td>,
  <td className="align-middle text-end text-success">
    <i className="fa fa-fw fa-caret-up me-1"></i>23.02%
  </td>,
];
/*eslint-enable */
/*eslint-disable */
const no = ["1", "2", "3", "4"];
/*eslint-enable */

const TrTableStriped = () => (
  <React.Fragment>
    {_.times(4, (index) => (
      <tr key={index}>
        <td className="align-middle">{no[index % 4]}.</td>
        <td className="align-middle">
          <span className="text-inverse">{faker.commerce.productName()}</span>
        </td>
        <td className="align-middle">
          {faker.date.weekday()}, 12 {faker.date.month()}, 2018
        </td>
        {lastMonth[index % 2]}
      </tr>
    ))}
  </React.Fragment>
);

export { TrTableStriped };
