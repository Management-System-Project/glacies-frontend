import { useState } from "react";


function Home(){
   const [shopList, setShopList] = useState([{img:"https://i.pinimg.com/564x/bf/3b/bb/bf3bbb71ceb2aeefc3e6091439e35212.jpg",name:"bobrKiller"}])
   return (<main className="main home">
      <ul className="shops-list">
         {shopList.map(shop=> <li><ShopPreview img={shop.img} shopName={shop.name}/></li>)}
      </ul>
   </main>)
}

function ShopPreview({img, shopName}){
   return (<><img src={img} alt="" />
   <h3>{shopName}</h3></>)
}
export default Home;