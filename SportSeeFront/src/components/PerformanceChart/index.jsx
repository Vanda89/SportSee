import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import FormatData from '../../data/formatData';

/**
 * PerformanceChart is a component that displays performance metrics on a radar chart for easy comparison and analysis.
 * @param {Object} performance - The performance data to display.
 * Each object in the array should have a `kind` property (a number) and a `value` property (a number).
 * @returns {JSX.Element} The rendered component instance.
 */
function PerformanceChart({ performance }) {
  /**
   * Data formatted with the performance metrics.
   * @type {Array}
   * @property {string} kind - The kind of performance metric.
   * @property {number} value - The value of the performance metric.
   */
  const formatter = new FormatData();
  const formattedData = formatter.formatPerformance(performance);

  return (
    <div className="profile-performance h-full w-64 bg-custom-slate-800 rounded-md text-white flex justify-center items-center">
      <RadarChart
        className="fill-white"
        data={formattedData}
        width={250}
        height={250}
        cx="50%"
        cy="50%"
        outerRadius="70%"
      >
        <PolarGrid
          gridType="polygon"
          className="stroke-white"
          radialLines={false}
        />
        <PolarAngleAxis
          dataKey="kind"
          tick={{ fill: '#FFF', fontSize: '12px' }}
          tickLine={false}
          startAngle={90}
          endAngle={-270}
        />
        <Radar
          className="fill-custom-red-600"
          dataKey="value"
          fillOpacity={0.6}
          domain={[0, 10]}
        />
      </RadarChart>
    </div>
  );
}

PerformanceChart.propTypes = {
  performance: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        kind: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default PerformanceChart;
