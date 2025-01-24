/**
 * This module contains functions that simulate API calls
 * to retrieve different pieces of information about a user from mocked data and a real API.
 *
 * @module apiService
 */
import { CONFIG } from '../const';
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data/mockData';

/**
 * Get the main data of all users
 * @returns {Promise} A promise that resolves to an array of user objects
 */
export function getUsers() {
  const apiBaseUrl = '/api';
  if (CONFIG.mock) {
    const users = USER_MAIN_DATA;
    if (!users) {
      return Promise.reject(new Error('Users not found'));
    }
    return Promise.resolve(users);
  } else {
    const userIds = USER_MAIN_DATA.map((user) => user.id);
    return Promise.all(
      userIds.map((userId) =>
        fetch(`${apiBaseUrl}/user/${userId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((response) => {
            // Extract the data from the response
            return response.data;
          }),
      ),
    );
  }
}

/**
 * Get data for a specific user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise} A promise that resolves to the user's data.
 */
export function getUserData(userId) {
  if (CONFIG.mock) {
    const user = USER_MAIN_DATA.find((user) => user.id.toString() === userId);
    if (!user) {
      return Promise.reject(new Error('User not found'));
    }
    return Promise.resolve(user);
  } else {
    const apiBaseUrl = '/api';
    return fetch(`${apiBaseUrl}/user/${userId}`)
      .then((response) => response.json())
      .then((response) => response.data)
      .catch((error) => console.error('Error:', error));
  }
}

/**
 * Get activity data for a specific user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise} A promise that resolves to the user's activity data.
 */
export function getUserActivity(userId) {
  if (CONFIG.mock) {
    const activity = USER_ACTIVITY.find(
      (activity) => activity.userId.toString() === userId,
    );
    if (!activity) {
      return Promise.reject(new Error('Activity not found'));
    }
    return Promise.resolve(activity);
  } else {
    const apiBaseUrl = '/api';
    return fetch(`${apiBaseUrl}/user/${userId}/activity`)
      .then((response) => response.json())
      .then((response) => response.data)
      .catch((error) => console.error('Error:', error));
  }
}

/**
 * Get average session data for a specific user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise} A promise that resolves to the user's average session data.
 */
export function getUserAverageSessions(userId) {
  if (CONFIG.mock) {
    const averageSessions = USER_AVERAGE_SESSIONS.find(
      (averageSessions) => averageSessions.userId.toString() === userId,
    );
    if (!averageSessions) {
      return Promise.reject(new Error('Average sessions not found'));
    }
    return Promise.resolve(averageSessions);
  } else {
    const apiBaseUrl = '/api';
    return fetch(`${apiBaseUrl}/user/${userId}/average-sessions`)
      .then((response) => response.json())
      .then((response) => response.data)
      .catch((error) => console.error('Error:', error));
  }
}

/**
 * Get performance data for a specific user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise} A promise that resolves to the user's performance data.
 */
export function getUserPerformance(userId) {
  if (CONFIG.mock) {
    const performance = USER_PERFORMANCE.find(
      (performance) => performance.userId.toString() === userId,
    );
    if (!performance) {
      return Promise.reject(new Error('Performance not found'));
    }
    return Promise.resolve(performance);
  } else {
    const apiBaseUrl = '/api';
    return fetch(`${apiBaseUrl}/user/${userId}/performance`)
      .then((response) => response.json())
      .then((response) => response.data)
      .catch((error) => console.error('Error:', error));
  }
}
