import { useState } from "react";
import "./App.css";

function App() {
   const [joke, setJoke] = useState({});
   const getJoke = async () => {
      const jokeData = await fetch(
         "https://v2.jokeapi.dev/joke/Dark?type=twopart"
      )
         .then((res) => res.json())
         .catch((err) => console.log("Roblox"));
      const { setup, delivery } = jokeData;
      setJoke({ setup, delivery });
   };

   return (
      <>
      <h1>Placeholder for glacies.store</h1>
         <div className="main">
            <button onClick={getJoke}>get a joke</button>
            <p>{joke ? joke.setup : ``}</p>
            <p>{joke ? joke.delivery : ``}</p>
         </div>
      </>
   );
}

export default App;
