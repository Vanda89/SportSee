import Home from './pages/Home/index.jsx';
import Profile from './pages/Profile/index.jsx';
import NotFound from './pages/NotFound/index.jsx';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './const';

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.PROFILE + '/:id'} element={<Profile />} />
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
