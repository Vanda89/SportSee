import Logo from '../../assets/logo/logo_header.png';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../const';

export default function Header() {
  return (
    <div className="flex bg-black text-white py-5 gap-20">
      <div>
        <img src={Logo} className="w-44 mx-8" alt="Logo de SportSee" />
      </div>{' '}
      <nav className="w-full">
        <ul className="flex items-center h-full justify-around text-2xl font-medium ">
          <li>
            <NavLink to={ROUTES.HOME}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.PROFILE}>Profil</NavLink>
          </li>
          <li>
            <NavLink to="">Réglage</NavLink>
          </li>
          <li>
            <NavLink to="">Communauté</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
