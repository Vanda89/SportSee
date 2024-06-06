//import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useGetUsers } from './hook/useGetUsers';
import { UserContext } from '../../contexts/UserContext';
import { NavLink } from 'react-router-dom';
import Loader from '../../components/Loader/index.jsx';

function Home() {
  const { users, error, isLoading } = useGetUsers();
  const { setUserId, setIsLinkEnabled } = useContext(UserContext);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Une erreur est survenue, veuillez réessayer plus tard.</div>;
  }

  const handleUserButtonClick = (userId) => {
    setUserId(userId);
    setIsLinkEnabled(true);
  };

  return (
    <section className="flex w-full h-screen flex-col px-12 xl:px-26 py-10 xl:py-14 gap-32">
      <div className="welcome-message flex flex-col gap-8">
        <h1 className="font-medium text-5xl">
          Bienvenue chez <span className="text-custom-red-600">SportSee</span>
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
              <button
                onClick={() => handleUserButtonClick(user.id)}
                className=" font-medium text-lg border border-red-500 shadow-md border-2 w-40 h-16 px-4 py-2 rounded-md mx-10"
              >
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
