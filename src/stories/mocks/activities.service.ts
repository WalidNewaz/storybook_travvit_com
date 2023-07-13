import nearbyPlaces from './nearby_activities.json';
import { ActivitySummaryType } from '../../interfaces';

export default class ActivitiesService {
  async getActivitiesNearMe(): Promise<ActivitySummaryType[]> {
    return nearbyPlaces;
  }
}
