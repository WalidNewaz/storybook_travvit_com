import React from 'react';

import { Badge } from '../Badge/Badge';
import BadgesProps from './Badges.interface';

const Badges: React.FC<BadgesProps> = ({ badges, className }) => (
  <div
    className={`grow flex items-end justify-start flex-wrap mt-2 mb-2 ${className}`}
  >
    {badges &&
      Object.values(badges).map((badge, key) => (
        <Badge
          key={key}
          label={badge}
          className="m-1 whitespace-nowrap"
          color="indigo"
        />
      ))}
  </div>
);

export default Badges;
