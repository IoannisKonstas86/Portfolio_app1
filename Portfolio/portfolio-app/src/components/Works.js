import React from 'react'
import react from './bild/react.jpg'
import ui from './bild/ui.jpg'
import wd from './bild/wd.jpg'
import wd2 from './bild/wd2.jpg'
import wd3 from './bild/wd3.jpg'
import wd4 from './bild/wd4.jpg'
import './styles/Works.scss'

const Works = () => {
    return (

        
        <div className='works'>
            <div className='title'>
            <h1>Mitt Portfolio</h1>
            </div>
            <div className="work__section">

            
                <div className="cards">
                    <img src={react} alt="" />
                    <button>See Work</button>
                </div>

                <div className="cards">
                    <img src={ui} alt="" />
                    <button>See Work</button>
                </div>

                <div className="cards">
                   <img src={wd} alt="" />
                    <button>See Work</button>
                </div>

                <div className="cards">
                   <img src={wd2} alt="" />
                    <button>See Work</button>
                </div>

                <div className="cards">
                   <img src={wd3} alt="" />
                    <button>See Work</button>
                </div>

                <div className="cards">
                   <img src={wd4} alt="" />
                    <button>See Work</button>
                </div>

            </div>
        </div>
    )
}

export default Works
