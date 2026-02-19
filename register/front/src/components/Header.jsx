import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearToken } from '../redux/slices/loginSlice';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  console.log(user);

  const handleLogout = () => {
    dispatch(clearToken());
  };
  return (
    <div>
      <Link to="/login">LOGIN</Link>{' '}
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default Header;
