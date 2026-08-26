import React from "react";
import { placeholder as faker } from '../../../data/placeholders';
import { Media, UncontrolledTooltip } from "./../../../components";
import { FaIcon } from '../../../components/Icon';

const TrResponsive = () => (
  <React.Fragment>
    {/* START TR */}
    <tr>
      <td className="align-middle">
        <FaIcon icon="circle" className="-fw text-danger" />
      </td>
      <td className="align-middle">
        <Media>
          <Media left className="align-self-center me-3">
            <FaIcon icon="desktop" size="lg" fixedWidth />
          </Media>
          <Media body>
            <div className="mt-0 d-flex">
              <span className="text-inverse">Safari</span> /
              {faker.system.semver()}
            </div>
            <span>macOs {faker.system.semver()}</span>
          </Media>
        </Media>
      </td>
      <td className="align-middle">
        <div>
          <samp>{faker.internet.ip()}</samp>
        </div>
        <span>-</span>
      </td>
      <td className="align-middle">
        <div>{faker.location.city()}</div>
        <span>
          {faker.location.state()}, {faker.location.country()}
        </span>
      </td>
      <td className="align-middle">
        {faker.date.weekday()}, 12 {faker.date.month()}, 2018
        <br />
        12:34 PM
      </td>
      <td className="align-middle text-end">
        <a href="#" id="UncontrolledTooltipRevoke">
          <FaIcon icon="close" fixedWidth className="text-danger" />
        </a>
        <UncontrolledTooltip
          placement="left"
          target="UncontrolledTooltipRevoke"
        >
          Revoke
        </UncontrolledTooltip>
      </td>
    </tr>
    {/* END TR */}
  </React.Fragment>
);

export { TrResponsive };
