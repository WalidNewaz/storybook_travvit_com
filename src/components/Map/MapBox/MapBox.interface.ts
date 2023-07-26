import { Map } from 'mapbox-gl';
import { TravvitAddressType } from '../../../utils/map';

export default interface MapBox {
  selectedAddress: TravvitAddressType | undefined;
  setSelectedAddress: React.Dispatch<
    React.SetStateAction<TravvitAddressType | undefined>
  >;
  isCurrentPosition: boolean;
  className?: string;
  mapInstance: Map | null;
  geocoderInstance: MapboxGeocoder | null;
}
