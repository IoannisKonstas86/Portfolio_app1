import { Facebook, Instagram, LinkedIn, MenuBook, SettingsPowerRounded, Twitter } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/Main.scss'
import me from './bild/me.png'

const Main = () => {
    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                            <p>Hej där !</p>
                            <h1>Jag heter Ioannis</h1>
                            <p>Front-End Development Student på kYH</p>

                            <div className="icons">
                                <a href="https://www.Twitter.com"><Twitter className='icon'/></a>
                                <a href="https://www.facebook.com"><Facebook className='icon'/></a>
                                <a href="https://www.linkedn.com"><LinkedIn className='icon'/></a>
                                <a href="https://www.instagram.com"><Instagram className='icon'/></a>                                           
                            </div>


                    <div className="buttons">
                        <button>Mitt Portfolio</button>
                        <button><Link to='/contact'></Link>Anställ mig</button>
                    </div>

                    </div>


                </div>


                <div className="main__img">
                    <img src={me} alt="" />
                </div>


            </div>



        </div>
    )
}


export default Main
