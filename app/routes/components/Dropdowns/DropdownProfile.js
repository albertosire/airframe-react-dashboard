import React from "react";
import { placeholder as faker } from '../../../data/placeholders';
import PropTypes from "prop-types";

import { DropdownMenu, DropdownItem } from "./../../../components";

const DropdownProfile = (props) => (
  <React.Fragment>
    <DropdownMenu end={props.end}>
      <DropdownItem header>
        {faker.person.firstName()} {faker.person.lastName()}
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem header>
        Autenticação via OpenSSO
      </DropdownItem>
    </DropdownMenu>
  </React.Fragment>
);
DropdownProfile.propTypes = {
  position: PropTypes.string,
  end: PropTypes.bool,
};
DropdownProfile.defaultProps = {
  position: "",
};

export { DropdownProfile };
