import React, { useState, useEffect } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'fbase';

function App() {
  //로그인 여부 판단
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
    // setUserObj(Object.assign({}, user));
  };

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
        // setUserObj(user);
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        <AppRouter
          userObj={userObj}
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
        />
      ) : (
        'Initializing...'
      )}
      {/* <footer>&copy; {new Date().getFullYear()} Nwitter</footer> */}
    </>
  );
}

export default App;
