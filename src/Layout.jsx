import { NavLink, Outlet } from "react-router-dom";
import "./scss/Layout.scss"

function Layout(){
   return (<>
   <header className="header">
      <NavLink to="/" className="logo">Glacies</NavLink>
      <ul>
         <li>
            <NavLink to="registraion">Sign In</NavLink>
         </li>
         <li>
            <NavLink to="store">Create Store</NavLink>
         </li>
      </ul>
   </header>
   <main className="main">
      <Outlet></Outlet>
   </main>
   </>)
}

export default Layout;