import { useGetProfile } from './hook/useGetProfile';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ActivityChart from '../../components/ActivityChart/index.jsx';
import NutritionCards from '../../components/NutritionCards/index.jsx';
import SessionsChart from '../../components/SessionsChart/index.jsx';
import PerformanceChart from '../../components/PerformanceChart/index.jsx';
import ObjectiveChart from '../../components/ObjectiveChart/index.jsx';
import Loader from '../../components/Loader/index.jsx';

/**
 * @returns {JSX.Element} The profile page.
 */
function Profile() {
  const id = useParams();
  const navigate = useNavigate();
  const {
    data: { profile, activity, averageSessions, performance },
    error,
    isLoading,
  } = useGetProfile(id);

  useEffect(() => {
    if (!isLoading && (profile === null || profile === undefined || error)) {
      navigate('/not-found');
    }
  }, [profile, navigate, isLoading, error]);

  if (!isLoading && (profile === null || profile === undefined || error)) {
    return null;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Une erreur est survenue, veuillez réessayer plus tard.</div>;
  }

  return (
    <div className="flex w-full h-full flex-col px-12 md:px-auto xl:px-26 py-10 xl:py-14 gap-16">
      <section className="profile-header flex flex-col items-center lg:items-start 2xl:items-center gap-8">
        <h1 className="font-medium text-5xl">
          Bonjour{' '}
          <span className="text-custom-red-600">
            {profile.userInfos.firstName}
          </span>
        </h1>
        <p className="text-lg">
          {' '}
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </section>
      <section className="profile-content flex flex-col-reverse xl:flex-row  2xl:justify-around gap-8 ">
        <div className="flex flex-col gap-8 ">
          <ActivityChart activity={activity} />
          <div className="h-auto lg:h-66 w-full flex flex-wrap justify-center lg:flex-nowrap items-center lg:flex-row md:justify-between gap-8 ">
            <SessionsChart sessions={averageSessions} />
            <PerformanceChart performance={performance} />
            <ObjectiveChart objectives={profile.todayScore || profile.score} />
          </div>
        </div>
        <NutritionCards nutritionInfos={profile.keyData} />
      </section>
    </div>
  );
}

export default Profile;
