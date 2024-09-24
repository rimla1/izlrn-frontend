import { useSelector } from 'react-redux';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Lesson from './components/Lesson/Lesson';
import Error from './components/Error';
import Sign from './components/Authentication/Sign';

function App() {

  const { isDarkModeOn } = useSelector((store) => store.theme);

  return (
    <div className={isDarkModeOn ? 'dark' : 'light'}>
      <Header isDarkModeOn={isDarkModeOn} />
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <Error />
      },
      {
        path: '/quiz',
        element: <Quiz />,
        errorElement: <Error />
      },
      {
        path: '/lesson',
        element: <Lesson />,
        errorElement: <Error />
      },
      {
        path: '/sign',
        element: <Sign />,
        errorElement: <Error />
      }
    ]
  },
]);

export default App;
