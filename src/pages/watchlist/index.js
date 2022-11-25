import { useEffect } from "react";
import Footer from "../../common/footer";
import Navbar from "../../common/nav";
import UserList from "../../common/userLists";


export default function Watchlist({setTitle}) {

  useEffect(() => {
    setTitle('Watchlist')
    return () => setTitle('Cinemana')
  },[])
  return (
    <div className="parent col">
      <Navbar />
      <div className="container">
        <UserList refName={'watchlist'} name='Watchlist'/>
      </div>
      <Footer/>
    </div>
  );
}