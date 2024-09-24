import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../redux/slices.js/authSlice';


const Register = ({ setSignOption }) => {
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegisterButton = async (e) => {
        e.preventDefault()
        setErrorMessage('')
        const username = usernameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        await register(username, email, password)
    }

    const register = async (username, email, password) => {
        try {
            const response = await fetch("http://3.67.135.183:3000/auth/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, email, password})
            })
            if (response.ok) {
                const token = await response.text()
                dispatch(setToken(token));
                navigate('/');
              } else {
                const result = await response.json()
                setErrorMessage(result.message);
              }
        } catch (error) {
            setErrorMessage('Something went wrong. Please try again later.');
        }

    }

  return (
    <div>
      <h2 className='text-center text-colorS1 font-semibold mb-4'>Register</h2>
      <form onSubmit={(e) => handleRegisterButton(e)} className='space-y-4'>
        <input
          ref={usernameRef}
          type='text'
          placeholder='Username'
          required
          className='w-full p-2 border border-colorS2 rounded-md bg-colorS3 text-colorS1 focus:outline-none focus:ring-2 focus:ring-colorS2'
        />
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
          Register
        </button>
      </form>

      {errorMessage && (
        <p className='text-red-500 mt-2 text-center'>{errorMessage}</p>
      )}

      <p className='mt-4 text-center'>
        Already have an account?{' '}
        <button
          onClick={() => setSignOption('login')}
          className='text-colorS1 underline cursor-pointer'
        >
          Login now!
        </button>
      </p>
    </div>
  );
};

export default Register;
