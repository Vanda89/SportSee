import { useEffect, useState } from 'react';
import { getUsers } from '../../../services/apiService';

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
