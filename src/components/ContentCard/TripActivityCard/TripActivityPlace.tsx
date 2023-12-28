import React from 'react';

/** Icons */
import { FiMapPin } from 'react-icons/fi';

/**
 * The place for a trip activity.
 * @param params
 * @returns
 */
const TripActivityPlace: React.FC<{
  place: string;
  placeLink: string;
}> = ({ place, placeLink }) => (
  <div className="flex">
    <FiMapPin className="my-3 mr-3 text-slate-500" />
    <a
      href={placeLink}
      className="text-slate-500 hover:text-slate-700 uppercase"
    >
      <p className="my-2">{place}</p>
    </a>
  </div>
);

export default TripActivityPlace;
