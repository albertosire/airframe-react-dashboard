import React from "react";
import _ from "lodash";
import { placeholder as faker } from '../../../data/placeholders';
import { FaIcon } from '../../../components/Icon';
const TrTableRecentFundings = () => (
  <React.Fragment>
    {_.times(6, (index) => (
      <tr key={index}>
        <td className="align-middle">
          <span className="text-inverse">{faker.company.name()}</span>
        </td>
        <td className="align-middle">${faker.commerce.price()}</td>
        <td className="align-middle text-nowrap">20-02-2015</td>
        <td className="align-middle text-end text-nowrap">
          <a href="#" className="text-decoration-none">
            View <FaIcon icon="angle-right" />
          </a>
        </td>
      </tr>
    ))}
  </React.Fragment>
);

export { TrTableRecentFundings };
