import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

const performanceCategories = [
  'Cardio',
  'Energie',
  'Endurance',
  'Force',
  'Vitesse',
  'Intensité',
];
function PerformanceChart(props) {
  const data = [...props.performance.data]
    .sort((a, b) => a.kind - b.kind)
    .map((item) => ({
      kind: performanceCategories[item.kind - 1],
      value: item.value,
    }))
    .reverse();

  return (
    <div className="profile-performance h-full w-64 bg-custom-slate-800 rounded-md text-white flex justify-center items-center">
      <RadarChart
        className="fill-white"
        data={data}
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
