import React from "react";
import PropTypes from "prop-types";
import { placeholder as faker } from '../../../data/placeholders';
import { Media } from "./../../../components";
import { FaIconStack } from '../../../components/Icon';

const Activity = ({
  iconColorBelow = "muted",
  iconBelow = "circle",
  iconColor = "white",
  icon = "question",
}) => (
  <React.Fragment>
    <Media>
      <Media left>
        <FaIconStack
          backIcon={iconBelow}
          frontIcon={icon}
          backClassName={`text-${iconColorBelow}`}
          frontClassName={`text-${iconColor}`}
          size="lg"
          fixedWidth
          className="me-3"
        />
      </Media>
      <Media body>
        <span className="h6">
          {faker.person.firstName()} {faker.person.lastName()}
        </span>{" "}
        changed Description to &quot;{faker.random.words()}&quot;
        <p className="mt-2 mb-1">{faker.lorem.sentence()}</p>
        <div className="small mt-2">{faker.date.past().toString()}</div>
      </Media>
    </Media>
  </React.Fragment>
);
Activity.propTypes = {
  iconColorBelow: PropTypes.string,
  iconBelow: PropTypes.string,
  iconColor: PropTypes.string,
  icon: PropTypes.string,
};

export { Activity };
