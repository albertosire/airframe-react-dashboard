import React from "react";
import { placeholder as faker } from '../../../data/placeholders';
import {
  Card,
  CardImg,
  HolderProvider,
  Media,
  Avatar,
  AvatarAddOn,
  Button,
  Badge,
  CardBody,
} from "./../../../components";

import { randomArray, randomAvatar } from "./../../../utilities";
import { FaIcon } from '../../../components/Icon';

const status = ["warning", "danger", "success", "secondary"];
const stars = [
  <span key="stars5">
    <FaIcon icon="star" fixedWidth className="text-warning" />
    <FaIcon icon="star" fixedWidth className="text-warning" />
    <FaIcon icon="star" fixedWidth className="text-warning" />
    <FaIcon icon="star" fixedWidth className="text-warning" />
    <FaIcon icon="star" fixedWidth className="text-warning" />
  </span>,
  <span key="stars4">
    <FaIcon icon="star" fixedWidth className="text-warning" />
    <FaIcon icon="star" fixedWidth className="text-warning" />
    <FaIcon icon="star" fixedWidth className="text-warning" />
    <FaIcon icon="star" fixedWidth className="text-warning" />
    <FaIcon icon="star-o" fixedWidth />
  </span>,
  <span key="stars4">
    <FaIcon icon="star" fixedWidth className="text-warning" />
    <FaIcon icon="star" fixedWidth className="text-warning" />
    <FaIcon icon="star" fixedWidth className="text-warning" />
    <FaIcon icon="star-o" fixedWidth />
    <FaIcon icon="star-o" fixedWidth />
  </span>,
  <span key="stars2">
    <FaIcon icon="star" fixedWidth className="text-warning" />
    <FaIcon icon="star" fixedWidth className="text-warning" />
    <FaIcon icon="star-o" fixedWidth />
    <FaIcon icon="star-o" fixedWidth />
    <FaIcon icon="star-o" fixedWidth />
  </span>,
  <span key="stars1">
    <FaIcon icon="star" fixedWidth className="text-warning" />
    <FaIcon icon="star-o" fixedWidth />
    <FaIcon icon="star-o" fixedWidth />
    <FaIcon icon="star-o" fixedWidth />
    <FaIcon icon="star-o" fixedWidth />
  </span>,
];

const VideosResultsCard = () => (
  <React.Fragment>
    <Card className="mb-3">
      <div className="row">
        <div className="col-md-4">
          <HolderProvider.Icon iconChar="" size={32} width="100p" height={350}>
            <CardImg height="100px" />
          </HolderProvider.Icon>
        </div>
        <div className="col-md-8 py-2">
          <CardBody>
            <div>
              <a href="#" className="h6 mb-0">
                {faker.commerce.productName()}
              </a>
            </div>
            <div className="text-success mb-3">{faker.internet.url()}</div>
            <div className="mb-3">{faker.lorem.paragraph()}</div>
            <div>
              {randomArray(stars)} <span className="ms-2">16 Reviews</span>
            </div>
            <div className="mb-2">
              <Badge color="secondary" pill className="me-1">
                {faker.internet.domainName()}
              </Badge>
              <Badge color="secondary" pill className="me-1">
                {faker.internet.domainName()}
              </Badge>
              <Badge color="secondary" pill className="me-1">
                {faker.internet.domainName()}
              </Badge>
            </div>
            <div>
              <Media>
                <Media left className="align-self-center me-3">
                  <Avatar.Image
                    size="sm"
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
                  <div className="mt-0">
                    {faker.person.firstName()} {faker.person.lastName()}
                  </div>
                </Media>
              </Media>
            </div>
          </CardBody>
        </div>
      </div>
    </Card>
  </React.Fragment>
);

export { VideosResultsCard };
