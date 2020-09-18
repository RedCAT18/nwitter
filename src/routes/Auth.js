import { authService, firebaseInstance } from 'fbase';
import React, { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (newAccount) {
        //create account
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        //login
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };

  const onSocialClick = async (e) => {
    const {
      target: { name },
    } = e;
    let provider;
    if (name === 'google') {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === 'github') {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          required
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          required
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? 'Sign Up' : 'Sign In'} />
        {error}
      </form>
      <span onClick={toggleAccount}>{newAccount ? 'Sign In' : 'Sign Up'}</span>
      <div>
        <button onClick={onSocialClick} name="google">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="github">
          Continue with Github
        </button>
      </div>
    </div>
  );
};
export default Auth;
