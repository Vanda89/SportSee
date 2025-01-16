//import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import FormatData from '../../data/formatData';
import PropTypes from 'prop-types';

/**
 * Custom tooltip component that displays when the user hovers over a bar in the chart.
 * @param {boolean} props.active - Whether the tooltip is active.
 * @param {Array} props.payload - The data for the tooltip. Each item in the array represents a bar in the chart and contains the value for that bar.
 * @returns {JSX.Element|null} The JSX for the tooltip, or null if the tooltip is not active or there is no data.
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col text-7 justify-around items-center bg-custom-red-600 text-white font-sm w-10 h-16 py-1 ">
        <p> {`${payload[0].value}kg`} </p>
        <p> {`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
};

CustomTooltip.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.array.isRequired,
};

// Custom legend displays at the top of the chart
const CustomLegend = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 justify-between items-center font-medium mb-20 mr-5">
      <p className="text-custom-slate-800">Activité quotidienne</p>
      <div className="flex h-6 gap-10 text-custom-slate-500 ">
        <div className="flex gap-2 md:gap-3 h-full items-baseline ">
          <span className="w-2 h-2 bg-custom-slate-800 rounded-full"></span>
          <p className="">Poids (kg)</p>
        </div>
        <div className="flex gap-2 md:gap-3 h-full items-baseline ">
          <span className="w-2 h-2 bg-custom-red-600 rounded-full"></span>
          <p className="">Calories brûlées (kCal)</p>
        </div>
      </div>
    </div>
  );
};

/**
 * Activity component for displaying the activity chart with the data provided.
 * @param {Object} props.activity - The activity data for the chart.
 * @returns {JSX.Element} The JSX for the activity chart.
 */
function Activity({ activity }) {
  /**
   * The data formatted for the activity chart with the weight and calorie values and the index that represents the days of the week
   * @type {Array}
   * @property {string} name - The day of the week.
   * @property {number} valueKG - The weight value for the day.
   * @property {number} valueCal - The calorie value for the day.
   */
  const formatter = new FormatData();
  const { formattedData, minCal, maxKG } = formatter.formatActivity(activity);

  return (
    <div className="profile-activity xl:w-208 h-80 bg-gray-50 font-medium text-15 p-6 rounded-md">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={formattedData}
          barCategoryGap="5%"
          barGap={10}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid
            className="stroke-custom-gray-300"
            strokeDasharray="2.5 2.5 "
            vertical={false}
          />

          <XAxis
            dataKey="name"
            className="fill-custom-slate-300 stroke-gray-200 "
            margin={{ left: 0, right: 0 }}
            tick={{ fill: 'var(--color-custom-slate-300)' }}
            tickMargin={20}
            tickLine={false}
            axisLine={{
              stroke: 'var(--color-gray-200)',
              strokeWidth: 2,
            }}
          />
          <YAxis
            className="fill-custom-slate-300"
            yAxisId="right"
            orientation="right"
            domain={[minCal, maxKG]}
            tick={{ fill: 'var(--color-custom-slate-300)' }}
            tickLine={false}
            axisLine={false}
            tickMargin={50}
            tickCount={3}
          />
          <Tooltip
            content={CustomTooltip}
            cursor={{
              fill: 'rgb(224, 224, 224, 0.6)',
            }}
          />

          <Legend verticalAlign="top" width="100%" content={CustomLegend} />
          <Bar
            dataKey="valueKG"
            className="fill-custom-slate-800"
            yAxisId="right"
            barSize={7}
            radius={[20, 20, 0, 0]}
          />
          <Bar
            dataKey="valueCal"
            className="fill-custom-red-600"
            yAxisId="right"
            barSize={7}
            radius={[20, 20, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

Activity.propTypes = {
  activity: PropTypes.object.isRequired,
};

export default Activity;
