import React, { useState } from 'react';
import { authService } from 'fbase';

const AuthForm = () => {
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
  return (
    <>
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
    </>
  );
};

export default AuthForm;
