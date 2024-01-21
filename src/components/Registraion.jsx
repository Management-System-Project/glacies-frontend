import "./../scss/Forms.scss";
import { useState } from "react";
function RegForm() {
   return (
      <form className="user-reg">
         <h1>Registration</h1>
         <input type="text" placeholder="email" />
         <input type="text" placeholder="password" />
         <label>
            <input type="checkbox" />
            <span> Remember me</span>
         </label>
         <input type="button" value="Submit" />
      </form>
   );
}

function RegStore() {
   const [file, setFile] = useState("");
   const [penis, setPenis] = useState("");

   const [storeName, setStoreName] = useState("");

   const formData = new FormData();
   formData.append("file",penis);
   return (
      <form
         className="store-reg"
         onSubmit={() => {
            fetch(`/boba?name=${storeName}`, {
               method: "POST",
               body: file
            });
         }}
      >
         <h1>Registration</h1>
         <fieldset>
            <input
               type="file"
               value={file}
               onChange={(e) => {
                  setFile(e.target.value);
                  setPenis(e.target.files[0]);
               }}
            />
            <fieldset>
               <input type="text" placeholder="store name" value={storeName} onChange={(e)=>{
                  setStoreName(e.target.value)
               }}/>
               <input type="submit" value="Submit" />
            </fieldset>
         </fieldset>
      </form>
   );
}

export { RegForm, RegStore };
