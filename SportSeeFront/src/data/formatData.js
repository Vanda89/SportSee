/**
 * Formats data by adding appropriate units to the counts.
 * @param {Object} nutritionInfos
 * @returns {Object}
 */
export function formatNutritionInfos(nutritionInfos) {
  return {
    calorieCount: `${nutritionInfos.calorieCount.toLocaleString('en-US')}kCal`,
    proteinCount: `${nutritionInfos.proteinCount}g`,
    carbohydrateCount: `${nutritionInfos.carbohydrateCount}g`,
    lipidCount: `${nutritionInfos.lipidCount}g`,
  };
}

/**
 * Formats data by converting the objectives to floating point number.
 * @param {number} objectives
 * @returns {Array}
 */
export function formatProfileObjective(objectives) {
  return [{ name: 'Pourcentage réalisé', value: parseFloat(objectives) }];
}

/**
 * Formats data by mapping each session to an object with a name and values.
 * @param {Object} activity
 * @returns {Array}
 */
export function formatActivity(activity) {
  return activity.sessions.map((session, index) => ({
    name: index + 1,
    valueKG: session.kilogram,
    valueCal: session.calories,
  }));
}

/**
 * Formats data by sorting at first to ensure a specific order (ascending by kind),
 * then mapping each item to an object with a kind and value,
 * finally reversing the array to match the order required by the design mockup.
 * @param {Object} performance
 * @returns {Array}
 */
export function formatPerformance(performance) {
  const performanceCategories = [
    'Cardio',
    'Energie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité',
  ];

  return [...performance.data]
    .sort((a, b) => a.kind - b.kind)
    .map((item) => ({
      kind: performanceCategories[item.kind - 1],
      value: item.value,
    }))
    .reverse();
}

/**
 * Formats data by mapping each session to an object with a custom label and a value.
 * @param {Object} sessions
 * @returns {Array}
 */
export function formatAverageSessions(sessions) {
  const XAxisName = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  return [
    { day: '', value: 0 },
    ...sessions.sessions.map((session, index) => ({
      day: XAxisName[index % XAxisName.length],
      value: session.sessionLength,
    })),
    { day: '', value: 75 },
  ];
}
