import { createBrowserRouter } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import {RegForm, RegStore} from "./components/Registraion.jsx";

import Layout from "./Layout.jsx";

const home = {
   path: "/",
   element: <Layout />,
   children: [
      {
         element: <>Home</>,
         index: true
      },
      {
         element: <RegStore/>,
         path: "/store"
      },
      {
         element: <RegForm />,
         path: "/registraion"
      }
   ]
};

const pages = [{ path: "/oleg", element: <>Oleg</> }];

const Router = createBrowserRouter([home, ...pages]);

export default Router;
