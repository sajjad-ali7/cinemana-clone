import { useEffect } from "react";
import Footer from "../../common/footer";
import Navbar from "../../common/nav";
import UserList from "../../common/userLists";
import { MetaDecorator } from "../../helper";
export default function Favs() {
  return (
    <div className="parent col">
      <MetaDecorator title={"Favorites"} />
      <Navbar />
      <div className="container">
        <UserList refName={"favs"} name="Favorites" />
      </div>
      <Footer/>
    </div>
  );
}
