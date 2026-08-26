import React from "react";
import PropTypes from "prop-types";
import { placeholder as faker } from '../../data/placeholders';
import {
  Avatar,
  Media,
  AvatarAddOn,
  UncontrolledTooltip,
} from "./../../components";
import { randomArray, randomAvatar } from "./../../utilities";
import { FaIcon } from '../../components/Icon';

const status = ["success", "danger", "warning", "secondary"];

const Comment = (props) => (
  <Media className={`mb-4 ${props.mediaClassName}`}>
    <Media left className="me-3">
      <Avatar.Image
        size="md"
        src={randomAvatar()}
        className="me-2"
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
      <div className="mb-2">
        <span className="text-inverse me-2">
          {faker.person.firstName()} {faker.person.firstName()}
        </span>
        <span className="small">13-Jun-2015, 08:13</span>
      </div>
      <p className="mb-1">{faker.lorem.paragraph()}</p>
      <div>
        <span className="text-success me-2">+92</span>
        <a href="#" id="tooltipVoteUp1" className="me-2">
          <FaIcon icon="angle-up" className="text-success" />
        </a>
        <UncontrolledTooltip placement="top" target="tooltipVoteUp1">
          Vote Up
        </UncontrolledTooltip>
        <a href="#" id="tooltipVoteDown2" className="me-2">
          <FaIcon icon="angle-down" className="text-danger" />
        </a>
        <UncontrolledTooltip placement="bottom" target="tooltipVoteDown2">
          Vote Down
        </UncontrolledTooltip>
        <span className="me-2">·</span>
        <a href="#" className="me-2">
          Reply
        </a>
        <span className="me-2">·</span>
        <a href="#">Edit</a>
      </div>
    </Media>
  </Media>
);
Comment.propTypes = {
  mediaClassName: PropTypes.node,
};
Comment.defaultProps = {
  mediaClassName: "text-empty",
};

export { Comment };
