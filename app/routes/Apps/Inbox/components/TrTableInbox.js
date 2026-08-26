import React from "react";
import { placeholder as faker } from '../../../../data/placeholders';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  Badge,
  Avatar,
  UncontrolledTooltip,
  CustomInput,
  AvatarAddOn,
  Media,
} from "./../../../../components";

import { randomArray, randomAvatar } from "./../../../../utilities";
import { FaIcon } from '../../../../components/Icon';

const status = ["warning", "danger", "success", "secondary"];

const tag = ["primary", "secondary", "info"];

const TrTableInbox = (props) => (
  <React.Fragment>
    <tr>
      <td className="align-middle">
        {Math.round(Math.random()) ? (
          <span>
            <FaIcon icon="circle" fixedWidth className="text-primary" id={`newMessage-${props.id}`} />
            <UncontrolledTooltip
              placement="bottom"
              target={`newMessage-${props.id}`}
            >
              New Message
            </UncontrolledTooltip>
          </span>
        ) : (
          <span></span>
        )}
      </td>
      <td className="align-middle">
        <CustomInput
          type="checkbox"
          label=""
          id={` mailboxCheckbox-${props.id}`}
        />
      </td>
      <td className="align-middle">
        <Media>
          <Media left className="d-flex align-self-center me-3">
            <div className="me-2">
              <a href="#" id={`tooltipAddToFavorites-${props.id}`}>
                <FaIcon icon="star-o" fixedWidth />
              </a>
              <UncontrolledTooltip
                placement="top"
                target={`tooltipAddToFavorites-${props.id}`}
              >
                Add To Favorites
              </UncontrolledTooltip>
            </div>
            <Avatar.Image
              size="md"
              src={randomAvatar()}
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
            <a className="mt-0 text-decoration-none d-flex" href="#">
              {faker.person.firstName()} {faker.person.lastName()}
            </a>
            <span>{faker.location.state()}</span>
          </Media>
        </Media>
      </td>
      <td className="align-middle">
        <Link to="/apps/email-details" className="text-decoration-none">
          {faker.company.catchPhrase()}
        </Link>
        <br />
        {faker.lorem.sentence()}
        <br />
        <Badge pill color={randomArray(tag)}>
          {faker.commerce.department()}
        </Badge>{" "}
        <FaIcon icon="paperclip" className="ms-2" />
      </td>
      <td className="align-middle text-end">
        30-Jun-2014
        <br />
        01:54 PM
      </td>
    </tr>
  </React.Fragment>
);

TrTableInbox.propTypes = {
  id: PropTypes.string,
};

export { TrTableInbox };
