import type { clickHandler } from '../../../types';

interface ExplorerCard {
  src: string;
  name: string;
  profileLink: string;
  explorerLocation: string;
  locationLink: string;
  numTrips: number;
  followHandler?: clickHandler;
}

export default ExplorerCard;
