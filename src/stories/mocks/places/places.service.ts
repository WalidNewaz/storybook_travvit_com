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
  async getAllPlaces(): Promise<PlaceType[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('PlacesService.getAllPlaces');
        resolve(popularPlaces);
      }, 3000);
    });
  }

  async getPlaceById(id: string): Promise<PlaceType> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('PlacesService.getPlaceById');
        const place = popularPlaces.find((place: PlaceType) => place.id === id);
        resolve(place);
      }, 3000);
    });
  }

  async createPlace(place: any): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('PlacesService.createPlace');
        resolve(place);
      }, 3000);
    });
  }

  async updatePlace(place: any): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('PlacesService.updatePlace');
        resolve(place);
      }, 3000);
    });
  }

  async deletePlace(id: string): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('PlacesService.deletePlace');
        resolve(id);
      }, 3000);
    });
  }
}
