import React from 'react';
import { Link } from 'react-router-dom';
import useHeader from '../hooks/Header/useHeader';
import { languages } from '../utils/languages/languages';

const Header = () => {
  const [isDarkModeOn, language, setTheme, selectChangeLanguageHandler] = useHeader();

  return (
    <header className='bg-colorS3 text-colorS1 px-4 py-2 flex items-center justify-between'>
      <div className='flex-shrink-0'>
        <Link to='/' className='text-lg font-semibold'>
          {languages[language].header.home}
        </Link>
      </div>
      <div className='absolute left-1/2 transform -translate-x-1/2'>
        <Link to='/quiz' className='text-lg font-semibold'>
          {languages[language].header.quiz}
        </Link>
      </div>
      <div className='flex space-x-4'>
        <button onClick={setTheme} className='text-lg font-semibold'>
          {isDarkModeOn ? 'Light' : 'Dark'}
        </button>
        <select
          onChange={(e) => selectChangeLanguageHandler(e.target.value)}
          className='bg-colorS3 text-colorS1 border-none outline-none text-lg font-semibold'
        >
          {languages[language]?.header?.languages?.map((language) => {
            return (
              <option key={language.identifier} value={language.identifier}>
                {language.name}
              </option>
            );
          })}
        </select>
        <a href='/login' className='text-lg font-semibold'>
          Login
        </a>
      </div>
    </header>
  );
};

export default Header;