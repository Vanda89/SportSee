import React from 'react';
import yoga from '../../assets/icons/yoga.png';
import swimming from '../../assets/icons/swimming.png';
import cycling from '../../assets/icons/cycling.png';
import bodybuilding from '../../assets/icons/bodybuilding.png';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

//<p className=" w-1/4 ml-8">Copyright, SportSee 2020</p>{' '}
export default function NavBar() {
  const { isLinkEnabled } = React.useContext(UserContext);

  const icons = [
    { src: yoga, alt: 'Yoga icon' },
    { src: swimming, alt: 'Swimming icon' },
    { src: cycling, alt: 'Cycling icon' },
    { src: bodybuilding, alt: 'Bodybuilding icon' },
  ];

  return (
    <div className="fixed flex relative justify-around flex-col items-center h-auto bg-black text-white w-28 m-0 p-0">
      <nav className="pt-64">
        <ul className="flex flex-col gap-5 items-center">
          {icons.map((icon, index) => (
            <li key={index}>
              {isLinkEnabled ? (
                <NavLink to="">
                  <img
                    src={icon.src}
                    className="bg-neutral-100 p-4 rounded-md"
                    alt={icon.alt}
                  />
                </NavLink>
              ) : (
                <img
                  src={icon.src}
                  className="bg-neutral-100 p-4 rounded-md"
                  alt={icon.alt}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
      <p className="rotate-270 h-24  whitespace-nowrap flex items-center justify-start text-xs ">
        Copyright, SportSee 2020
      </p>
    </div>
  );
}
