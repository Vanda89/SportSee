import React from 'react';
import yoga from '../../assets/icons/yoga.png';
import swimming from '../../assets/icons/swimming.png';
import cycling from '../../assets/icons/cycling.png';
import bodybuilding from '../../assets/icons/bodybuilding.png';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

export default function NavBar() {
  const { isLinkEnabled } = React.useContext(UserContext);

  const icons = [
    { src: yoga, alt: 'Yoga icon' },
    { src: swimming, alt: 'Swimming icon' },
    { src: cycling, alt: 'Cycling icon' },
    { src: bodybuilding, alt: 'Bodybuilding icon' },
  ];

  return (
    <div className="flex flex-col gap-48 xl:gap-0 pt-16 xl:pt-0 bg-black text-white w-20  md:w-28 m-0 p-0 ">
      {/* Navigation */}
      <nav className=" flex xl:flex-grow xl:items-center justify-center ">
        <ul className="flex flex-col gap-5 items-center ">
          {icons.map((icon, index) => (
            <li key={index}>
              {isLinkEnabled ? (
                <NavLink to="">
                  <img
                    src={icon.src}
                    className="bg-neutral-100 p-2 lg:p-4 rounded-md"
                    alt={icon.alt}
                  />
                </NavLink>
              ) : (
                <img
                  src={icon.src}
                  className="bg-neutral-100 p-2 lg:p-4 rounded-md"
                  alt={icon.alt}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Copyright */}
      <p className="rotate-270 flex whitespace-nowrap text-xs mb-24">
        Copyright, SportSee 2020
      </p>
    </div>
  );
}
