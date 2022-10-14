import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import s from './Header.module.scss';

import homeIcon from '../../assets/images/home.png';
import infoIcon from '../../assets/images/info.png';
import progressIcon from '../../assets/images/progress.png';

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <div className={s.body}>
      <NavLink to="/info" className={({ isActive }) => (isActive ? undefined : s.inActive)}>
        <img src={infoIcon}></img>
      </NavLink>
      <NavLink
        to="/breath-react/"
        className={({ isActive }) => (isActive ? undefined : s.inActive)}>
        <img src={homeIcon}></img>
      </NavLink>
      <NavLink to="/reg" className={({ isActive }) => (isActive ? undefined : s.inActive)}>
        <img src={progressIcon}></img>
      </NavLink>
    </div>
  );
};

export default Header;
