import React from "react";
import PropTypes from "prop-types";
import { placeholder as faker } from '../../data/placeholders';
import { Media, Button } from "reactstrap";
import { FaIcon, FaIconStack } from '../../components/Icon';

const Attachment = (props) => (
  <Media className={`${props.mediaClassName}`}>
    <Media left className="me-2">
      <FaIconStack
        backIcon={props.BgIcon}
        frontIcon={props.icon}
        backClassName={props.BgIconClassName}
        frontClassName={props.iconClassName}
        size="lg"
      />
    </Media>
    <Media body className="d-flex flex-column flex-md-row">
      <div>
        <div className="text-inverse text-truncate">
          {faker.system.fileName()}
        </div>
        <span>
          by{" "}
          <span>
            {faker.person.firstName()} {faker.person.firstName()}
          </span>
          <span className="text-muted"> · </span>
          <span>{faker.finance.amount()} Kb</span>
        </span>
      </div>
      <div className="ml-md-auto flex-row-reverse flex-md-row d-flex justify-content-end mt-2 mt-md-0">
        <div className="text-start text-md-right me-3">
          04-Oct-2012
          <br />
          05:20 PM
        </div>
        <Button color="link" className="align-self-center me-2 mr-md-0">
          <FaIcon icon="download" fixedWidth />
        </Button>
      </div>
    </Media>
  </Media>
);
Attachment.propTypes = {
  mediaClassName: PropTypes.node,
  icon: PropTypes.node,
  iconClassName: PropTypes.node,
  BgIcon: PropTypes.node,
  BgIconClassName: PropTypes.node,
};
Attachment.defaultProps = {
  mediaClassName: "",
  icon: "question",
  iconClassName: "text-white",
  BgIcon: "square",
  BgIconClassName: "text-muted",
};

export { Attachment };
