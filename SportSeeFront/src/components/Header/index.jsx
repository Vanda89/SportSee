import React from 'react';
import Logo from '../../assets/logo/logo_header.png';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../const';
import { UserContext } from '../../contexts/UserContext';

export default function Header() {
  const { userId, isLinkEnabled } = React.useContext(UserContext);

  return (
    <header className="flex bg-black text-white h-24 py-5 gap-4 md:gap-20">
      <div>
        <img
          src={Logo}
          className="w-24 md:w-32 lg:w-44 ml-4 mx-0 md:mx-8"
          alt="Logo de SportSee"
        />
      </div>{' '}
      <nav className="w-full">
        <ul className="flex items-center h-full justify-around lg:text-2xl font-medium ">
          <li>
            <NavLink to={ROUTES.HOME}>Accueil</NavLink>
          </li>
          <li>
            {isLinkEnabled ? (
              <NavLink to={`${ROUTES.PROFILE}/${userId}`}>Profil</NavLink>
            ) : (
              'Profil'
            )}
          </li>
          <li>
            {isLinkEnabled ? <NavLink to="">Réglage</NavLink> : 'Réglage'}
          </li>
          <li>
            {isLinkEnabled ? <NavLink to="">Communauté</NavLink> : 'Communauté'}
          </li>
        </ul>
      </nav>
    </header>
  );
}
