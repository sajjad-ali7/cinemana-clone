import { useEffect } from "react";
import Footer from "../../common/footer";
import Navbar from "../../common/nav";
import UserList from "../../common/userLists";
import { MetaDecorator } from "../../helper";

export default function Watchlist() {
  return (
    <div className="parent col">
      <MetaDecorator title={"Watchlist"} />
      <Navbar />
      <div className="container">
        <UserList refName={"watchlist"} name="Watchlist" />
      </div>
      <Footer />
    </div>
  );
}
