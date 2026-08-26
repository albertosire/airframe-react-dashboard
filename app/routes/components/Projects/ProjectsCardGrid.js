import React from "react";
import { placeholder as faker } from '../../../data/placeholders';
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  Badge,
  CardFooter,
  Progress,
  Avatar,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "./../../../components";

import { randomArray, randomAvatar } from "./../../../utilities";
import { FaIcon } from '../../../components/Icon';

const badges = [
  <Badge pill color="success" className="mb-2" key="badge-active">
    Active
  </Badge>,
  <Badge pill color="danger" className="mb-2" key="badge-suspended">
    Suspended
  </Badge>,
  <Badge pill color="warning" className="mb-2" key="badge-waiting">
    Waiting
  </Badge>,
  <Badge pill color="secondary" className="mb-2" key="badge-paused">
    Paused
  </Badge>,
];

const taskCompleted = ["15", "28", "30", "80", "57", "90"];

const ProjectsCardGrid = () => (
  <React.Fragment>
    {/* START Card */}
    <Card>
      <CardBody>
        {randomArray(badges)}
        <div className="mb-2">
          <a href="#" className="me-2">
            <FaIcon icon="star-o" fixedWidth />
          </a>
          <Link to="/apps/tasks/grid" className="text-decoration-none">
            {faker.company.catchPhrase()}
          </Link>
        </div>
        <div className="mb-3">
          Last Edited by: {faker.person.firstName()} {faker.person.lastName()}{" "}
          <br />
          {faker.date.weekday()}, 12 {faker.date.month()}, 2018
        </div>
        <div className="mb-3">
          <Progress
            value={randomArray(taskCompleted)}
            style={{ height: "5px" }}
            className="mb-2"
          />
          <div>
            Tasks Completed:
            <span className="text-inverse">36/94</span>
          </div>
        </div>
        <div>
          <Avatar.Image size="md" src={randomAvatar()} className="me-2" />
          <Avatar.Image size="md" src={randomAvatar()} className="me-2" />
          <Avatar.Image size="md" src={randomAvatar()} className="me-2" />
        </div>
      </CardBody>
      <CardFooter className="d-flex">
        <span className="align-self-center">20 Sep, Fri, 2018</span>
        <UncontrolledButtonDropdown className="align-self-center ms-auto">
          <DropdownToggle color="link" size="sm" className="pe-0">
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
      </CardFooter>
    </Card>
    {/* END Card */}
  </React.Fragment>
);

export { ProjectsCardGrid };
