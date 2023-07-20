// import { useSelector } from 'react-redux';
import nearbyActivities from './nearby_activities.json';
import { ActivityType } from '../../components/ContentCardGroup/ActivityCardGroup/ActivityCardGroup.interface';

export default class ActivitiesService {
  async getActivitiesNearMe(): Promise<ActivityType[]> {
    return nearbyActivities;
  }
}
