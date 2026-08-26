import React from "react";
import { placeholder as faker } from '../../../../data/placeholders';
import _ from "lodash";
import { Link } from "react-router-dom";

import {
  Badge,
  Progress,
  Avatar,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "./../../../../components";
import { randomAvatar } from "./../../../../utilities";
import { FaIcon } from '../../../../components/Icon';

/*eslint-disable */
const status = [
  <Badge pill color="success">
    Active
  </Badge>,
  <Badge pill color="danger">
    Suspended
  </Badge>,
  <Badge pill color="warning">
    Waiting
  </Badge>,
  <Badge pill color="secondary">
    Paused
  </Badge>,
];
/*eslint-enable */
/*eslint-disable */
const tasksCompleted = ["25", "50", "70", "90"];
/*eslint-enable */

const TrTableProjectsList = () => (
  <React.Fragment>
    {_.times(12, (index) => (
      <tr key={index}>
        <td className="align-middle">
          <div className="text-inverse">
            <a href="#">
              <FaIcon icon="star-o" size="lg" fixedWidth />
            </a>
          </div>
        </td>
        <td className="align-middle">
          <div>
            <Link to="/apps/tasks/list" className="text-decoration-none">
              {faker.company.catchPhrase()}
            </Link>
          </div>
          <span>
            Last Edited by: {faker.person.firstName()} {faker.person.lastName()}{" "}
            <br />
            {faker.date.weekday()}, 12 {faker.date.month()}, 2018
          </span>
        </td>
        <td className="align-middle">{status[index % 4]}</td>
        <td className="align-middle">
          <Progress
            value={tasksCompleted[index % 4]}
            style={{ height: "5px" }}
            className="mb-2"
          />
          <div>
            Tasks Completed:
            <span className="text-inverse">36/94</span>
          </div>
        </td>
        <td className="align-middle">
          <Avatar.Image size="md" src={randomAvatar()} />
        </td>
        <td className="align-middle text-end">
          <UncontrolledButtonDropdown>
            <DropdownToggle color="link" outline>
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
    ))}
  </React.Fragment>
);

export { TrTableProjectsList };
