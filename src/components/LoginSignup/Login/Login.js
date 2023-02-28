import React, { useState, useRef} from 'react';
import Button from '../../Buttons/Button';
import { useAuth } from '../../../context/authContext';

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login, currentUser } = useAuth()

   function handleSubmit(event) {
    event.preventDefault();
    // console.log(emailRef)
    try {
      // re-setting the Error
      setError('')
      setLoading(true)
      login(username, password)
      console.log('Loggeeeddededed')
      // NOTE: In firebase password needs to be 6 or more charecters, e-mail needs to be with proper format.
    } catch {
      console.log(username)
      setError('Failed to create an account')
      console.error({ error })
    }

    setLoading(false)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        ref={emailRef}
        onChange={(event) => setUsername(event.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        ref={passwordRef}
        onChange={(event) => setPassword(event.target.value)}
      />

      <Button text='Submit' onClick={handleSubmit} />
    </form>
  );
};

export default Login;
