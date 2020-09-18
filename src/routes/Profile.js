import { authService } from 'fbase';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Profile = () => {
  const history = useHistory();
  const onLogoutClick = () => {
    authService.signOut();
    history.push('/');
  };
  return (
    <>
      <button onClick={onLogoutClick}>Sign out</button>
    </>
  );
};
export default Profile;
