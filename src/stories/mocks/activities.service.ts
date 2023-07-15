// import { useSelector } from 'react-redux';
import nearbyActivities from './nearby_activities.json';
import { ActivitySummaryType } from '../../interfaces';

export default class ActivitiesService {
  async getActivitiesNearMe(): Promise<ActivitySummaryType[]> {
    return nearbyActivities;
  }
}
