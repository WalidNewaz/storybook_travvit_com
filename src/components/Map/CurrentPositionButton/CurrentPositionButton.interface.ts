import { TravvitAddressType } from '../../../utils/map';

export default interface CurrentPositionButton {
  setSelectedAddress: React.Dispatch<
    React.SetStateAction<TravvitAddressType | undefined>
  >;
  setIsCurrentPosition: React.Dispatch<React.SetStateAction<boolean>>;
}
