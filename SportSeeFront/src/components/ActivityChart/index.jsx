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
import PropTypes from 'prop-types';

function Activity(props) {
  const data = props.activity.sessions.map((session, index) => ({
    name: index + 1,
    valueKG: session.kilogram,
    valueCal: session.calories,
  }));

  const CustomLegend = () => {
    return (
      <div className="flex justify-between items-center font-medium mb-20 ">
        <p className="text-darkGrey">Activité quotidienne</p>
        <div className="flex h-6 gap-10 text-lightGrey ">
          <div className="flex gap-3 h-full items-baseline ">
            <span className="w-2 h-2 bg-darkGrey rounded-full"></span>
            <p className="">Poids (kg)</p>
          </div>
          <div className="flex gap-3 h-full items-baseline ">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <p className="">Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="profile-activity xl:w-208 h-80 bg-gray-50 font-medium text-15 p-6 rounded-md">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barGap={10}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid
            stroke="#ccc"
            strokeDasharray="3 3 "
            vertical={false}
          />
          <XAxis
            dataKey="name"
            stroke="#9B9EAC"
            padding={{ left: -30, right: -50 }}
            margin={{ left: 0, right: 0 }}
            tickMargin={20}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#9B9EAC"
            tickLine={false}
            axisLine={false}
            tickMargin={40}
            orientation="right"
          />
          <Tooltip />

          <Legend verticalAlign="top" content={CustomLegend} />
          <Bar
            dataKey="valueKG"
            fill="#282D30"
            barSize={7}
            radius={[20, 20, 0, 0]}
          />
          <Bar
            dataKey="valueCal"
            fill="#E60000"
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
