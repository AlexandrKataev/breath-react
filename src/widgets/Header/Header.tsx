import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

import { useAppSelector } from 'shared/hooks/redux-hooks';
import { selectAuth } from 'processes/Auth/selectors';
import { menuItems } from './model/types';

const Header: React.FC = () => {
  const auth = useAppSelector(selectAuth);

  return auth ? (
    <div className={s.body}>
      {menuItems.map((el) => {
        return (
          <NavLink to={el.path} className={({ isActive }) => (isActive ? undefined : s.inActive)}>
            <img className={s.icon} src={el.icon}></img>
          </NavLink>
        );
      })}
    </div>
  ) : (
    <div className={s.body}>
      {menuItems.map((el) => {
        return <img className={s.icon} src={el.icon}></img>;
      })}
    </div>
  );
};

{
  /* // return auth ? (
//   <div className={s.body}>
//     <NavLink
//       to={'/breath-react/info'}
//       className={({ isActive }) => (isActive ? undefined : s.inActive)}>
//       <img src={infoIcon}></img>
//     </NavLink>
//     <NavLink
//       to="/breath-react/home"
//       className={({ isActive }) => (isActive ? undefined : s.inActive)}>
//       <img src={homeIcon}></img>
//     </NavLink>
//     <NavLink
//       to="/breath-react/progress"
//       className={({ isActive }) => (isActive ? undefined : s.inActive)}>
//       <img src={progressIcon}></img>
//     </NavLink>
//   </div>
// ) : (
//   <div className={s.body}>
//     <img src={infoIcon} className={s.inActive}></img>
//     <img src={homeIcon} className={s.inActive}></img>
//     <img src={progressIcon} className={s.inActive}></img>
//   </div>
// );
 */
}
export default Header;
