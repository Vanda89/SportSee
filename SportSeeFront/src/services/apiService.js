/**
 * This module contains functions that simulate API calls
 * to retrieve different pieces of information about a user from mocked data.
 * @module apiService
 */
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data/mockData';

export function getUsers() {
  const users = USER_MAIN_DATA;

  if (!users) {
    return Promise.reject(new Error('Users not found'));
  }
  return Promise.resolve(users);
}

/**
 * Retrieves the main data of the user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Object>} A promise that resolves to the user's main data.
 */
export function getUserData(userId) {
  const user = USER_MAIN_DATA.find((user) => user.id.toString() === userId);

  if (!user) {
    return Promise.reject(new Error('User not found'));
  }

  return Promise.resolve(user);
}

/**
 * Retrieves the activity data of the user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Object>} A promise that resolves to the user's activity data.
 */
export function getUserActivity(userId) {
  const activity = USER_ACTIVITY.find(
    (activity) => activity.userId.toString() === userId,
  );

  if (!activity) {
    return Promise.reject(new Error('Activity not found'));
  }

  return Promise.resolve(activity);
}

/**
 * Retrieves the average sessions data of the user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Object>} A promise that resolves to the user's average sessions data.
 */
export function getUserAverageSessions(userId) {
  const averageSessions = USER_AVERAGE_SESSIONS.find(
    (averageSessions) => averageSessions.userId.toString() === userId,
  );

  if (!averageSessions) {
    return Promise.reject(new Error('Average sessions not found'));
  }

  return Promise.resolve(averageSessions);
}

/**
 * Retrieves the performance data of the user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Object>} A promise that resolves to the user's performance data.
 */
export function getUserPerformance(userId) {
  const performance = USER_PERFORMANCE.find(
    (performance) => performance.userId.toString() === userId,
  );

  if (!performance) {
    return Promise.reject(new Error('Performance not found'));
  }

  return Promise.resolve(performance);
}
