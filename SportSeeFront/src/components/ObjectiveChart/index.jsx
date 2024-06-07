import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, Legend, Cell } from 'recharts';
import FormatData from '../../data/formatData';

/**
 * CustomizedLabel is a component that displays the percentage value of the user's achieved score.
 * @param {number} value - The value to display.
 * @returns {JSX.Element} The rendered component instance.
 */
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

/**
 * ObjectiveChart is a component that displays a radial chart to represent the objectives achieved by users.
 * @param {number} objectives - The objectives to display.
 * @returns {JSX.Element} The rendered component instance.
 */
function ObjectiveChart({ objectives }) {
  /**
   * Data formatted with the user's achieved score.
   * @type {Array}
   * @property {number} value - The user's achieved score.
   * @property {string} name - The name of the data.
   */
  const formatter = new FormatData();
  const formattedData = formatter.formatProfileObjective(objectives);

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
        data={formattedData}
        startAngle={90}
        endAngle={360 * formattedData[0].value + 90}
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
