import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

function PerformanceChart(props) {
  const trad = [
    'Cardio',
    'Energie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité',
  ];

  const data = [...props.performance.data]
    .sort((a, b) => a.kind - b.kind)
    .map((item) => ({
      kind: trad[item.kind - 1],
      value: item.value,
    }))
    .reverse();

  return (
    <div className="profile-performance h-full w-64 bg-darkGrey rounded-md text-white flex justify-center items-center">
      <RadarChart
        data={data}
        width={250}
        height={250}
        cx="50%"
        cy="50%"
        outerRadius="70%"
        fill="#fff"
      >
        <PolarGrid gridType="polygon" stroke="#fff" radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          fill="#FFF"
          stroke="#FFF"
          tickLine={false}
          startAngle={90}
          endAngle={-270}
          style={{ fontSize: '12px' }}
        />
        <Radar
          fill="#e60000"
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
