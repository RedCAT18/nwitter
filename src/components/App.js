import React, { useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'fbase';

function App() {
  //로그인 여부 판단
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return <AppRouter isLoggedI={isLoggedIn} />;
}

export default App;
