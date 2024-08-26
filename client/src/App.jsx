import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root'
import HomePage from './pages/HomePage';

function App() {
const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <HomePage/>,
        },
        // {
        //   path: '/auth/reg',
        //   element: <RegPage setUser={setUser} />,
        // },
        // {
        //   path: '/auth/log',
        //   element: <LogPage setUser={setUser} />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
