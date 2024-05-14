import { useGetProfile } from './hook/useGetProfile';
import { useParams } from 'react-router-dom';

import ActivityChart from '../../components/ActivityChart/index.jsx';
import NutritionCards from '../../components/NutritionCards/index.jsx';
import SessionsChart from '../../components/SessionsChart/index.jsx';
import PerformanceChart from '../../components/PerformanceChart/index.jsx';
import ObjectiveChart from '../../components/ObjectiveChart/index.jsx';

function Profile() {
  const id = useParams();
  const {
    data: { profile, activity, averageSessions, performance },
    error,
    isLoading,
  } = useGetProfile(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="flex w-full h-full flex-col px-12 lg:px-26 py-10 lg:py-14 gap-16">
      <section className="profile-header flex flex-col items-center lg:items-start 2xl:items-center gap-8">
        <h1 className="font-medium text-5xl">
          Bonjour{' '}
          <span className="text-primary">{profile.userInfos.firstName}</span>
        </h1>
        <p className="text-lg">
          {' '}
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </section>
      <section className="profile-content flex flex-col-reverse xl:flex-row  2xl:justify-around gap-8 ">
        <div className="flex flex-col gap-8 ">
          <ActivityChart activity={activity} />
          <div className="h-auto lg:h-66 w-full flex flex-wrap lg:flex-nowrap items-center lg:flex-row justify-between gap-8 ">
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
