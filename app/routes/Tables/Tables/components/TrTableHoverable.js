import React from "react";
import { placeholder as faker } from '../../../../data/placeholders';
const TrTableHoverable = () => (
  <React.Fragment>
    <tr>
      <td className="align-middle">
        <a href="#">Invoice #{faker.finance.mask()}</a>
      </td>
      <td className="align-middle">
        {faker.person.firstName()} {faker.person.lastName()}
      </td>
      <td className="align-middle">$ {faker.finance.amount()}</td>
      <td className="align-middle text-end">
        {faker.date.weekday()}, 12 {faker.date.month()}, 2018
      </td>
    </tr>
  </React.Fragment>
);

export { TrTableHoverable };
