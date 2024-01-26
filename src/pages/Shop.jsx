import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Edit } from "./components/UtilityButtons";

import "../scss/shop.scss";

function Shop() {
   const [rating, setRating] = useState(4);
   const [auth, setAuth] = useState(false);
   return (
      <main className="main shop">
         <section className="hero">
            <div className="title">
               <h2>Super Shop</h2>
               <div className="rating">
                  <span>Rating</span>
                  <span>{rating}</span>
               </div>
               {auth && <Edit />}
            </div>
            <div className="photo">
               <img src="" alt="photo-placeholder" />
               {auth && <Edit />}
            </div>
            <div className="menu">
               <NavLink>Home</NavLink>
               <NavLink>Contacts</NavLink>
               <NavLink>Production</NavLink>
               <NavLink>Schedule</NavLink>
               <NavLink>Network</NavLink>
               <NavLink>Refund</NavLink>
               {!auth && <Edit />}
            </div>
         </section>
         <section className="description">
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
               modi, eos non libero a esse. Minus fuga iusto necessitatibus. Est
               a nostrum, corporis hic porro, provident pariatur ullam
               blanditiis quibusdam autem minus praesentium sint! Sequi iusto
               adipisci ut provident, necessitatibus iste architecto. Et
               mollitia dolorum dolores inventore placeat, dicta iste!
            </p>
            {auth && <Edit />}
         </section>
      </main>
   );
}

export default Shop;
