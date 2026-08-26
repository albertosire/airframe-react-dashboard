import React from "react";
import { placeholder as faker } from '../../../../data/placeholders';
import PropTypes from "prop-types";

import {
  Badge,
  Avatar,
  CustomInput,
  UncontrolledTooltip,
  AvatarAddOn,
  Media,
} from "./../../../../components";

import { randomArray } from "./../../../../utilities";
import { FaIcon } from '../../../../components/Icon';

const status = ["secondary", "success", "warning", "danger"];

const tag = ["secondary", "primary", "info"];

const TrTableClients = (props) => (
  <React.Fragment>
    <tr>
      <td className="align-middle">
        <CustomInput
          type="checkbox"
          id={`trTableClients-${props.id}`}
          label=""
          inline
        />
      </td>
      <td className="align-middle">
        <a href="#" id={`trTableClientsTooltip-${props.id}`}>
          <FaIcon icon="star-o" fixedWidth />
        </a>
        <UncontrolledTooltip
          placement="top"
          target={`trTableClientsTooltip-${props.id}`}
        >
          Add To Favorites
        </UncontrolledTooltip>
      </td>
      <td className="align-middle">
        <Media>
          <Media left className="align-self-center me-3">
            <Avatar.Image
              size="md"
              src="http://bs4.webkom.co/img/avatars/2.jpg"
              addOns={[
                <AvatarAddOn.Icon
                  icon="circle"
                  color="white"
                  key="avatar-icon-bg"
                />,
                <AvatarAddOn.Icon
                  icon="circle"
                  color={randomArray(status)}
                  key="avatar-icon-fg"
                />,
              ]}
            />
          </Media>
          <Media body>
            <a className="mt-0 d-flex text-decoration-none" href="#">
              {faker.person.firstName()} {faker.person.lastName()}
            </a>
            <span>{faker.person.jobTitle()}</span>
          </Media>
        </Media>
      </td>
      <td className="align-middle">{faker.internet.email()}</td>
      <td className="align-middle">{faker.phone.number()}</td>
      <td className="align-middle text-end">
        <Badge pill color={randomArray(tag)}>
          {faker.commerce.department()}
        </Badge>
      </td>
    </tr>
  </React.Fragment>
);
TrTableClients.propTypes = {
  id: PropTypes.node,
};
TrTableClients.defaultProps = {
  id: "1",
};

export { TrTableClients };
