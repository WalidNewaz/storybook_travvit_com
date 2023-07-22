import popularPlaces from './popular_places.json';
import { PlaceType } from '../../../components/ContentCardGroup/PlaceCardGroup/PlaceCardGroup.interface';

export default class PlacesService {
  async getPopularPlaces(): Promise<PlaceType[]> {
    return popularPlaces;
  }

  async getPlacesNearMe(): Promise<PlaceType[]> {
    return popularPlaces;
  }

  async getPlacesNearPlace(): Promise<PlaceType[]> {
    return popularPlaces;
  }

  async getPlaceInfo() {
    return null;
  }
}
