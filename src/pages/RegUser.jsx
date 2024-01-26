import { NavLink } from "react-router-dom";

import "../scss/RegUser.scss";

import regUserBackground from "../assets/images/user-reg-back.jpg";

function RegUser() {
   console.log(regUserBackground);
   return (
      <main
         className="main reg-user"
         style={{
            background: "#fff 50% 50%/cover no-repeat",
            backgroundImage: `url(${regUserBackground})`
         }}
      >
         <nav className="role">
            <NavLink>Customer</NavLink>
            <NavLink>Merchant</NavLink>
         </nav>
         <form
            className="form"
            onSubmit={(e) => {
               e.preventDefault();
            }}
         >
            <fieldset>
               <label>
                  <span>Name</span>
                  <input type="text" />
               </label>
            </fieldset>
            <fieldset>
               <label>
                  <span>Email</span>
                  <input type="text" />
               </label>
            </fieldset>
            <fieldset>
               <label>
                  <span>Password</span>
                  <input type="text" />
               </label>
            </fieldset>
            <input type="submit" value="Sign up" />
         </form>
      </main>
   );
}
export default RegUser;
