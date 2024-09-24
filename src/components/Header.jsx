import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useHeader from '../hooks/Header/useHeader';
import { languages } from '../utils/languages/languages';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { clearToken } from '../redux/slices.js/authSlice';

const Header = () => {
  const [isDarkModeOn, language, setTheme, selectChangeLanguageHandler] =
    useHeader();
  const [menuOpen, setMenuOpen] = useState(false);
  const { token } = useSelector((store) => store.token);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    dispatch(clearToken());
  };

  return (
    <header className='bg-colorS3 text-colorS1 px-4 py-2 flex items-center justify-between'>
      <div className='flex-shrink-0'>
        <Link to='/' className='text-lg font-semibold'>
          {languages[language].header.home}
        </Link>
      </div>

      {token && (
        <div className='absolute left-1/2 transform -translate-x-1/2'>
          <Link to='/quiz' className='text-lg font-semibold'>
            {languages[language].header.quiz}
          </Link>
          <Link to='/lesson' className='pl-3 text-lg font-semibold'>
            Lesson
          </Link>
        </div>
      )}

      <div className='hidden md:flex space-x-4'>
        <button onClick={setTheme} className='text-lg font-semibold'>
          {isDarkModeOn ? <MdLightMode /> : <MdDarkMode />}
        </button>
        <select
          onChange={(e) => selectChangeLanguageHandler(e.target.value)}
          className='bg-colorS3 text-colorS1 border-none outline-none text-lg font-semibold'
        >
          {languages[language]?.header?.languages?.map((language) => (
            <option key={language.identifier} value={language.identifier}>
              {language.name}
            </option>
          ))}
        </select>
        {token === null ? (
          <Link to='/sign' className='text-lg font-semibold'>
            Signup
          </Link>
        ) : (
          <button onClick={handleLogout} className='text-lg font-semibold'>
            Logout
          </button>
        )}
      </div>

      <div className='flex md:hidden'>
        <button onClick={toggleMenu} className='text-lg font-semibold'>
          Menu
        </button>
      </div>

      {menuOpen && (
        <div className='absolute top-12 right-0 bg-colorS3 z-50 w-full flex flex-col items-center md:hidden'>
          <button
            onClick={setTheme}
            className='text-lg font-semibold w-full text-left py-2 px-4'
          >
            {isDarkModeOn ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <select
            onChange={(e) => selectChangeLanguageHandler(e.target.value)}
            className='bg-colorS3 text-colorS1 border-none outline-none text-lg font-semibold w-full py-2 px-4'
          >
            {languages[language]?.header?.languages?.map((language) => (
              <option key={language.identifier} value={language.identifier}>
                {language.name}
              </option>
            ))}
          </select>
          {token === null ? (
            <Link to='/sign' className='text-lg font-semibold w-full py-2 px-4'>
              Signup
            </Link>
          ) : (
            <button onClick={handleLogout}>Logout</button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
