import React from "react";
import { placeholder as faker } from '../../../data/placeholders';
import {
  Card,
  CardImg,
  HolderProvider,
  Media,
  Avatar,
  AvatarAddOn,
  CardFooter,
  CardBody,
} from "./../../../components";

import { randomArray, randomAvatar } from "./../../../utilities";
import { FaIcon } from '../../../components/Icon';

const status = ["danger", "success", "warning", "secondary"];

const ImagesResultsCard = () => (
  <React.Fragment>
    {/* START Card */}
    <Card className="mb-3">
      <HolderProvider.Icon iconChar="" size={32}>
        <CardImg top />
      </HolderProvider.Icon>
      <CardBody>
        <div className="d-flex mb-3">
          <span>
            <a className="h6 text-decoration-none" href="#">
              {faker.commerce.productName()}
            </a>
            <br />
            <a href="#" className="text-success">
              {faker.internet.url()}
            </a>
          </span>
          <a href="#" className="ms-auto">
            <FaIcon icon="external-link" />
          </a>
        </div>
        <Media>
          <Media left className="align-self-center me-3">
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
            <div className="mt-0 d-flex text-inverse">
              {faker.person.firstName()} {faker.person.lastName()}
            </div>
            <span>
              {faker.location.state()}, {faker.location.stateAbbr()}
            </span>
          </Media>
        </Media>
      </CardBody>
      <CardFooter className="bt-0">
        <span className="me-3">
          <FaIcon icon="eye" className="me-1" />{" "}
          <span className="text-inverse">233</span>
        </span>
        <span>
          <FaIcon icon="heart-o" className="me-1" />{" "}
          <span className="text-inverse">98</span>
        </span>
      </CardFooter>
    </Card>
    {/* END Card */}
  </React.Fragment>
);

export { ImagesResultsCard };
