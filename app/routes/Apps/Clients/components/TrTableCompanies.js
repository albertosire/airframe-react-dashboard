import React from "react";
import { placeholder as faker } from '../../../../data/placeholders';
import PropTypes from "prop-types";

import {
  Avatar,
  CustomInput,
  UncontrolledTooltip,
  AvatarAddOn,
  Media,
} from "./../../../../components";
import { randomArray } from "./../../../../utilities";
import { FaIcon } from '../../../../components/Icon';

const status = ["success", "danger", "warning", "secondary"];

const brand = [
  <Media key="facebook">
    <Media left className="align-self-center me-3">
      <span className="fa-stack fa-lg">
        <FaIcon icon="stop" className="text-facebook" />
        <FaIcon icon="facebook" className="fa-inverse" />
      </span>
    </Media>
    <Media body>
      <div className="text-inverse mt-0 d-flex">Facebook</div>
      <span>{faker.location.country()}</span>
    </Media>
  </Media>,
  <Media key="twitter">
    <Media left className="align-self-center me-3">
      <span className="fa-stack fa-lg">
        <FaIcon icon="stop" className="text-twitter" />
        <FaIcon icon="twitter" className="fa-inverse" />
      </span>
    </Media>
    <Media body>
      <div className="text-inverse  mt-0 d-flex">Twitter</div>
      <span>{faker.location.country()}</span>
    </Media>
  </Media>,
  <Media key="linkedin">
    <Media left className="align-self-center me-3">
      <span className="fa-stack fa-lg">
        <FaIcon icon="stop" className="text-linkedin" />
        <FaIcon icon="linkedin" className="fa-inverse" />
      </span>
    </Media>
    <Media body>
      <div className="text-inverse  mt-0 d-flex">Linkedin</div>
      <span>{faker.location.country()}</span>
    </Media>
  </Media>,
  <Media key="foursquare">
    <Media left className="align-self-center me-3">
      <span className="fa-stack fa-lg">
        <FaIcon icon="stop" className="text-foursquare" />
        <FaIcon icon="foursquare" className="fa-inverse" />
      </span>
    </Media>
    <Media body>
      <div className="text-inverse  mt-0 d-flex">Foursquare</div>
      <span>{faker.location.country()}</span>
    </Media>
  </Media>,
  <Media key="lastfm">
    <Media left className="align-self-center me-3">
      <span className="fa-stack fa-lg">
        <FaIcon icon="stop" className="text-lastfm" />
        <FaIcon icon="lastfm" className="fa-inverse" />
      </span>
    </Media>
    <Media body>
      <div className="text-inverse  mt-0 d-flex">LastFM</div>
      <span>{faker.location.country()}</span>
    </Media>
  </Media>,
  <Media key="paypal">
    <Media left className="align-self-center me-3">
      <span className="fa-stack fa-lg">
        <FaIcon icon="stop" className="text-paypal" />
        <FaIcon icon="paypal" className="fa-inverse" />
      </span>
    </Media>
    <Media body>
      <div className="text-inverse  mt-0 d-flex">PayPal</div>
      <span>{faker.location.country()}</span>
    </Media>
  </Media>,
  <Media key="amazon">
    <Media left className="align-self-center me-3">
      <span className="fa-stack fa-lg">
        <FaIcon icon="stop" className="text-amazon" />
        <FaIcon icon="amazon" className="fa-inverse" />
      </span>
    </Media>
    <Media body>
      <div className="text-inverse  mt-0 d-flex">Amazon</div>
      <span>{faker.location.country()}</span>
    </Media>
  </Media>,
  <Media key="skype">
    <Media left className="align-self-center me-3">
      <span className="fa-stack fa-lg">
        <FaIcon icon="stop" className="text-skype" />
        <FaIcon icon="skype" className="fa-inverse" />
      </span>
    </Media>
    <Media body>
      <div className="text-inverse  mt-0 d-flex">Skype</div>
      <span>{faker.location.country()}</span>
    </Media>
  </Media>,
  <Media key="spotify">
    <Media left className="align-self-center me-3">
      <span className="fa-stack fa-lg">
        <FaIcon icon="stop" className="text-spotify" />
        <FaIcon icon="spotify" className="fa-inverse" />
      </span>
    </Media>
    <Media body>
      <div className="text-inverse  mt-0 d-flex">Spotify</div>
      <span>{faker.location.country()}</span>
    </Media>
  </Media>,
  <Media key="pinterest">
    <Media left className="align-self-center me-3">
      <span className="fa-stack fa-lg">
        <FaIcon icon="stop" className="text-pinterest" />
        <FaIcon icon="pinterest" className="fa-inverse" />
      </span>
    </Media>
    <Media body>
      <div className="text-inverse  mt-0 d-flex">Pinterest</div>
      <span>{faker.location.country()}</span>
    </Media>
  </Media>,
  <Media key="windows">
    <Media left className="align-self-center me-3">
      <span className="fa-stack fa-lg">
        <FaIcon icon="stop" className="text-windows" />
        <FaIcon icon="windows" className="fa-inverse" />
      </span>
    </Media>
    <Media body>
      <div className="text-inverse  mt-0 d-flex">Windows</div>
      <span>{faker.location.country()}</span>
    </Media>
  </Media>,
  <Media key="android">
    <Media left className="align-self-center me-3">
      <span className="fa-stack fa-lg">
        <FaIcon icon="stop" className="text-android" />
        <FaIcon icon="android" className="fa-inverse" />
      </span>
    </Media>
    <Media body>
      <div className="text-inverse  mt-0 d-flex">Android</div>
      <span>{faker.location.country()}</span>
    </Media>
  </Media>,
  <Media key="medium">
    <Media left className="align-self-center me-3">
      <span className="fa-stack fa-lg">
        <FaIcon icon="stop" className="text-medium" />
        <FaIcon icon="medium" className="fa-inverse" />
      </span>
    </Media>
    <Media body>
      <div className="text-inverse  mt-0 d-flex">Medium</div>
      <span>{faker.location.country()}</span>
    </Media>
  </Media>,
];

const TrTableCompanies = (props) => (
  <React.Fragment>
    <tr>
      <td className="align-middle">
        <CustomInput
          type="checkbox"
          id={`trTableCompanies-${props.id}`}
          label=""
          inline
        />
      </td>
      <td className="align-middle">
        <a href="#" id={`trTableCompaniesTooltip-${props.id}`}>
          <FaIcon icon="star-o" fixedWidth />
        </a>
        <UncontrolledTooltip
          placement="top"
          target={`trTableCompaniesTooltip-${props.id}`}
        >
          Add To Favorites
        </UncontrolledTooltip>
      </td>
      <td className="align-middle">{randomArray(brand)}</td>
      <td className="align-middle">
        <Avatar.Image
          size="sm"
          src="http://bs4.webkom.co/img/avatars/2.jpg"
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
      </td>
      <td className="align-middle text-end">
        {faker.phone.number()}
        <br />
        {faker.internet.email()}
      </td>
      <td className="align-middle text-end">
        {faker.location.streetAddress()}
        <br />
        {faker.location.city()}
      </td>
    </tr>
  </React.Fragment>
);

TrTableCompanies.propTypes = {
  id: PropTypes.node,
};
TrTableCompanies.defaultProps = {
  id: "1",
};

export { TrTableCompanies };
