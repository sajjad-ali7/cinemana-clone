import React, { useEffect } from 'react'
import Navbar from '../../common/nav'
import SectionsItems from '../../common/sectionsItems'
import Footer from '../../common/footer'
export default function Anime({setTitle}) {
  useEffect(() => {
    setTitle('Anime')
    return () => setTitle('Cinemana')
  },[])
  return (
    <div className="parent">
      <Navbar />
      <div className="container">
      <h1 className={'section__heading'}>Anime</h1>
        <div >
          <SectionsItems type={"tv"} get={`discover`} keyword = {'animation'} genre='16'/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
