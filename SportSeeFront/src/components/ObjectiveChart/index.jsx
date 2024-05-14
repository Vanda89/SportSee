import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, Legend, Cell } from 'recharts';

function ObjectiveChart({ objectives }) {
  const data = [
    { name: 'Objectif', value: 1 - parseFloat(objectives) },
    { name: 'Pourcentage réalisé', value: parseFloat(objectives) },
  ];
  console.log(data);

  const CustomizedLabel = () => {
    return (
      <text
        x={125}
        y={115}
        fill="#282D30"
        textAnchor="middle"
        style={{ fill: '#282D30', fontWeight: '700', fontSize: '26px' }}
      >
        {`${data[1].value * 100}%`}
        <tspan
          x={125}
          dy={25}
          style={{ fill: '#74798C', fontWeight: '500', fontSize: '16px' }}
        >
          de votre
        </tspan>
        <tspan
          x={125}
          dy={25}
          style={{ fill: '#74798C', fontWeight: '500', fontSize: '16px' }}
        >
          objectif
        </tspan>
      </text>
    );
  };

  return (
    <div className="profile-objective relative h-64 w-64 bg-gray-50 rounded-md flex items-center justify-center">
      <RadialBarChart
        width={250}
        height={250}
        cx="50%"
        cy="50%"
        innerRadius="90%"
        outerRadius="110%"
        barSize={10}
        data={[data[1]]}
        startAngle={90}
        endAngle={data[1].value * 360 + 90}
        style={{ position: 'absolute' }}
      >
        <RadialBar minAngle={15} clockWise dataKey="value" cornerRadius={10}>
          <Cell fill="#e60000" />
        </RadialBar>
        <Legend
          content={() => <div className="font-medium ml-5 mt-3">Score</div>}
          layout="vertical"
          verticalAlign="top"
          align="left"
        />
      </RadialBarChart>
      <RadialBarChart
        width={250}
        height={250}
        cx="50%"
        cy="50%"
        innerRadius="0%"
        outerRadius="140%"
        barSize={200}
        data={[data[0]]}
        startAngle={90}
        endAngle={450}
        style={{ position: 'absolute' }}
      >
        <RadialBar
          minAngle={15}
          clockWise
          dataKey="value"
          label={CustomizedLabel}
        >
          <Cell fill="#fff" />
        </RadialBar>
      </RadialBarChart>
    </div>
  );
}

ObjectiveChart.propTypes = {
  objectives: PropTypes.number.isRequired,
};

export default ObjectiveChart;
