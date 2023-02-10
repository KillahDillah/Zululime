import React, { useContext } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Outlet, Link, useRoutes } from 'react-router-dom';

import Gifter from './Gifter';
import GifterCheckout from './GifterCheckout';
import Recipient from './RecipientLanding';
import RecipientGift from './RecipientGift';
import RecipientCheckout from './RecipientCheckout';
import RecipientConfirmation from './RecipientConfirmation';

import { GiftProvider } from './GiftContext';

import logo from './assets/Lululemon_logo.png';
import GifterConfirmation from './GifterConfirmation';

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
        path: '/gifter-checkout',
        element: <GifterCheckout />,
      },
      {
        path: '/recipient',
        element: <Recipient />,
      },
      {
        path: '/recipient-gift',
        element: <RecipientGift />,
      },
      {
        path: '/recipient-checkout',
        element: <RecipientCheckout />,
      },
      {
        path: '/recipient-confirmation',
        element: <RecipientConfirmation />,
      },
      {
        path: '/gifter-confirmation',
        element: <GifterConfirmation />,
      },
    ],
  },
];

const App = () => {
  let element = useRoutes(routes);

  return (
    <GiftProvider>
      <main>{element}</main>
    </GiftProvider>
  );
};

function Layout() {
  return (
    <div style={{ height: '100vh' }}>
      <nav>
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <ul>
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
    </div>
  );
}

export default App;
