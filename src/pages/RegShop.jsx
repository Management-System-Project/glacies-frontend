import { useState } from "react";
function RegShop(){
   const [file, setFile] = useState("");
   const [storeName, setStoreName] = useState("");


   const formData = new FormData();
   formData.append("file",file);
   return (<main className="main reg-shop">
      <form
         className="form"
         onSubmit={() => {
            fetch(`/boba?name=${storeName}`, {
               method: "POST",
               body: formData
            });
         }}
      >
         <h1>Registration</h1>
         <fieldset>
            <input
               type="file"
               onChange={(e) => {
                  setFile(e.target.files[0]);
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
   </main>)
}
export default RegShop;