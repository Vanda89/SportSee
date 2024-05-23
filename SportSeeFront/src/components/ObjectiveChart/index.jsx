import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, Legend, Cell } from 'recharts';

const CustomizedLabel = ({ value }) => (
  <text
    className="objective-percentage fill-custom-slate-800 font-bold text-26"
    x={125}
    y={115}
    textAnchor="middle"
  >
    {value ? `${value * 100}%` : ''}
    <tspan
      className="fill-custom-slate-500 font-medium text-base"
      x={125}
      dy={25}
    >
      de votre
    </tspan>
    <tspan
      className="fill-custom-slate-500 font-medium text-base"
      x={125}
      dy={25}
    >
      objectif
    </tspan>
  </text>
);

CustomizedLabel.propTypes = {
  value: PropTypes.number,
};

function ObjectiveChart({ objectives }) {
  const data = [{ name: 'Pourcentage réalisé', value: parseFloat(objectives) }];

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
        data={data}
        startAngle={90}
        endAngle={360 * data[0].value + 90}
        style={{ position: 'absolute', zIndex: 1 }}
      >
        <RadialBar
          minAngle={15}
          dataKey="value"
          cornerRadius={10}
          label={CustomizedLabel}
        >
          <Cell fill="#e60000" />
        </RadialBar>
        <Legend
          content={() => (
            <div className="font-medium ml-5 mt-3 text-custom-slate-800 ">
              Score
            </div>
          )}
          layout="vertical"
          verticalAlign="top"
          align="left"
        />
      </RadialBarChart>
      <div className="absolute w-38 h-38 bg-white rounded-full"></div>
    </div>
  );
}

ObjectiveChart.propTypes = {
  objectives: PropTypes.number.isRequired,
};

export default ObjectiveChart;
