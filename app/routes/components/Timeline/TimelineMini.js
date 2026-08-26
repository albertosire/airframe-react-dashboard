import React from "react";
import { placeholder as faker } from '../../../data/placeholders';
import PropTypes from "prop-types";

import { Badge } from "./../../../components";
import { FaIcon } from '../../../components/Icon';

const TimelineMini = ({
  showPillDate = false,
  pillDate = "Waiting",
  icon = "question-circle",
  iconClassName = "text-secondary",
  badgeColor = "secondary",
  badgeTitle = "Waiting",
}) => (
  <React.Fragment>
    {/* START TIMELINE Position */}
    <div className="timeline">
      {showPillDate && (
        <React.Fragment>
          {/* START PILL Date */}
          <div className="timeline-date">
            <Badge pill>{pillDate}</Badge>
          </div>
          {/* END PILL Date */}
        </React.Fragment>
      )}
      {/* START POST Timeline */}
      <div className="timeline-item">
        {/* Icon */}
        <div className="timeline-icon">
          <FaIcon icon={icon} fixedWidth className={`${iconClassName}`} />
        </div>
        <div className="timeline-item-head clearfix mb-0 ps-3">
          {/* Badge */}
          <div className="mb-2">
            <Badge color={badgeColor}>{badgeTitle}</Badge>
          </div>
          {/* Content */}
          <p className="text-inverse mb-1">{faker.company.catchPhrase()}</p>
          {/* Date */}
          <p>{faker.date.past().toString()}</p>
        </div>
      </div>
      {/* END POST Timeline */}
    </div>
    {/* END Timeline Position */}
  </React.Fragment>
);

TimelineMini.propTypes = {
  showPillDate: PropTypes.bool,
  pillDate: PropTypes.string,
  icon: PropTypes.string,
  iconClassName: PropTypes.string,
  badgeColor: PropTypes.string,
  badgeTitle: PropTypes.string,
};

export { TimelineMini };
