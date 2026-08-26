import React from "react";
import { placeholder as faker } from '../../../../data/placeholders';
import {
  Badge,
  Avatar,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  AvatarAddOn,
  Media,
  DropdownItem,
} from "./../../../../components";

import { randomArray, randomAvatar } from "./../../../../utilities";
import { FaIcon } from '../../../../components/Icon';

const badges = ["secondary"];

const status = ["success", "danger", "warning", "secondary"];

const TrTableFilesList = () => (
  <React.Fragment>
    <tr>
      <td className="align-middle">
        <Media>
          <Media left middle>
            <FaIcon icon="folder-o" size="3x" fixedWidth className="me-2" />
          </Media>
          <Media body>
            <div className="text-inverse">{faker.commerce.department()}</div>
            <span>{faker.finance.amount()} Mb</span>
          </Media>
        </Media>
      </td>
      <td className="align-middle">
        {faker.date.weekday()}, 12 {faker.date.month()}, 2018
        <br />
        12:23 PM
      </td>
      <td className="align-middle">
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
      </td>
      <td className="align-middle">
        <Badge color={randomArray(badges)} pill className="me-1">
          {faker.commerce.department()}
        </Badge>
        <Badge color={randomArray(badges)} pill className="me-1">
          {faker.commerce.department()}
        </Badge>
        <Badge color={randomArray(badges)} pill className="me-1">
          {faker.commerce.department()}
        </Badge>
      </td>
      <td className="align-middle text-end">
        <UncontrolledButtonDropdown>
          <DropdownToggle color="link">
            <FaIcon icon="gear" />
            <FaIcon icon="angle-down" className="ms-2" />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <FaIcon icon="reply" fixedWidth className="me-2" />
              Share
            </DropdownItem>
            <DropdownItem>
              <FaIcon icon="download" fixedWidth className="me-2" />
              Download
            </DropdownItem>
            <DropdownItem>
              <FaIcon icon="trash" fixedWidth className="me-2" />
              Delete
            </DropdownItem>
            <DropdownItem>
              <FaIcon icon="pencil" fixedWidth className="me-2" />
              Edit
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <FaIcon icon="files-o" fixedWidth className="me-2" />
              Copy
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </td>
    </tr>
  </React.Fragment>
);

export { TrTableFilesList };
