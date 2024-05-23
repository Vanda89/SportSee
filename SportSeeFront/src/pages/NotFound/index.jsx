import { NavLink } from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: '4', value: 400 },
  { name: '0', value: 100 },
  { name: '4', value: 400 },
];

const colors = ['#000', '#e60000', '#000'];

export default function NotFound() {
  return (
    <section className="flex flex-col items-center w-full h-screen px-12 xl:px-26 py-10 xl:py-14 gap-24">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={150}
          outerRadius={150}
          dataKey="value"
          className="text-5xl font-bold"
          labelLine={false}
          label={({ name, x, y }) => {
            const yPos = name === '0' ? y + 10 : y;
            const fill = name === '0' ? '#e60000' : '#000';
            return (
              <text
                x={x}
                y={yPos}
                fill={fill}
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {name}
              </text>
            );
          }}
          startAngle={90}
          endAngle={-270}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
      <NavLink
        to="/"
        className="font-medium text-medium border border-red-500 shadow-md border-2 w-max px-4 py-4 rounded-md mx-10"
      >
        Retour à la page d{"'"}accueil
      </NavLink>
    </section>
  );
}
