import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import "./scss/Layout.scss";
// Icons
import { icons } from "./assets/icons/icons.jsx";

function Layout() {
   const [sideMenu, setSideMenu] = useState(false);
   const handleSideMenuChange = ()=>{
      setSideMenu(state=> !state);
   }
   return (
      <>
         <header className="header">
            <nav>
               {/* MenuToggle and Logo */}
               <ul>
                  <li>
                     <BurgerMenu onClick={handleSideMenuChange} className={`burger-menu ${sideMenu && "--active"}`}/>
                  </li>
                  <li>
                     <NavLink to="/" className={`logo`}>
                        Glacies
                     </NavLink>
                  </li>
               </ul>

               {/* Right-side navigation */}
               <ul className="icons-list">
                  {/* {["card", "cart", "account"].map((el) => (
                     <NavIcon to="/" src={icons[el]} />
                  ))} */}
                  <li>
                     <NavIcon to="/" src={icons.card} />
                  </li>
                  {/* <li>
                     <NavIcon to="/" src={icons.cart} />
                  </li> */}
                  <li>
                     <NavIcon to="/" src={icons.account} />
                  </li>
               </ul>
            </nav>
         </header>
         <aside className={`aside ${sideMenu && "--active"}`}>
            <ul className="icons-list">
               <li>
                  <NavIcon to="/shop" src={icons.plus} />
               </li>
               <li>
                  <NavIcon to="" src={icons.discount} />
               </li>
               <li>
                  <NavIcon to="" src={icons.shop} />
               </li>
               <li>
                  <NavIcon to="" src={icons.contacts} />
               </li>
            </ul>
         </aside>
         <Outlet></Outlet>
      </>
   );
}

function NavIcon({ to, src }) {
   return (
      <NavLink to={to}>
         <img src={src.src} alt={src.alt} />
      </NavLink>
   );
}

function BurgerMenu({onClick, className}) {
   return (
      <button className={className} onClick={onClick}>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
         >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
         </svg>
      </button>
   );
}

export default Layout;
