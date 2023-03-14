import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const image = require('../assets/profile.png')

const Introduction = () => {
  return (
    <div>
       <Navbar />
       <div className="introductionContainer">
            <div className='left'>
            <h1>Történet</h1>
                <p>Petrik Webehely-gyárat 2011-ben alapították, hogy az egyre növekvő webes igényeket ki tudja elégíteni.</p>
                <p>2022-ben multinacionális céggé nőtte ki magát a kezdetben önkéntesekből álló szervezet.</p>
            </div>
        
            <div className="right">
                <h1>Jelenlegi tagjaink</h1>
                <img src={image} alt="Nem műdödik"/>
                <ul>
                    <li>Erdős Ildikó</li>
                    <li>Jónás Viola</li>
                    <li>Kató Anna</li>
                    <li>Pintér Koppány</li>
                    <li>Sas Gizi</li>
                </ul>
            </div>
        </div>

        
        
        
       <Footer />
    </div>
  )
}

export default Introduction