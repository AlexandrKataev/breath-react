import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './Header.module.scss';

import homeIcon from '../../assets/images/home.png';
import infoIcon from '../../assets/images/info.png';
import nightIcon from '../../assets/images/night.png';
import progressIcon from '../../assets/images/progress.png';

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <div className={s.body}>
      <Link to="/">
        <img className={location.pathname === '/' ? '' : s.inActive} src={homeIcon}></img>
      </Link>
      <Link to="/progress">
        <img
          className={location.pathname === '/progress' ? '' : s.inActive}
          src={progressIcon}></img>
      </Link>
    </div>
  );
};

export default Header;
