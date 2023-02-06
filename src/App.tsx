import * as React from "react";
import type { RouteObject } from "react-router-dom";
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";

import Gifter from './Gifter';
import Recipient from './Recipient';

import logo from './logo.svg';

const App = () => {
  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/gifter",
          element: <Gifter />,
        },
        {
          path: "/recipient",
          element: <Recipient/>
        },
        // { path: "*", element: <NoMatch /> },
      ],
    },
  ];

  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  let element = useRoutes(routes);

  return (
    <main className="w-screen h-screen bg-black flex items-center justify-center flex-col gap-5">
      <img
        src={logo}
        className="pointer-events-none animate-[spin_5s_linear_infinite] w-[25rem]"
        alt="react logo"
      />
      <h1 className="text-white text-lg sm:text-4xl">
        {element}
      </h1>
    </main>
  );
};

function Layout() {
  return (
    <div>
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

      <hr />

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
