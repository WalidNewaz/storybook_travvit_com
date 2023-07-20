import popularPlaces from './popular_places.json';
import { PlaceCardType } from '../../../components/ContentCardGroup/PlaceCardGroup/PlaceCardGroup.interface';

export default class PlacesService {
  async getPopularPlaces(): Promise<PlaceCardType[]> {
    return popularPlaces;
  }

  async getPlacesNearMe(): Promise<PlaceCardType[]> {
    return popularPlaces;
  }

  async getPlacesNearPlace(): Promise<PlaceCardType[]> {
    return popularPlaces;
  }

  async getPlaceInfo() {
    return null;
  }
}
