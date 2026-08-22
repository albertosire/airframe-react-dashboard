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

const badgesColors = ["info", "primary", "secondary"];

const UsersResultsCard = () => (
  <React.Fragment>
    {/* START Card */}
    <Card className="mb-3">
      <CardBody>
        <div className="d-flex">
          <Button color="link" size="sm" id="tooltipGridAddToFavorites">
            <i className="fa fa-star-o"></i>
          </Button>
          <UncontrolledTooltip
            placement="top"
            target="tooltipGridAddToFavorites"
          >
            Add To Favorites
          </UncontrolledTooltip>
          <UncontrolledButtonDropdown className="ms-auto">
            <DropdownToggle color="link" size="sm">
              <i className="fa fa-bars"></i>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <i className="fa fa-fw fa-phone me-2"></i>
                Call
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-fw fa-comment me-2"></i>
                Chat
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-fw fa-video-camera me-2"></i>
                Video
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-fw fa-user me-2"></i>
                Profile
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-fw fa-pencil me-2"></i>
                Edit
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <i className="fa fa-fw fa-trash me-2"></i>
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
