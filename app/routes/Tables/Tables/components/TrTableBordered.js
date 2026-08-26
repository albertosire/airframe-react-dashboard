import React from "react";
import { placeholder as faker } from '../../../../data/placeholders';
import _ from "lodash";

import { Progress, ButtonGroup, Button } from "./../../../../components";
import { FaIcon } from '../../../../components/Icon';

/*eslint-disable */
const completion = ["25", "50", "75", "97"];
/*eslint-enable */

const TrTableBordered = () => (
  <React.Fragment>
    {_.times(5, (index) => (
      <tr key={index}>
        <td className="align-middle">
          <span className="text-inverse">{faker.company.catchPhrase()}</span>
        </td>
        <td className="align-middle">
          <Progress value={completion[index % 4]} style={{ height: "5px" }} />
        </td>
        <td className="align-middle">
          {faker.date.weekday()}, 12 {faker.date.month()}, 2018
        </td>
        <td className="align-middle">
          {faker.date.weekday()}, 12 {faker.date.month()}, 2018
        </td>
        <td className="align-middle text-end">
          <ButtonGroup>
            <Button color="link" className="text-decoration-none">
              <FaIcon icon="clone" />
            </Button>
            <Button color="link" className="text-decoration-none">
              <FaIcon icon="close" />
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    ))}
  </React.Fragment>
);

export { TrTableBordered };
