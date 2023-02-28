import React, { useState, useRef } from 'react';
import { useHistory, Link,useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../../../context/authContext.js';
import Button from '../../Buttons/Button';

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signup } = useAuth()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(passwordRef.current.value)

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError('Passwords do not match')
      throw alert(error)
    }

    if (emailRef.current.value === '') {
      setError('Email field is empty')
      throw alert(error)
    }

    if (passwordRef.current.value === '' || passwordConfirmRef.current.value === '') {
      setError('Password field is empty')
      throw alert(error)
    }

    try {
      // re-setting the Error
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history('/')
      // NOTE: In firebase password needs to be 6 or more charecters, e-mail needs to be with proper format.
    } catch {
      console.error(error)
    }

    setLoading(false)


  }

  return (

    <div >
      {/* <img/> */}
      <form onSubmit={handleSubmit}>
        <div >
          <label>Enter email
          </label>
          <input ref={emailRef} type="email"></input>
        </div>

        <div>
          <label>Enter password
          </label>
          <input ref={passwordRef} type="password" ></input>

        </div>
        <div>
          <label>Confirm password
          </label>
          <input ref={passwordConfirmRef} type="password"></input>

        </div>
        <input type="submit" value="Submit" />
        <span><Link to='/login'>Already have an account ?</Link></span>
        {/* Wont be able to re-submit our form since we are using the loading state, disabled={loading} the btn will be disabled */}
      </form>
    </div>
  );
};

export default Signup;
