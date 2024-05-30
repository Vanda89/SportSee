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
import { formatActivity } from '../../data/formatData';
import PropTypes from 'prop-types';

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

const CustomLegend = () => {
  return (
    <div className="flex justify-between items-center font-medium mb-20 mr-5">
      <p className="text-custom-slate-800">Activité quotidienne</p>
      <div className="flex h-6 gap-10 text-custom-slate-500 ">
        <div className="flex gap-3 h-full items-baseline ">
          <span className="w-2 h-2 bg-custom-slate-800 rounded-full"></span>
          <p className="">Poids (kg)</p>
        </div>
        <div className="flex gap-3 h-full items-baseline ">
          <span className="w-2 h-2 bg-custom-red-600 rounded-full"></span>
          <p className="">Calories brûlées (kCal)</p>
        </div>
      </div>
    </div>
  );
};

function Activity({ activity }) {
  const data = formatActivity(activity);

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
            className="stroke-custom-gray-300"
            strokeDasharray="3 3 "
            vertical={false}
          />
          <XAxis
            dataKey="name"
            className="fill-custom-slate-300"
            padding={{ left: -40, right: -50 }}
            margin={{ left: 0, right: 0 }}
            tick={{ fill: 'var(--color-custom-slate-300)' }}
            tickMargin={20}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            className="fill-custom-slate-300"
            yAxisId="right"
            orientation="right"
            tick={{ fill: 'var(--color-custom-slate-300)' }}
            tickLine={false}
            axisLine={false}
            tickMargin={50}
          />
          <YAxis
            className="fill-custom-slate-300"
            yAxisId="left"
            orientation="left"
            tick={{ fill: 'var(--color-custom-slate-300)' }}
            tickLine={false}
            tickMargin={50}
            axisLine={false}
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
            yAxisId="left"
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
