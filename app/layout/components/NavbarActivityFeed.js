import React from "react";
import { Link } from "react-router-dom";
import { placeholder as faker } from '../../data/placeholders';
import _ from "lodash";
import PropTypes from "prop-types";

import { FaIcon, FaIconStack } from '../../components/Icon';
import {
  UncontrolledDropdown,
  DropdownToggle,
  IconWithBadge,
  Badge,
  ExtendedDropdown,
  ListGroup,
  ListGroupItem,
  Media,
} from "./../../components";

/*eslint-disable */
const activityFeedIcons = [
  <FaIconStack
    key="success"
    backIcon="circle"
    frontIcon="check"
    backClassName="text-success"
    frontClassName="text-white"
    size="lg"
    fixedWidth
    className="d-flex me-3"
  />,
  <FaIconStack
    key="danger"
    backIcon="circle"
    frontIcon="close"
    backClassName="text-danger"
    frontClassName="text-white"
    size="lg"
    fixedWidth
    className="d-flex me-3"
  />,
  <FaIconStack
    key="warning"
    backIcon="circle"
    frontIcon="exclamation"
    backClassName="text-warning"
    frontClassName="text-white"
    size="lg"
    fixedWidth
    className="d-flex me-3"
  />,
  <FaIconStack
    key="primary"
    backIcon="circle"
    frontIcon="info"
    backClassName="text-primary"
    frontClassName="text-white"
    size="lg"
    fixedWidth
    className="d-flex me-3"
  />,
];
/*eslint-enable */

const NavbarActivityFeed = (props) => (
  <UncontrolledDropdown nav inNavbar {...props}>
    <DropdownToggle nav>
      <IconWithBadge
        badge={
          <Badge pill color="primary">
            6
          </Badge>
        }
      >
        <FaIcon icon="bell-o" fixedWidth />
      </IconWithBadge>
    </DropdownToggle>
    <ExtendedDropdown right>
      <ExtendedDropdown.Section className="d-flex justify-content-between align-items-center">
        <h6 className="mb-0">Activity Feed</h6>
        <Badge pill>4</Badge>
      </ExtendedDropdown.Section>

      <ExtendedDropdown.Section list>
        <ListGroup>
          {_.times(7, (index) => (
            <ListGroupItem key={index} action>
              <Media>
                <Media left>{activityFeedIcons[index % 4]}</Media>
                <Media body>
                  <span className="h6">
                    {faker.person.firstName()} {faker.person.lastName()}
                  </span>{" "}
                  changed Description to &quot;{faker.random.words()}&quot;
                  <p className="mt-2 mb-1">{faker.lorem.sentence()}</p>
                  <div className="small mt-2">
                    {faker.date.past().toString()}
                  </div>
                </Media>
              </Media>
            </ListGroupItem>
          ))}
        </ListGroup>
      </ExtendedDropdown.Section>

      <ExtendedDropdown.Section
        className="text-center"
        tag={Link}
        to="/apps/widgets"
      >
        See All Notifications
        <FaIcon icon="angle-right" fixedWidth className="ms-2" />
      </ExtendedDropdown.Section>
    </ExtendedDropdown>
  </UncontrolledDropdown>
);
NavbarActivityFeed.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export { NavbarActivityFeed };
