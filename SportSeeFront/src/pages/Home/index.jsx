//import PropTypes from 'prop-types';
import { useGetUsers } from './hook/useGetUsers';
import { NavLink } from 'react-router-dom';

function Home() {
  const { users, error, isLoading } = useGetUsers();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <section className="flex w-full flex-col px-24 py-14 gap-32">
      <div className="welcome-message flex flex-col gap-8">
        <h1 className="font-medium text-5xl">
          Bienvenue chez <span className="text-red-500">SportSee</span>
        </h1>
        <p className="text-lg">
          {' '}
          L{"' "}application qui vous aidera à atteindre vos objectifs 🎯
        </p>
      </div>
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-3xl font-medium">
          Choisissez un profil à consulter :{' '}
        </h2>
        <div>
          {users.map((user) => (
            <NavLink key={user.id} to={`profile/${user.id}`}>
              <button className="  font-medium text-lg border border-red-500 shadow-md border-2 w-40 h-16 px-4 py-2 rounded-md mx-10">
                {user.userInfos.lastName + ' ' + user.userInfos.firstName}
              </button>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
