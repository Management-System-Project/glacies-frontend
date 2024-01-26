import { createBrowserRouter } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import Shop from "./pages/Shop.jsx"
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
         element: <Shop />,
         path: "/shop"
      },
      {
         element: <>Antoha</>,
         path: "/registraion"
      }
   ]
};

const pages = [{ path: "/oleg", element: <>Oleg</> }];

const Router = createBrowserRouter([home, ...pages]);

export default Router;
