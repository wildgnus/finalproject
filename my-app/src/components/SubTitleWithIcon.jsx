import React from 'react';
import { StarFill, InfoCircleFill, HouseDoorFill } from 'react-bootstrap-icons';

export default function SubTitleWithIcon(props) {
  // Map icon names to React Bootstrap Icons
  const iconMap = {
    star: <StarFill />,
    info: <InfoCircleFill />,
    home: <HouseDoorFill />,
  };

  return (
    <h4>
      {iconMap[props.icon]} {props.title}
    </h4>
  );
}
