import { useEffect } from "react";
import Footer from "../../common/footer";
import Navbar from "../../common/nav";
import UserList from "../../common/userLists";
export default function Favs({setTitle}) {

  useEffect(() => {
    setTitle('Favorites')
    return () => setTitle('Cinemana')
  },[])

  return (
    <div className="parent col">
      <Navbar />
      <div className="container">
        <UserList refName={'favs'} name='Favorites'/>
      </div>
      <Footer/>
    </div>
  );
}
