import { useEffect, useState } from 'react';
import { getUsers } from '../../../services/apiService';

/**
 *
 * Custom hook to fetch user data.
 * @returns {Object} The user data, loading state, and any error encountered.
 * @property {Object} users - The user data.
 * @property {Error} error - Any error encountered while fetching the data.
 * @property {boolean} isLoading - The loading state of the data fetch.
 */
export function useGetUsers() {
  // Initialize the state variables
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch the data from the API when the component mounts and update the state variables or catch the error
  useEffect(() => {
    getUsers()
      .then((value) => {
        setUsers(value);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);
  // Return all the data in an object
  return {
    users,
    error,
    isLoading,
  };
}
