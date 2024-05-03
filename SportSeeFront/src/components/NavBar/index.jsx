import yoga from '../../assets/icons/yoga.png';
import swimming from '../../assets/icons/swimming.png';
import cycling from '../../assets/icons/cycling.png';
import bodybuilding from '../../assets/icons/bodybuilding.png';
import { NavLink } from 'react-router-dom';
//<p className=" w-1/4 ml-8">Copyright, SportSee 2020</p>{' '}
export default function NavBar() {
  return (
    <div className="flex relative flex-col justify-center items-center h-screen overflow-hidden bg-black text-white w-28  m-0 p-0 ">
      <nav className=" ">
        <ul className="flex flex-col gap-6 items-center">
          <li>
            <NavLink to="">
              <img
                src={yoga}
                className="bg-neutral-100 p-4 rounded-md"
                alt="Yoga icon"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <img
                src={swimming}
                className="bg-neutral-100 p-4 rounded-md"
                alt="Swimming icon"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <img
                src={cycling}
                className="bg-neutral-100 p-4 rounded-md"
                alt="Cycling icon"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <img
                src={bodybuilding}
                className="bg-neutral-100 p-4 rounded-md"
                alt="Bodybuilding icon"
              />
            </NavLink>
          </li>
        </ul>
      </nav>
      <p className="absolute rotate-270 bottom-20 h-20  whitespace-nowrap flex items-center justify-start text-xs ">
        Copyright, SportSee 2020
      </p>
    </div>
  );
}
