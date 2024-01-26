import { createBrowserRouter } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import Shop from "./pages/Shop.jsx"
import Home from "./pages/Home.jsx"
import RegShop from "./pages/RegShop.jsx"
import RegUser from "./pages/RegUser.jsx"
import Layout from "./Layout.jsx";

const home = {
   path: "/",
   element: <Layout />,
   children: [
      {
         element: <Home />,
         index: true
      },
      {
         element: <Shop />,
         path: "/shop"
      },
      {
         element: <RegUser/>,
         path: "/reg-user"
      },
      {
         element: <RegShop/>,
         path: "/reg-shop"
      },
   ]
};

const Router = createBrowserRouter([home]);

export default Router;
