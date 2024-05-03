import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
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
