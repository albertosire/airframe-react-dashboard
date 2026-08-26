import React from "react";
import { placeholder as faker } from '../../../data/placeholders';
import {
  Card,
  UncontrolledTooltip,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Badge,
  CardBody,
} from "./../../../components";

import { Profile } from "./../Profile";

import { randomArray } from "./../../../utilities";
import { FaIcon } from '../../../components/Icon';

const badgesColors = ["info", "primary", "secondary"];

const UsersResultsCard = () => (
  <React.Fragment>
    {/* START Card */}
    <Card className="mb-3">
      <CardBody>
        <div className="d-flex">
          <Button color="link" size="sm" id="tooltipGridAddToFavorites">
            <FaIcon icon="star-o" />
          </Button>
          <UncontrolledTooltip
            placement="top"
            target="tooltipGridAddToFavorites"
          >
            Add To Favorites
          </UncontrolledTooltip>
          <UncontrolledButtonDropdown className="ms-auto">
            <DropdownToggle color="link" size="sm">
              <FaIcon icon="bars" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <FaIcon icon="phone" fixedWidth className="me-2" />
                Call
              </DropdownItem>
              <DropdownItem>
                <FaIcon icon="comment" fixedWidth className="me-2" />
                Chat
              </DropdownItem>
              <DropdownItem>
                <FaIcon icon="video-camera" fixedWidth className="me-2" />
                Video
              </DropdownItem>
              <DropdownItem>
                <FaIcon icon="user" fixedWidth className="me-2" />
                Profile
              </DropdownItem>
              <DropdownItem>
                <FaIcon icon="pencil" fixedWidth className="me-2" />
                Edit
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <FaIcon icon="trash" fixedWidth className="me-2" />
                Delete
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
        <Profile />
        <div className="text-center mb-4">
          <div className="mb-2">
            <span className="small">Labels</span>
          </div>
          <Badge pill color={randomArray(badgesColors)} className="me-1">
            {faker.commerce.department()}
          </Badge>
          <Badge pill color={randomArray(badgesColors)} className="me-1">
            {faker.commerce.department()}
          </Badge>
          <Badge pill color={randomArray(badgesColors)}>
            {faker.commerce.department()}
          </Badge>
        </div>
        <div className="text-center mb-4">
          <div className="mb-2">
            <span className="small">Profile</span>
          </div>
          <p className="mb-0">{faker.lorem.paragraph()}</p>
        </div>
      </CardBody>
    </Card>
    {/* END Card */}
  </React.Fragment>
);

export { UsersResultsCard };
