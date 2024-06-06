import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { formatAverageSessions } from '../../data/formatData';

/**
 * CustomCursor is a functional component that renders a red gradient rectangle to the left of the active dot.
 * @param {Object} props - The props passed to the component.
 * @param {Array} props.points - The points at which the cursor is currently located.
 * @returns {JSX.Element} A red gradient rectangle.
 */
const CustomCursor = (props) => {
  const { points } = props;
  const { x } = points[0];
  const rectangleWidth = 500;
  return (
    <foreignObject
      x={x - rectangleWidth}
      y={0}
      width={rectangleWidth}
      height={400}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      />
    </foreignObject>
  );
};

CustomCursor.propTypes = {
  points: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }),
  ),
};

/**
 * ActiveDot is a functional component that renders a custom dot for the active data point.
 * @param {number} props.cx - The x-coordinate of the center of the dot.
 * @param {number} props.cy - The y-coordinate of the center of the dot.
 * @returns {JSX.Element} A group of two circles that form the custom dot.
 */
const ActiveDot = ({ cx, cy }) => (
  <g>
    <circle
      cx={cx}
      cy={cy}
      r={10}
      strokeWidth={2}
      className="fill-custom-gray-100"
    />
    <circle cx={cx} cy={cy} r={4} className="fill-white" />
  </g>
);

ActiveDot.propTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
};

/**
 * SessionsChart is a functional component that renders a line chart of session data.
 * @param {Object} sessions - An object containing an array of session data.
 * @returns {JSX.Element} A line chart rendered with Recharts.
 */
function SessionsChart({ sessions }) {
  /**
   * Data formatted with the average session length for each day of the week.
   * @type {Array}
   * @property {string} day - The day of the week.
   * @property {number} value - The average session length for the day.
   */
  const data = formatAverageSessions(sessions);

  return (
    <div className="profile-average-sessions h-full w-64 h-64 bg-custom-red-600  text-15 rounded-md">
      <LineChart
        width={256}
        height={264}
        data={data}
        margin={{ top: 30, bottom: 15, left: -15, right: -15 }}
        cursor={{ stroke: 'rgba(255, 0, 0, 0.5)', strokeWidth: 2 }}
      >
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload) {
              return (
                <div className="bg-white w-10 h-6 flex items-center justify-center text-8 font-medium">
                  {payload[0].value} min
                </div>
              );
            }
          }}
          cursor={<CustomCursor />}
        />
        <XAxis
          className="fill-custom-white-50 text-xs"
          dataKey="day"
          tick={{ fill: 'var(--color-custom-white-50)' }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis hide={true} domain={['dataMin-20', 'dataMax+10']} />

        <Legend
          content={() => (
            <div className="text-custom-white-50 ml-9 ">
              Durée moyenne des sessions
            </div>
          )}
          verticalAlign="top"
          width={180}
        />
        <defs>
          <linearGradient id="colorLine" x1="1" x2="0">
            <stop offset="5%" stopColor="#fff" stopOpacity={1} />
            <stop offset="95%" stopColor="#fff" stopOpacity={0.4} />
          </linearGradient>
        </defs>
        <Line
          type="natural"
          dataKey="value"
          stroke="url(#colorLine)"
          strokeWidth={2}
          dot={false}
          activeDot={ActiveDot}
        />
      </LineChart>
    </div>
  );
}

SessionsChart.propTypes = {
  sessions: PropTypes.shape({
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        sessionLength: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default SessionsChart;
