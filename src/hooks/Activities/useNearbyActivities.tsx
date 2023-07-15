import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNearbyActivities } from '../redux/actions';

const useNearbyActivities = (position: GeolocationPosition) => {
  const dispatch = useDispatch();
  const nearbyActivities = useSelector((state) => state.nearbyActivities);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (nearbyActivities.length === 0 && position) {
          // Fetch nearby activities if Redux store is empty and position is available
          await dispatch(fetchNearbyActivities(position));
        }
      } catch (error) {
        console.log('Error fetching nearby activities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [position]);

  return { nearbyActivities, loading };
};

export default useNearbyActivities;
