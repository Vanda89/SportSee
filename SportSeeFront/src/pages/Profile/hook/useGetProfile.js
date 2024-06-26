import { useEffect, useState } from 'react';
import {
  getUserData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from '../../../services/apiService';

/**
 * Custom hook to fetch user profile data.
 * @param {Object} params - The parameters for the hook.
 * @param {string} params.id - The ID of the user.
 * @returns {Object} The user data, loading state, and any error encountered.
 * @property {Object} data - The user data.
 * @property {Object} data.profile - The user's profile data.
 * @property {Object} data.activity - The user's activity data.
 * @property {Object} data.averageSessions - The user's average sessions data.
 * @property {Object} data.performance - The user's performance data.
 * @property {Error} error - Any error encountered while fetching the data.
 * @property {boolean} isLoading - The loading state of the data fetch.
 */
export function useGetProfile({ id }) {
  // Initialize the state variables
  const [profile, setProfile] = useState(null);
  const [activity, setActivity] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch the data from the API when the component mounts and update the state variables or catch the error
  useEffect(() => {
    Promise.all([
      getUserData(id),
      getUserActivity(id),
      getUserAverageSessions(id),
      getUserPerformance(id),
    ])
      .then((values) => {
        setProfile(values[0]);
        setActivity(values[1]);
        setAverageSessions(values[2]);
        setPerformance(values[3]);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [id]);
  // Return all the data in an object
  return {
    data: {
      profile,
      activity,
      averageSessions,
      performance,
    },
    error,
    isLoading,
  };
}
