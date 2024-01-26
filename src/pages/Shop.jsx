import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Edit, EditPhoto } from "./components/UtilityButtons";

import "../scss/shop.scss";

function Shop() {
   const [rating, setRating] = useState(4);
   const [auth, setAuth] = useState(true);
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
            <Photo auth={auth}/>
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
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
               modi, eos non libero a esse. Minus fuga iusto necessitatibus. Est
               a nostrum, corporis hic porro, provident pariatur ullam
               blanditiis quibusdam autem minus praesentium sint! Sequi iusto
               adipisci ut provident, necessitatibus iste architecto. Et
               mollitia dolorum dolores inventore placeat, dicta iste!
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
               modi, eos non libero a esse. Minus fuga iusto necessitatibus. Est
               a nostrum, corporis hic porro, provident pariatur ullam
               blanditiis quibusdam autem minus praesentium sint! Sequi iusto
               adipisci ut provident, necessitatibus iste architecto. Et
               mollitia dolorum dolores inventore placeat, dicta iste!
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

function Photo({auth}) {
   const [photoSrc, setPhotoSrc] = useState(
      "https://i.pinimg.com/564x/bf/3b/bb/bf3bbb71ceb2aeefc3e6091439e35212.jpg"
   );
   return (
      <div className="photo">
         {photoSrc && <img src={photoSrc} alt="photo-placeholder" />}
         {auth && <EditPhoto />}
      </div>
   );
}

export default Shop;
