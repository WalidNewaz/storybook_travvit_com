import { TravvitAddressType } from '../../../utils/map';

export default interface MapBox {
  selectedAddress: TravvitAddressType | undefined;
  setSelectedAddress: React.Dispatch<
    React.SetStateAction<TravvitAddressType | undefined>
  >;
  isCurrentPosition: boolean;
  className?: string;
}
