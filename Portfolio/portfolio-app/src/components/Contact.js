import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Contact.scss'

const Contact = () => {
    return (
        <div className='contact'>
            <Link to='/'>
                <ArrowBack className='arrow'/>
            </Link>
            <div className="inputs">
                <h1>Kontakta Mig</h1>
                <input type="text" placeholder='Name'required/>
                <input type="text" placeholder='Email'required/>
                <input type="text" placeholder='Message' className='message'required/>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Contact
