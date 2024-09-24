import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../redux/slices.js/authSlice';

const Login = ({ setSignOption }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginButton = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await login(email, password);
  };

  const login = async (email, password) => {
    try {
      const response = await fetch('http://3.67.135.183:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const token = await response.text();
      if (response.ok) {
        dispatch(setToken(token));
        navigate('/');
      } else {
        setErrorMessage(response.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div>
      <h2 className='text-center text-colorS1 font-semibold mb-4'>Login</h2>
      <form onSubmit={handleLoginButton} className='space-y-4'>
        <input
          ref={emailRef}
          type='email'
          placeholder='Email'
          required
          className='w-full p-2 border border-colorS2 rounded-md bg-colorS3 text-colorS1 focus:outline-none focus:ring-2 focus:ring-colorS2'
        />
        <input
          ref={passwordRef}
          type='password'
          placeholder='Password'
          required
          className='w-full p-2 border border-colorS2 rounded-md bg-colorS3 text-colorS1 focus:outline-none focus:ring-2 focus:ring-colorS2'
        />
        <button
          type='submit'
          className='w-full py-2 bg-colorS2 text-colorS1 rounded-md hover:bg-colorS1 hover:text-colorS2 transition-all'
        >
          Login
        </button>
      </form>

      {errorMessage && (
        <p className='text-red-500 mt-2 text-center'>{errorMessage}</p>
      )}

      <p className='mt-4 text-center'>
        Don't have an account?{' '}
        <button
          onClick={() => setSignOption('sign')}
          className='text-colorS1 underline cursor-pointer'
        >
          Create account now!
        </button>
      </p>
    </div>
  );
};

export default Login;
