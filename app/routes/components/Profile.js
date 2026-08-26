import React from "react";
import { placeholder as faker } from '../../data/placeholders';
import { Avatar, AvatarAddOn } from "./../../components";

import { randomArray, randomAvatar } from "./../../utilities";
import { FaIcon } from '../../components/Icon';

const Profile = () => {
  const avatar = [
    [
      <AvatarAddOn.Icon
        icon="circle"
        color="facebook"
        key="avatar-icon-bg"
      />,
      <AvatarAddOn.Icon
        icon="facebook"
        color="white"
        key="avatar-icon-fg"
        small
      />,
    ],
    [
      <AvatarAddOn.Icon
        icon="circle"
        color="twitter"
        key="avatar-icon-bg"
      />,
      <AvatarAddOn.Icon
        icon="twitter"
        color="white"
        key="avatar-icon-fg"
        small
      />,
    ],
    [
      <AvatarAddOn.Icon
        icon="circle"
        color="linkedin"
        key="avatar-icon-bg"
      />,
      <AvatarAddOn.Icon
        icon="linkedin"
        color="white"
        key="avatar-icon-fg"
        small
      />,
    ],
    [
      <AvatarAddOn.Icon
        icon="circle"
        color="foursquare"
        key="avatar-icon-bg"
      />,
      <AvatarAddOn.Icon
        icon="foursquare"
        color="white"
        key="avatar-icon-fg"
        small
      />,
    ],
    [
      <AvatarAddOn.Icon
        icon="circle"
        color="paypal"
        key="avatar-icon-bg"
      />,
      <AvatarAddOn.Icon
        icon="paypal"
        color="white"
        key="avatar-icon-fg"
        small
      />,
    ],
  ];
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center my-3">
        <Avatar.Image
          size="lg"
          src={randomAvatar()}
          addOns={[
            <AvatarAddOn.Icon
              icon="circle"
              color="white"
              key="avatar-icon-white-bg"
            />,
            ...randomArray(avatar),
          ]}
        />
      </div>
      <div className="mb-4 text-center">
        <a className="h6 text-decoration-none" href="#">
          {faker.person.firstName()} {faker.person.lastName()}
        </a>
        <div className="text-center mt-2">{faker.person.jobTitle()}</div>
        <div className="text-center">
          <FaIcon icon="map-marker" className="me-1" />
          {faker.location.city()}
        </div>
      </div>
    </React.Fragment>
  );
};

export { Profile };
