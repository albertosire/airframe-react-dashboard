import React from "react";
import { placeholder as faker } from '../../../../data/placeholders';
import _ from "lodash";
import PropTypes from "prop-types";

import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Media,
  Avatar,
  AvatarAddOn,
} from "./../../../../components";
import { randomAvatar } from "./../../../../utilities";
import { FaIcon } from '../../../../components/Icon';

/*eslint-disable */
const colorStatus = ["danger", "success", "warning", "secondary"];
/*eslint-enable */

const TrTableDefault = (props) => (
  <React.Fragment>
    {_.times(4, (index) => (
      <tr key={index}>
        <td className="align-middle">
          <div className={props.projectColor}>
            {faker.person.firstName()} {faker.person.lastName()}
          </div>
          <span>{faker.company.name()}</span>
        </td>
        <td className="align-middle">
          <div>Thursday</div>
          <span className="text-danger">Overdue</span>
        </td>
        <td className="align-middle">
          <Media>
            <Media left middle className="me-3">
              <Avatar.Image
                size="md"
                src={randomAvatar()}
                addOns={[
                  <AvatarAddOn.Icon
                    icon="circle"
                    color={props.leaderStatus}
                    key="avatar-icon-bg"
                  />,
                  <AvatarAddOn.Icon
                    icon="circle"
                    color={colorStatus[index % 4]}
                    key="avatar-icon-fg"
                  />,
                ]}
              />
            </Media>
            <Media body>
              <div className="mt-0 d-flex text-inverse">
                {faker.person.firstName()} {faker.person.lastName()}
              </div>
              <span>{faker.person.jobTitle()}</span>
            </Media>
          </Media>
        </td>
        <td className="align-middle">
          <div>{faker.finance.amount()}</div>
          <span>Paid</span>
        </td>
        <td className="align-middle">
          <FaIcon icon="circle-o" className="text-success me-2" />
          {faker.finance.transactionType()}
        </td>
        <td className="align-middle text-end">
          <UncontrolledButtonDropdown>
            <DropdownToggle
              color="link"
              className={` text-decoration-none ${props.dropdownColor} `}
            >
              <FaIcon icon="gear" />
              <FaIcon icon="angle-down" className="ms-2" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <FaIcon icon="envelope" fixedWidth className="me-2" />
                Send Email
              </DropdownItem>
              <DropdownItem>
                <FaIcon icon="phone" fixedWidth className="me-2" />
                Call
              </DropdownItem>
              <DropdownItem>
                <FaIcon icon="user" fixedWidth className="me-2" />
                Profile
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </td>
      </tr>
    ))}
  </React.Fragment>
);

TrTableDefault.propTypes = {
  projectColor: PropTypes.node,
  leaderStatus: PropTypes.node,
  dropdownColor: PropTypes.node,
};
TrTableDefault.defaultProps = {
  projectColor: "text-inverse",
  leaderStatus: "white",
  dropdownColor: "",
};

export { TrTableDefault };
