import React from "react";
import { placeholder as faker } from '../../../../data/placeholders';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  Badge,
  Avatar,
  CustomInput,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  AvatarAddOn,
} from "./../../../../components";

import { randomArray, randomAvatar } from "./../../../../utilities";
import { FaIcon } from '../../../../components/Icon';

const badges = ["secondary"];

const avatarStatus = ["secondary", "warning", "danger", "success"];

const prioStatus = [
  <React.Fragment key="1">
    <FaIcon icon="circle" className="text-success me-2" />
    Small
    <FaIcon icon="angle-down" className="ms-2" />
  </React.Fragment>,
  <React.Fragment key="2">
    <FaIcon icon="circle" className="text-primary me-2" />
    Normal
    <FaIcon icon="angle-down" className="ms-2" />
  </React.Fragment>,
  <React.Fragment key="3">
    <FaIcon icon="circle" className="text-warning me-2" />
    High
    <FaIcon icon="angle-down" className="ms-2" />
  </React.Fragment>,
  <React.Fragment key="3">
    <FaIcon icon="circle" className="text-danger me-2" />
    Big
    <FaIcon icon="angle-down" className="ms-2" />
  </React.Fragment>,
];

const TrTableTasksList = (props) => (
  <React.Fragment>
    <tr>
      <td className="align-middle">
        <CustomInput
          type="checkbox"
          id={`TrTableTasksList-${props.id}`}
          label=""
          inline
        />
      </td>
      <td className="align-middle">
        <UncontrolledButtonDropdown>
          <DropdownToggle
            color="link"
            link
            size="sm"
            className="ps-0 mb-3 text-decoration-none"
          >
            {randomArray(prioStatus)}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Select Priority</DropdownItem>
            <DropdownItem>
              <FaIcon icon="circle" className="text-danger me-2" />
              Big
            </DropdownItem>
            <DropdownItem>
              <FaIcon icon="circle" className="text-warning me-2" />
              High
            </DropdownItem>
            <DropdownItem>
              <FaIcon icon="circle" className="text-primary me-2" />
              Normal
            </DropdownItem>
            <DropdownItem>
              <FaIcon icon="circle" className="text-success me-2" />
              Small
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </td>
      <td className="align-middle">
        <div>
          <span className="me-2">#{faker.number.int()}</span>
          <Link to="/apps/task-details" className="text-decoration-none">
            {faker.hacker.phrase()}
          </Link>
        </div>
        <p className="mb-0">
          <span className="me-2">{faker.lorem.sentence()}</span>
          <Badge pill color={randomArray(badges)} className="me-1">
            {faker.commerce.department()}
          </Badge>
          <Badge pill color={randomArray(badges)} className="me-1">
            {faker.commerce.department()}
          </Badge>
        </p>
      </td>
      <td className="align-middle">
        <Avatar.Image
          size="md"
          src={randomAvatar()}
          className="me-3"
          addOns={[
            <AvatarAddOn.Icon
              icon="circle"
              color="white"
              key="avatar-icon-bg"
            />,
            <AvatarAddOn.Icon
              icon="circle"
              color={randomArray(avatarStatus)}
              key="avatar-icon-fg"
            />,
          ]}
        />
      </td>
      <td className="align-middle">16-Jul-2016</td>
      <td className="align-middle text-end">
        <UncontrolledButtonDropdown className="align-self-center ms-auto">
          <DropdownToggle color="link" size="sm">
            <FaIcon icon="gear" />
            <FaIcon icon="angle-down" className="ms-2" />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <FaIcon icon="folder-open" fixedWidth className="me-2" />
              View
            </DropdownItem>
            <DropdownItem>
              <FaIcon icon="ticket" fixedWidth className="me-2" />
              Add Task
            </DropdownItem>
            <DropdownItem>
              <FaIcon icon="paperclip" fixedWidth className="me-2" />
              Add Files
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <FaIcon icon="trash" fixedWidth className="me-2" />
              Delete
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </td>
    </tr>
  </React.Fragment>
);

TrTableTasksList.propTypes = {
  id: PropTypes.node,
};
TrTableTasksList.defaultProps = {
  id: "1",
};

export { TrTableTasksList };
