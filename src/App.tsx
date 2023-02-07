import * as React from 'react';
import type { RouteObject } from 'react-router-dom';
import { Outlet, Link, useRoutes, useParams } from 'react-router-dom';

import Gifter from './Gifter';
import Recipient from './Recipient';
import RecipientGift from './RecipientGift';

let routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/gifter',
        element: <Gifter />,
      },
      {
        path: '/recipient',
        element: <Recipient />,
      },
      {
        path: '/recipient-gift',
        element: <RecipientGift />,
      },
    ],
  },
];

const App = () => {
  let element = useRoutes(routes);

  return <main>{element}</main>;
};

function Layout() {
  return (
    <div style={{height: '100vh'}}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gifter">Gifter</Link>
          </li>
          <li>
            <Link to="/recipient">Recipient</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      {/* <hr /> */}

      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App;
