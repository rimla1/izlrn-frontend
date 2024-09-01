import { useSelector } from 'react-redux';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';

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
      },
      {
        path: '/quiz',
        element: <Quiz />,
      },
    ],
    // errorElement: <Error />
  },
]);

export default App;
