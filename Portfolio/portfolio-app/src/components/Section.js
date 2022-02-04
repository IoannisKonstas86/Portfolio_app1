import React from 'react'
import './styles/Section.scss'
import man2 from './bild/who_am.png'

const Section = () => {
    return (
        <div className='section'>


            <div className="section__container">


                <div className="section__img">
                    <img src={man2} alt="" />
                </div>


                <div className="section__content">
                    <h1>Vem är jag</h1>
                    <p>Mycket motiverad person med mer än 8 års erfarenhet inom IT-sektorn, börjar min resa med hårdvarureparation och utvecklar gradvis min skicklighet inom andra områden som nätverksteknik. De senaste 3 åren har jag lärt mig själv hur man
                         kodar genom att göra små projekt och nyligen började jag en yrkesutbildning på KYH.</p>
                    
                </div>



            </div>


        </div>
    )
}

export default Section
