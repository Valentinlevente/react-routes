import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <p>Üdvözöljük a Petrik Webhely-gyár oldalán!</p>

        <p>Válasszon a fenti menüpontok közül!</p>
      </div>

      <Footer />
    </div>
  )
}

export default Home