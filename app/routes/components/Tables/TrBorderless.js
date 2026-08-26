import React from "react";
import { placeholder as faker } from '../../../data/placeholders';
import { Badge, UncontrolledTooltip } from "./../../../components";
import { FaIcon } from '../../../components/Icon';

const TrBorderless = () => (
  <React.Fragment>
    {/* START TR */}
    <tr>
      <td className="align-middle">
        <FaIcon icon="check" fixedWidth className="text-success" />
      </td>
      <td className="align-middle">
        <samp>{faker.number.int()}</samp>
      </td>
      <td className="align-middle">
        {faker.date.weekday()}, 12 {faker.date.month()}, 2018
      </td>
      <td className="align-middle text-inverse">$ {faker.finance.amount()}</td>
      <td className="align-middle">
        <Badge color="primary">Premium</Badge>
      </td>
      <td className="align-middle">
        <FaIcon icon="paypal" fixedWidth className="text-primary me-2" />
        {faker.internet.email()}
      </td>
      <td className="align-middle text-end">
        <a href="#" id="UncontrolledTooltipDownload">
          <FaIcon icon="download" fixedWidth className="text-primary" />
        </a>
        <UncontrolledTooltip
          placement="left"
          target="UncontrolledTooltipDownload"
        >
          Download
        </UncontrolledTooltip>
      </td>
    </tr>
    {/* END TR */}
  </React.Fragment>
);

export { TrBorderless };
