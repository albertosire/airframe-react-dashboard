import React from "react";
import { placeholder as faker } from '../../../../data/placeholders';
import _ from "lodash";

import { Badge, UncontrolledTooltip } from "./../../../../components";
import { FaIcon } from '../../../../components/Icon';

/*eslint-disable */
const payment = [
  <Badge color="primary">Premium</Badge>,
  <Badge color="info">Basic</Badge>,
  <Badge color="warning">Pro</Badge>,
  <Badge color="danger">Advanced</Badge>,
  <Badge color="secondary">Free</Badge>,
];
/*eslint-enable */
/*eslint-disable */
const receipt = [
  <td className="align-middle text-end">
    <a href="#" id="UncontrolledTooltipDownload">
      <FaIcon icon="download" fixedWidth className="text-primary" />
    </a>
    <UncontrolledTooltip placement="left" target="UncontrolledTooltipDownload">
      Download
    </UncontrolledTooltip>
  </td>,
  <td className="align-middle text-end"></td>,
];
/*eslint-enable */
/*eslint-disable */
const paymentMethod = [
  <td className="align-middle">
    <FaIcon icon="paypal" fixedWidth className="text-primary me-2" />
    {faker.internet.email()}
  </td>,
  <td className="align-middle">
    <FaIcon icon="credit-card-alt" fixedWidth className="me-2" />
    Visa 4*** **** **** 9221
  </td>,
];
/*eslint-enable */
/*eslint-disable */
const status = [
  <td className="align-middle">
    <FaIcon icon="check" fixedWidth className="text-success" />
  </td>,
  <td className="align-middle">
    <FaIcon icon="close" fixedWidth className="text-danger" />
  </td>,
];
/*eslint-enable */

const TrTableBorderless = () => (
  <React.Fragment>
    {_.times(5, (index) => (
      <tr key={index}>
        {status[index % 2]}
        <td className="align-middle">
          <samp>{faker.number.int()}</samp>
        </td>
        <td className="align-middle">
          {faker.date.weekday()}, 12 {faker.date.month()}, 2018
        </td>
        <td className="align-middle text-inverse">
          $ {faker.finance.amount()}
        </td>
        <td className="align-middle">{payment[index % 5]}</td>
        {paymentMethod[index % 2]}
        {receipt[index % 2]}
      </tr>
    ))}
  </React.Fragment>
);

export { TrTableBorderless };
