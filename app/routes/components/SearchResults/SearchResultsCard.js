import React from "react";
import { placeholder as faker } from '../../../data/placeholders';
import { Card, CardBody } from "./../../../components";

import { randomArray } from "./../../../utilities";
import { FaIcon } from '../../../components/Icon';

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

const SearchResultsCard = () => (
  <React.Fragment>
    <Card className="mb-3">
      <CardBody>
        <a href="#" className="h6 text-decoration-none">
          {faker.lorem.sentence()}
        </a>
        <br />
        <div className="mb-2">
          <span className="text-success">{faker.internet.url()}</span>
          <span className="mx-2">·</span>
          {randomArray(stars)}
          <span className="mx-2">·</span>
          <span>Votes</span>
        </div>
        <p className="mb-0">{faker.lorem.paragraph()}</p>
      </CardBody>
    </Card>
  </React.Fragment>
);

export { SearchResultsCard };
